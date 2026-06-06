import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useFavoritesStore } from "../stores/useFavoritesStore";
import { getCoin } from "../api/coinsApi";

import ErrorMessage from "../components/ui/ErrorMessage";
import Back from "../components/ui/Back";
import CoinDetails from "../components/coin-page/CoinDetails";
import Save from "../components/ui/Save";

const CoinPage = () => {
  const { id } = useParams();

  if (!id) {
    return (
      <main className="container">
        <ErrorMessage error="Coin ID is missing in the URL" />
      </main>
    );
  }

  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  const isActive = favorites.includes(id) || false;

  const {
    data: coin = null,
    isPending,
    error,
  } = useQuery({
    queryKey: ["coin", id],
    queryFn: () => getCoin(id),
    staleTime: 1000 * 60 * 1,
  });

  return (
    <main className="container">
      <div className="coin-page__item">
        <Back />
        <Save isActive={isActive} onClick={() => toggleFavorite(id)} />
      </div>
      {error ? (
        <ErrorMessage error={error.message} />
      ) : (
        <CoinDetails coin={coin} isPending={isPending} />
      )}
    </main>
  );
};

export default CoinPage;
