import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getCoin } from "../api/coinsApi";
import { useFavoritesStore } from "../stores/useFavoritesStore";

import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/ErrorMessage";
import Back from "../components/ui/Back";
import CoinDetails from "../components/coin-page/CoinDetails";
import Save from "../components/ui/Save";

const CoinPage = () => {
  const [coin, setCoin] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const favorites = useFavoritesStore((state) => state.favorites);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  const { id } = useParams();

  const isActive = favorites.includes(id);

  useEffect(
    function () {
      async function fetchCoin() {
        try {
          setIsLoading(true);
          const data = await getCoin(id);

          setCoin(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      fetchCoin();
    },
    [id],
  );

  return (
    <div className="container">
      <div className="coin-page__item">
        <Back />
        <Save isActive={isActive} onClick={() => toggleFavorite(id)} />
      </div>
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        <CoinDetails coin={coin} isLoading={isLoading} />
      )}
    </div>
  );
};

export default CoinPage;
