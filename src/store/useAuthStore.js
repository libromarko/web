import create from "zustand";
import getUser from "../services/api/user-api";
import history from "../history";

const initialState = {
  status: "idle",
  user: null,
  error: null
};

export const useAuthStore = create((set) => ({
  ...initialState,
  login: async (user) => {
    try {
      set(() => ({ status: "pending" }));
      const result = await getUser(user);
      set(() => ({
        status: "resolved",
        user: result,
        error: null
      }));
    } catch (error) {
      set((state) => ({ status: "rejected", error }));
    }
  },
  logout: () => {
    set(() => initialState);
    history.push("/");
  }
}));
