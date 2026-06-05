import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { authApi, type LoginReq, type SignUpReq } from "@/api/auth";
import { tokenStorage } from "@/api/token";

export const useAuthStore = defineStore("auth", () => {
  const accessToken = ref<string | null>(tokenStorage.getAccess());
  const isAuthenticated = computed(() => !!accessToken.value);

  const login = async (req: LoginReq): Promise<void> => {
    const res = await authApi.login(req);
    accessToken.value = res.accessToken;
  };

  const signup = (req: SignUpReq): Promise<void> => authApi.signup(req);

  const logout = (): void => {
    authApi.logout();
    accessToken.value = null;
  };

  return { accessToken, isAuthenticated, login, signup, logout };
});
