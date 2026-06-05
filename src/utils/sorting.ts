interface Coin {
  name: string;
  symbol: string;
  market_cap_rank: number;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

export default function sorting(
  coins: Coin[],
  sortBy:
    | "market_cap_rank"
    | "current_price"
    | "price_change_percentage_24h"
    | "market_cap",
  sortOrder: "asc" | "desc",
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
