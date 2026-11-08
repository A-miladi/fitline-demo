interface UpdateCallbacks {
  onReady: () => void;
  onReload: () => void;
}

/** Observe a registration without activating updates until the user accepts. */
export function observeAppUpdates(
  registration: ServiceWorkerRegistration,
  container: ServiceWorkerContainer,
  { onReady, onReload }: UpdateCallbacks,
) {
  const listeners = new AbortController();
  const watched = new WeakSet<ServiceWorker>();
  let currentController = container.controller;
  let accepted = false;
  let activatedElsewhere = false;
  let reloaded = false;

  const reload = () => {
    if (reloaded) return;
    reloaded = true;
    onReload();
  };

  const watch = (worker: ServiceWorker | null) => {
    if (!worker || watched.has(worker)) return;
    watched.add(worker);
    const inspect = () => {
      if (worker.state === "installed" && container.controller) onReady();
    };
    worker.addEventListener("statechange", inspect, { signal: listeners.signal });
    inspect();
  };

  registration.addEventListener("updatefound", () => watch(registration.installing), {
    signal: listeners.signal,
  });
  container.addEventListener("controllerchange", () => {
    if (accepted) {
      reload();
    } else if (currentController && container.controller !== currentController) {
      // Another tab accepted the update. This tab still waits for its own click.
      activatedElsewhere = true;
      onReady();
    }
    currentController = container.controller;
  }, { signal: listeners.signal });

  watch(registration.waiting);
  watch(registration.installing);

  return {
    activate() {
      if (activatedElsewhere) {
        accepted = true;
        reload();
        return true;
      }
      if (!registration.waiting) return false;
      accepted = true;
      try {
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
      } catch (error) {
        accepted = false;
        throw error;
      }
      return true;
    },
    dispose() {
      listeners.abort();
    },
  };
}
