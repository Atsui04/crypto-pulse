import { create } from "zustand";
import { SortBy, SortOrder } from "../types";
import { CurrencyCode } from "../constants";

interface CoinsState {
  currency: CurrencyCode;
  page: number;
  sortBy: SortBy;
  sortOrder: SortOrder;
  setPage: (newPage: number) => void;
  setCurrency: (newCurrency: CurrencyCode) => void;
  setSort: (newSortBy: SortBy) => void;
}

export const useCoinsStore = create<CoinsState>((set, get) => ({
  currency: "usd",
  sortBy: "market_cap",
  sortOrder: "desc",
  page: 1,

  setPage: (newPage: number) => {
    set({ page: newPage });
  },

  setCurrency: (newCurrency: CurrencyCode) => {
    set({ currency: newCurrency, page: 1 });
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
