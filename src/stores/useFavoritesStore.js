import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoritesStore = create(
  persist(
    (set) => ({
      favorites: [],

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
