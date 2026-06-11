import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <div className="list-header">
      <CoinsListHeaderItem
        sortOrder={sortOrder}
        sortBy={sortBy}
        sortKey="market_cap_rank"
        onSort={onSort}
      >
        {t("headers.coin")}
      </CoinsListHeaderItem>

      <CoinsListHeaderItem
        sortOrder={sortOrder}
        sortBy={sortBy}
        sortKey="current_price"
        onSort={onSort}
      >
        {t("headers.price")}
      </CoinsListHeaderItem>

      <CoinsListHeaderItem
        sortOrder={sortOrder}
        sortBy={sortBy}
        sortKey="price_change_percentage_24h"
        onSort={onSort}
      >
        {t("headers.change24h")}
      </CoinsListHeaderItem>

      <CoinsListHeaderItem
        sortOrder={sortOrder}
        sortBy={sortBy}
        sortKey="market_cap"
        onSort={onSort}
      >
        {t("headers.market_cap")}
      </CoinsListHeaderItem>
    </div>
  );
};

export default CoinsListHeader;
