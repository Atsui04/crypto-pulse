import { Coin, SortBy, SortOrder } from "../types";

export default function sorting(
  coins: Coin[],
  sortBy: SortBy,
  sortOrder: SortOrder,
): Coin[] {
  if (!sortBy) return coins;

  const direction = sortOrder === "asc" ? 1 : -1;

  return [...coins].sort((a, b) => {
    const valA = a[sortBy] ?? 0;
    const valB = b[sortBy] ?? 0;

    if (typeof valA !== "number") {
      return String(valA).localeCompare(String(valB)) * direction;
    } else {
      return (valA - valB) * direction;
    }
  });
}
