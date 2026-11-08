import assert from "node:assert/strict";
import test from "node:test";
import { observeAppUpdates } from "../src/utils/pwaUpdates.ts";

class Worker extends EventTarget {
  state = "installed";
  messages = [];
  postMessage(message) { this.messages.push(message); }
  change(state) { this.state = state; this.dispatchEvent(new Event("statechange")); }
}

function fixture({ firstInstall = false, waiting = null, installing = null } = {}) {
  const container = new EventTarget();
  container.controller = firstInstall ? null : new Worker();
  const registration = new EventTarget();
  Object.assign(registration, { waiting, installing });
  let ready = 0, reloads = 0;
  const observer = observeAppUpdates(registration, container, {
    onReady: () => ready++, onReload: () => reloads++,
  });
  return { registration, container, observer, counts: () => ({ ready, reloads }) };
}

test("existing waiting update is announced but only activated after a click", () => {
  const worker = new Worker();
  const f = fixture({ waiting: worker });
  assert.deepEqual(f.counts(), { ready: 1, reloads: 0 });
  assert.deepEqual(worker.messages, []);
  assert.equal(f.observer.activate(), true);
  assert.deepEqual(worker.messages, [{ type: "SKIP_WAITING" }]);
  assert.equal(f.counts().reloads, 0);
  f.container.controller = worker;
  f.container.dispatchEvent(new Event("controllerchange"));
  f.container.dispatchEvent(new Event("controllerchange"));
  assert.equal(f.counts().reloads, 1);
  f.observer.dispose();
});

test("a newly downloaded update is announced after installation completes", () => {
  const f = fixture();
  const worker = new Worker();
  worker.state = "installing";
  f.registration.installing = worker;
  f.registration.dispatchEvent(new Event("updatefound"));
  assert.equal(f.counts().ready, 0);
  f.registration.waiting = worker;
  worker.change("installed");
  assert.deepEqual(f.counts(), { ready: 1, reloads: 0 });
  f.observer.dispose();
});

test("first installation does not show an update or reload the page", () => {
  const worker = new Worker();
  worker.state = "installing";
  const f = fixture({ firstInstall: true, installing: worker });
  worker.change("installed");
  f.container.controller = worker;
  f.container.dispatchEvent(new Event("controllerchange"));
  assert.deepEqual(f.counts(), { ready: 0, reloads: 0 });
  f.observer.dispose();
});

test("another tab's activation waits for this tab's own update button", () => {
  const f = fixture();
  f.container.controller = new Worker();
  f.container.dispatchEvent(new Event("controllerchange"));
  assert.deepEqual(f.counts(), { ready: 1, reloads: 0 });
  assert.equal(f.observer.activate(), true);
  assert.equal(f.counts().reloads, 1);
  f.observer.dispose();
});

test("missing and failed installations do not activate or reload", () => {
  const worker = new Worker();
  worker.state = "installing";
  const f = fixture({ installing: worker });
  worker.change("redundant");
  assert.equal(f.observer.activate(), false);
  assert.deepEqual(f.counts(), { ready: 0, reloads: 0 });
  f.observer.dispose();
});

test("cleanup removes lifecycle listeners", () => {
  const worker = new Worker();
  worker.state = "installing";
  const f = fixture({ installing: worker });
  f.observer.dispose();
  worker.change("installed");
  f.container.controller = new Worker();
  f.container.dispatchEvent(new Event("controllerchange"));
  assert.deepEqual(f.counts(), { ready: 0, reloads: 0 });
});

test("a tab opened during first installation can accept a later cross-tab update", () => {
  const f = fixture({ firstInstall: true });
  f.container.controller = new Worker();
  f.container.dispatchEvent(new Event("controllerchange"));
  assert.equal(f.counts().ready, 0);
  f.container.controller = new Worker();
  f.container.dispatchEvent(new Event("controllerchange"));
  assert.equal(f.counts().ready, 1);
  assert.equal(f.observer.activate(), true);
  assert.equal(f.counts().reloads, 1);
  f.observer.dispose();
});
