import type { AxiosRequestConfig } from "axios";
import { api } from "./client";
import type { ApiResponse } from "./types";

export const http = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const res = await api.get<ApiResponse<T>>(url, config);
    return res.data.body;
  },

  post: async <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> => {
    const res = await api.post<ApiResponse<T>>(url, data, config);
    return res.data.body;
  },

  patch: async <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> => {
    const res = await api.patch<ApiResponse<T>>(url, data, config);
    return res.data.body;
  },

  put: async <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> => {
    const res = await api.put<ApiResponse<T>>(url, data, config);
    return res.data.body;
  },

  del: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const res = await api.delete<ApiResponse<T>>(url, config);
    return res.data.body;
  },
};
