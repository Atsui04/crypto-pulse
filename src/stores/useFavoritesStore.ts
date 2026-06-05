import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SortBy, SortOrder } from "../types";

interface FavoritesState {
  favorites: string[];
  sortBy: SortBy;
  sortOrder: SortOrder;
  setSort: (newSortBy: SortBy) => void;
  toggleFavorite: (coinId: string) => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
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

      toggleFavorite: (coinId) =>
        set((state) => {
          const isFavorite = state.favorites.includes(coinId);

          return {
            favorites: isFavorite
              ? state.favorites.filter((id) => id !== coinId)
              : [...state.favorites, coinId],
          };
        }),
    }),
    {
      name: "crypto-pulse-favorites",
    },
  ),
);
