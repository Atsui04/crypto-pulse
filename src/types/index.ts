export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
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

export interface DetailedCoin {
  name: string;
  symbol: string;
  image: {
    large: string;
    small: string;
  };
  market_cap_rank: number;
  description: {
    en: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    price_change_percentage_24h: number;
    total_volume: {
      usd: number;
    };
    circulating_supply: number;
    max_supply: number | null;
  };
  links: {
    homepage: string[];
    blockchain_site: string[];
    subreddit_url: string | null;
  };
}

export interface CoinGraphResponse {
  prices: [number, number][];
  market_caps?: [number, number][];
  total_volumes?: [number, number][];
}
