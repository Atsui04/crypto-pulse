import { ReactNode } from "react";
import { SortBy, SortOrder } from "../../types";

interface CoinsListHeaderItemProps {
  children: ReactNode;
  sortKey: SortBy;
  sortBy: SortBy;
  onSort: (newSortBy: SortBy) => void;
  sortOrder: SortOrder;
}

const CoinsListHeaderItem = ({
  children,
  sortKey,
  sortBy,
  onSort,
  sortOrder,
}: CoinsListHeaderItemProps) => {
  const isActive = sortBy === sortKey;
  const direction = sortOrder === "desc" ? "↓" : "↑";

  return (
    <div
      className={`header-item ${isActive ? "active" : ""}`}
      onClick={() => onSort(sortKey)}
    >
      {children} {isActive ? direction : ""}
    </div>
  );
};

export default CoinsListHeaderItem;
