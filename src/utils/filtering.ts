import { Coin } from "../types";

export default function filtering(coins: Coin[], searchQuery: string): Coin[] {
  const query = searchQuery.trim().toLowerCase();
  if (!query) return coins;

  return coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(query) ||
      coin.symbol.toLowerCase().includes(query),
  );
}
