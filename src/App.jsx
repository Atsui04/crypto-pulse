import { useEffect, useState } from "react";
import { getCoins } from "./api/coinsApi";
import CoinsList from "./components/CoinsList";
import Loader from "./components/Loader";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(function () {
    async function fetchCoins() {
      try {
        setIsLoading(true);
        setError("");

        const data = await getCoins();

        console.log(data);

        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCoins();
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <CoinsList coins={coins} />
      )}
    </div>
  );
};

export default App;
