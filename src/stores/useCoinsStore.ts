import { create } from "zustand";
import { SortBy, SortOrder } from "../types";

interface CoinsState {
  sortBy: SortBy;
  sortOrder: SortOrder;
  setSort: (newSortBy: SortBy) => void;
}

export const useCoinsStore = create<CoinsState>((set, get) => ({
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
