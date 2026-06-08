import { create } from "zustand";
import { SortBy, SortOrder } from "../types";
import { CurrencyCode } from "../constants";

interface CoinsState {
  currency: CurrencyCode;
  sortBy: SortBy;
  sortOrder: SortOrder;
  setCurrency: (newCurrency: CurrencyCode) => void;
  setSort: (newSortBy: SortBy) => void;
}

export const useCoinsStore = create<CoinsState>((set, get) => ({
  currency: "usd",
  sortBy: "market_cap",
  sortOrder: "desc",

  setCurrency: (newCurrency: CurrencyCode) => {
    set({ currency: newCurrency });
  },

  setSort: (newSortBy) => {
    const { sortBy, sortOrder } = get();

    if (sortBy === newSortBy) {
      set({ sortOrder: sortOrder === "desc" ? "asc" : "desc" });
    } else {
      set({ sortBy: newSortBy, sortOrder: "desc" });
    }
  },
}));
