const ACCESS_KEY = "remat_access_token";
const REFRESH_KEY = "remat_refresh_token";

const isInvalid = (v: string | null): boolean =>
  v == null || v === "" || v === "undefined" || v === "null";

const read = (key: string): string | null => {
  const v = localStorage.getItem(key);
  if (isInvalid(v)) {
    localStorage.removeItem(key);
    return null;
  }
  return v;
};

export const tokenStorage = {
  getAccess: (): string | null => read(ACCESS_KEY),
  getRefresh: (): string | null => read(REFRESH_KEY),

  set: (accessToken: string, refreshToken?: string): void => {
    if (isInvalid(accessToken)) return;
    localStorage.setItem(ACCESS_KEY, accessToken);
    if (!isInvalid(refreshToken ?? null)) {
      localStorage.setItem(REFRESH_KEY, refreshToken as string);
    }
  },

  clear: (): void => {
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem(REFRESH_KEY);
  },
};
