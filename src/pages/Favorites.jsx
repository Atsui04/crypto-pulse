import { useEffect, useState } from "react";
import { useFavoritesStore } from "../stores/useFavoritesStore";
import { getCoins } from "../api/coinsApi";

import sorting from "../utils/sorting";
import CoinsList from "../components/home-page/CoinsList";
import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/ErrorMessage";
import FavoritesEmpty from "../components/favorites-page/FavoritesEmpty";

const Favorites = () => {
  const favorites = useFavoritesStore((state) => state.favorites);
  const sortBy = useFavoritesStore((state) => state.sortBy);
  const sortOrder = useFavoritesStore((state) => state.sortOrder);

  const setSort = useFavoritesStore((state) => state.setSort);

  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const sortedCoins = sorting(coins, sortBy, sortOrder);

  useEffect(() => {
    if (favorites.length === 0) return;

    async function fetchFavoriteCoins() {
      try {
        setIsLoading(true);
        setError("");

        const idsString = favorites.join(",");
        const data = await getCoins(idsString);

        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFavoriteCoins();
  }, [favorites]);

  if (favorites.length === 0) {
    return <FavoritesEmpty />;
  }

  return (
    <main className="container favorites">
      <h1 className="favorites__header">Watchlist</h1>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <CoinsList
          coins={sortedCoins}
          sortOrder={sortOrder}
          sortBy={sortBy}
          onSort={setSort}
        />
      )}
    </main>
  );
};

export default Favorites;
