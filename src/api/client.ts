import axios, { type AxiosError } from "axios";
import { tokenStorage } from "./token";
import type { ResponseStatus } from "./types";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = tokenStorage.getAccess();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ status?: ResponseStatus }>) => {
    // 401(인증 만료/없음), 403(권한 부족 - 백엔드가 invalid 토큰을 403으로 떨굴 수 있음)
    if (error.response?.status === 401 || error.response?.status === 403) {
      tokenStorage.clear();
    }

    const message =
      error.response?.data?.status?.message ??
      error.message ??
      "요청 처리 중 오류가 발생했습니다.";

    return Promise.reject(new Error(message));
  },
);
