export interface Coin {
  name: string;
  symbol: string;
  market_cap_rank: number;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

export type SortBy =
  | "market_cap_rank"
  | "current_price"
  | "price_change_percentage_24h"
  | "market_cap";

export type SortOrder = "asc" | "desc";
