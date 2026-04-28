import { useEffect, useState } from "react";
import { getCoins } from "./api/coinsApi";

import sorting from "./utils/sorting";

import CoinsList from "./components/CoinsList";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState("market_cap");
  const [sortOrder, setSortOrder] = useState("desc");

  const sortedCoins = sorting(coins, sortBy, sortOrder);

  function handleSort(newSortBy) {
    if (sortBy === newSortBy) {
      setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"));
    } else {
      setSortBy(newSortBy);
      setSortOrder("desc");
    }
  }

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
    <div className="app-wrapper">
      <Header />

      <main className="container">
        {isLoading ? (
          <div className="loader-container">
            <Loader />
          </div>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <CoinsList
            coins={sortedCoins}
            sortOrder={sortOrder}
            sortBy={sortBy}
            onSort={handleSort}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
