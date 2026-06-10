import { http } from "./http";
import { tokenStorage } from "./token";
import type { Region } from "./types";

export interface LoginReq {
  email: string;
  password: string;
}

export interface LoginRes {
  accessToken: string;
  refreshToken: string;
}

export interface SignUpReq {
  name: string;
  phoneNumber: string;
  companyName: string;
  email: string;
  region: Region;
  password: string;
  passwordCheck: string;
}

export interface RefreshRes {
  accessToken: string;
}

export const authApi = {
  login: async (req: LoginReq): Promise<LoginRes> => {
    const res = await http.post<LoginRes>("/auth/login", req);
    tokenStorage.set(res.accessToken, res.refreshToken);
    return res;
  },

  signup: (req: SignUpReq): Promise<void> =>
    http.post<void>("/auth/signup", req),

  refresh: async (): Promise<RefreshRes> => {
    const refreshToken = tokenStorage.getRefresh();
    if (!refreshToken) throw new Error("리프레시 토큰이 없습니다.");
    const res = await http.post<RefreshRes>("/auth/refresh", { refreshToken });
    tokenStorage.set(res.accessToken, refreshToken);
    return res;
  },

  logout: (): void => {
    tokenStorage.clear();
  },
};
