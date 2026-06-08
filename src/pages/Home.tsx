import { ChangeEvent, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useCoinsStore } from "../stores/useCoinsStore";
import { getCoins } from "../api/coinsApi";

import sorting from "../utils/sorting";
import filtering from "../utils/filtering";

import CoinsList from "../components/home-page/CoinsList";
import Loader from "../components/ui/Loader";
import Search from "../components/home-page/Search";
import EmptyCoins from "../components/home-page/EmptyCoins";
import ErrorMessage from "../components/ui/ErrorMessage";

const Home = () => {
  const currency = useCoinsStore((state) => state.currency);

  const {
    data: coins = [],
    isPending,
    error,
  } = useQuery({
    queryKey: ["marketCoins", currency],
    queryFn: () => getCoins(currency),
    staleTime: 1000 * 60 * 1,
  });

  const sortBy = useCoinsStore((state) => state.sortBy);
  const sortOrder = useCoinsStore((state) => state.sortOrder);
  const setSort = useCoinsStore((state) => state.setSort);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredCoins = filtering(coins, searchQuery);
  const sortedCoins = sorting(filteredCoins, sortBy, sortOrder);

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
  }

  function handleClearSearch() {
    setSearchQuery("");
  }

  return (
    <main className="container">
      <div className="controls">
        <Search searchQuery={searchQuery} onSearch={handleSearch} />
      </div>

      {isPending ? (
        <Loader />
      ) : error ? (
        <ErrorMessage error={error.message} />
      ) : sortedCoins.length === 0 && searchQuery !== "" ? (
        <EmptyCoins
          searchQuery={searchQuery}
          onClearSearch={handleClearSearch}
        />
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

export default Home;
