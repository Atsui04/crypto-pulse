import { SortBy, SortOrder } from "../../types";
import CoinsListHeaderItem from "./CoinsListHeaderItem";

interface CoinsListHeaderProps {
  sortBy: SortBy;
  onSort: (newSortBy: SortBy) => void;
  sortOrder: SortOrder;
}

const CoinsListHeader = ({
  sortBy,
  onSort,
  sortOrder,
}: CoinsListHeaderProps) => {
  return (
    <div className="list-header">
      <CoinsListHeaderItem
        sortOrder={sortOrder}
        sortBy={sortBy}
        sortKey="market_cap_rank"
        onSort={onSort}
      >
        Coin
      </CoinsListHeaderItem>

      <CoinsListHeaderItem
        sortOrder={sortOrder}
        sortBy={sortBy}
        sortKey="current_price"
        onSort={onSort}
      >
        Price
      </CoinsListHeaderItem>

      <CoinsListHeaderItem
        sortOrder={sortOrder}
        sortBy={sortBy}
        sortKey="price_change_percentage_24h"
        onSort={onSort}
      >
        Change 24H
      </CoinsListHeaderItem>

      <CoinsListHeaderItem
        sortOrder={sortOrder}
        sortBy={sortBy}
        sortKey="market_cap"
        onSort={onSort}
      >
        Market Cap
      </CoinsListHeaderItem>
    </div>
  );
};

export default CoinsListHeader;
