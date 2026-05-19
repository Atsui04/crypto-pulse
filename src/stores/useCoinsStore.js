import { create } from "zustand";
import { getCoins } from "../api/coinsApi";

export const useCoinsStore = create((set, get) => ({
  coins: [],
  isLoading: false,
  error: "",
  sortBy: "market_cap",
  sortOrder: "desc",

  setSort: (newSortBy) => {
    const { sortBy, sortOrder } = get();

    if (sortBy === newSortBy) {
      set({ sortOrder: sortOrder === "desc" ? "asc" : "desc" });
    } else {
      set({ sortBy: newSortBy, sortOrder: "desc" });
    }
  },

  fetchCoins: async () => {
    if (get().coins.length > 0) return;

    try {
      set({ isLoading: true, error: "" });
      const data = await getCoins();
      set({ coins: data });
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));
