import { SortBy, SortOrder, Coin } from "../../types";
import CoinListItem from "./CoinListItem";
import CoinsListHeader from "./CoinsListHeader";

interface CoinsListProps {
  coins: Coin[];
  sortOrder: SortOrder;
  sortBy: SortBy;
  onSort: (newSortBy: SortBy) => void;
}

const CoinsList = ({ coins, sortBy, sortOrder, onSort }: CoinsListProps) => {
  return (
    <div className="coins-list">
      <CoinsListHeader sortBy={sortBy} sortOrder={sortOrder} onSort={onSort} />

      {coins.map((coin) => (
        <CoinListItem coin={coin} key={coin.id} />
      ))}
    </div>
  );
};

export default CoinsList;
