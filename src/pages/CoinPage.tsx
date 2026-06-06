import { useParams } from "react-router";

import { getCoin } from "../api/coinsApi";
import { useFavoritesStore } from "../stores/useFavoritesStore";

import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/ErrorMessage";
import Back from "../components/ui/Back";
import CoinDetails from "../components/coin-page/CoinDetails";
import Save from "../components/ui/Save";
import { useQuery } from "@tanstack/react-query";

const CoinPage = () => {
  const { id } = useParams();

  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  const isActive = favorites?.includes(id) || false;

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
    <div className="container">
      <div className="coin-page__item">
        <Back />
        <Save isActive={isActive} onClick={() => toggleFavorite(id)} />
      </div>
      {error ? (
        <ErrorMessage error={error.message} />
      ) : (
        <CoinDetails coin={coin} isPending={isPending} />
      )}
    </div>
  );
};

export default CoinPage;
