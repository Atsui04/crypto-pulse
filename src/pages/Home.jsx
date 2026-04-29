import { useEffect, useState } from "react";
import { getCoins } from "../api/coinsApi";

import sorting from "../utils/sorting";
import filtering from "../utils/filtering";

import CoinsList from "../components/CoinsList";
import Loader from "../components/Loader";
import Search from "../components/Search";
import EmptyCoins from "../components/EmptyCoins";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState("market_cap");
  const [sortOrder, setSortOrder] = useState("desc");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCoins = filtering(coins, searchQuery);

  const sortedCoins = sorting(filteredCoins, sortBy, sortOrder);

  function handleSort(newSortBy) {
    if (sortBy === newSortBy) {
      setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"));
    } else {
      setSortBy(newSortBy);
      setSortOrder("desc");
    }
  }

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  function handleClearSearch() {
    setSearchQuery("");
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
    <main className="container">
      <div className="controls">
        <Search searchQuery={searchQuery} onSearch={handleSearch} />
      </div>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : sortedCoins.length === 0 && searchQuery !== "" ? (
        <EmptyCoins
          searchQuery={searchQuery}
          onClearSearch={handleClearSearch}
        />
      ) : (
        <CoinsList
          coins={sortedCoins}
          sortOrder={sortOrder}
          sortBy={sortBy}
          onSort={handleSort}
        />
      )}
    </main>
  );
};

export default Home;
