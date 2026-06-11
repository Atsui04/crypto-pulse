import { useQuery } from "@tanstack/react-query";
import { useFavoritesStore } from "../stores/useFavoritesStore";
import { getCoins } from "../api/coinsApi";

import sorting from "../utils/sorting";

import CoinsList from "../components/home-page/CoinsList";
import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/ErrorMessage";
import FavoritesEmpty from "../components/favorites-page/FavoritesEmpty";
import { useCoinsStore } from "../stores/useCoinsStore";
import { useTranslation } from "react-i18next";

const Favorites = () => {
  const currency = useCoinsStore((state) => state.currency);
  const favorites = useFavoritesStore((state) => state.favorites);

  const sortBy = useFavoritesStore((state) => state.sortBy);
  const sortOrder = useFavoritesStore((state) => state.sortOrder);
  const setSort = useFavoritesStore((state) => state.setSort);

  const { t } = useTranslation();

  const {
    data: favoriteCoins = [],
    isPending,
    error,
  } = useQuery({
    queryKey: ["favoriteCoins", favorites, currency],
    queryFn: () => getCoins(currency, 1, favorites.join(",")),
    enabled: favorites.length > 0,
    staleTime: 1000 * 60 * 1,
  });

  const sortedCoins = sorting(favoriteCoins, sortBy, sortOrder);

  if (favorites.length === 0) {
    return <FavoritesEmpty />;
  }

  return (
    <main className="container favorites">
      <h1 className="favorites__header">{t("favorites.header")}</h1>

      {isPending ? (
        <Loader />
      ) : error ? (
        <ErrorMessage error={error.message} />
      ) : (
        <CoinsList
          coins={sortedCoins}
          currency={currency}
          sortOrder={sortOrder}
          sortBy={sortBy}
          onSort={setSort}
        />
      )}
    </main>
  );
};

export default Favorites;
