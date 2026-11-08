import API from "@/services";
import { useCallback, useState } from "react";
import { AxiosError } from "axios";

interface UseDeleteOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: string) => void;
}

const useDelete = <T, P>(url: string, options: UseDeleteOptions<T> = {}) => {
  const { onSuccess, onError } = options;
  const [loading, setLoading] = useState(false);

  const execute = useCallback(async (payload?: P): Promise<T> => {
    setLoading(true);
    try {
      const { data } = await API.delete<T>(payload == null ? url : `${url}/${payload}`);
      onSuccess?.(data);
      return data;
    } catch (error: unknown) {
      const message = error instanceof AxiosError
        ? error.response?.data?.message || error.message
        : error instanceof Error ? error.message : "An error occurred";
      onError?.(message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [url, onSuccess, onError]);

  return { loading, execute };
};

export default useDelete;
