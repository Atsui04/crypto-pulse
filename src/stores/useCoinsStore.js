import { create } from "zustand";

export const useCoinsStore = create((set, get) => ({
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
}));
