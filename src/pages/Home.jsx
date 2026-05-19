import { useEffect, useState } from "react";

import sorting from "../utils/sorting";
import filtering from "../utils/filtering";

import CoinsList from "../components/home-page/CoinsList";
import Loader from "../components/ui/Loader";
import Search from "../components/home-page/Search";
import EmptyCoins from "../components/home-page/EmptyCoins";
import { useCoinsStore } from "../stores/useCoinsStore";

const Home = () => {
  const coins = useCoinsStore((state) => state.coins);
  const isLoading = useCoinsStore((state) => state.isLoading);
  const error = useCoinsStore((state) => state.error);
  const sortBy = useCoinsStore((state) => state.sortBy);
  const sortOrder = useCoinsStore((state) => state.sortOrder);

  const setSort = useCoinsStore((state) => state.setSort);
  const fetchCoins = useCoinsStore((state) => state.fetchCoins);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredCoins = filtering(coins, searchQuery);
  const sortedCoins = sorting(filteredCoins, sortBy, sortOrder);

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  function handleClearSearch() {
    setSearchQuery("");
  }

  useEffect(
    function () {
      fetchCoins();
    },
    [fetchCoins],
  );

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
          onSort={setSort}
        />
      )}
    </main>
  );
};

export default Home;
