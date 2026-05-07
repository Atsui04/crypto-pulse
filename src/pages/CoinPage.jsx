import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getCoin } from "../api/coinsApi";

import Loader from "../components/ui/Loader";
import ErrorMessage from "../components/ui/ErrorMessage";
import Back from "../components/ui/Back";
import CoinDetails from "../components/coin-page/CoinDetails";

const CoinPage = () => {
  const [coin, setCoin] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(
    function () {
      async function fetchCoin() {
        try {
          setIsLoading(true);
          const data = await getCoin(id);

          setCoin(data);
          console.log(data);
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
      <Back />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : (
        <CoinDetails coin={coin} />
      )}
    </div>
  );
};

export default CoinPage;
