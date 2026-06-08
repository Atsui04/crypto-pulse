import axios from "axios";
import { Coin, CoinGraphResponse } from "../types";
import { BASE_URL, CurrencyCode } from "../constants";

export async function getCoins(
  currency: CurrencyCode,
  ids = "",
): Promise<Coin[]> {
  const res = await axios.get<Coin[]>(`${BASE_URL}/coins/markets`, {
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": import.meta.env.VITE_COINGECKO_API_KEY,
    },
    params: {
      vs_currency: currency,
      order: "market_cap_desc",
      per_page: 100,
      page: 1,
      ...(ids && { ids }),
    },
  });

  return res.data;
}

export async function getCoin(id: string) {
  const res = await axios.get<any>(`${BASE_URL}/coins/${id}`, {
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": import.meta.env.VITE_COINGECKO_API_KEY,
    },
  });

  return res.data;
}

export async function getCoinGraph(
  id: string,
  days: number,
  currency: CurrencyCode,
): Promise<CoinGraphResponse> {
  const res = await axios.get<any>(`${BASE_URL}/coins/${id}/market_chart`, {
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": import.meta.env.VITE_COINGECKO_API_KEY,
    },
    params: {
      vs_currency: currency,
      days,
    },
  });

  return res.data;
}
