"use client";
import { useCallback, useEffect, useState } from "react";
import { AxiosError } from "axios";
import API from "@/services";

interface UseFetchOptions<T> {
  autoFetch?: boolean;
  enabled?: boolean;
  onSuccess?: (data: T) => void;
  onError?: (error: string) => void;
}

interface FetchResult<T> {
  url: string;
  requestId: number;
  data: T | null;
  error: string | null;
}

const useFetch = <T>(url: string, options: UseFetchOptions<T> = {}) => {
  const { autoFetch = true, enabled = true, onSuccess, onError } = options;
  const [requestId, setRequestId] = useState(0);
  const [result, setResult] = useState<FetchResult<T> | null>(null);
  const refetch = useCallback(() => setRequestId((id) => id + 1), []);
  const shouldFetch = enabled && (autoFetch || requestId > 0);

  useEffect(() => {
    if (!shouldFetch) return;
    const controller = new AbortController();

    API.get<T>(url, { signal: controller.signal })
      .then(({ data }) => {
        if (controller.signal.aborted) return;
        setResult({ url, requestId, data, error: null });
        onSuccess?.(data);
      })
      .catch((err: unknown) => {
        if (controller.signal.aborted) return;
        const error = err instanceof AxiosError
          ? err.code === "ECONNABORTED" || err.code === "ETIMEDOUT"
            ? "پاسخی از سرور دریافت نشد. لطفاً کمی بعد دوباره تلاش کنید."
            : err.code === "ERR_NETWORK"
              ? "ارتباط با سرور برقرار نشد. اتصال اینترنت را بررسی کرده و دوباره تلاش کنید."
              : err.response?.data?.message || err.message
          : err instanceof Error ? err.message : "An unknown error occurred";
        setResult({ url, requestId, data: null, error });
        onError?.(error);
      });

    return () => controller.abort();
  }, [url, requestId, shouldFetch, onSuccess, onError]);

  const isCurrent = result?.url === url && result.requestId === requestId;
  return {
    data: result?.url === url ? result.data : null,
    loading: shouldFetch && !isCurrent,
    error: isCurrent ? result.error : null,
    refetch,
  };
};

export default useFetch;
