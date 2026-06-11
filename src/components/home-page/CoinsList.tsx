import { CurrencyCode } from "../../constants";
import { SortBy, SortOrder, Coin } from "../../types";

import Pagination from "../ui/Pagination";
import CoinListItem from "./CoinListItem";
import CoinsListHeader from "./CoinsListHeader";

interface CoinsListProps {
  coins: Coin[];
  currency: CurrencyCode;
  page?: number;
  sortOrder: SortOrder;
  sortBy: SortBy;
  onSort: (newSortBy: SortBy) => void;
}

const CoinsList = ({
  coins,
  currency,
  page,
  sortBy,
  sortOrder,
  onSort,
}: CoinsListProps) => {
  return (
    <div className="coins-list">
      <CoinsListHeader sortBy={sortBy} sortOrder={sortOrder} onSort={onSort} />

      {coins.map((coin) => (
        <CoinListItem coin={coin} key={coin.id} currency={currency} />
      ))}

      {page && <Pagination page={page} />}
    </div>
  );
};

export default CoinsList;
