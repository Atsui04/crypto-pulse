import axios from "axios";
import { Coin } from "../types";

const BASE_URL = "https://api.coingecko.com/api/v3";

export async function getCoins(ids = ""): Promise<Coin[]> {
  const res = await axios.get<Coin[]>(`${BASE_URL}/coins/markets`, {
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": import.meta.env.VITE_COINGECKO_API_KEY,
    },
    params: {
      vs_currency: "usd",
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

export async function getCoinGraph(id: string, days = 7) {
  const res = await axios.get<any>(`${BASE_URL}/coins/${id}/market_chart`, {
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": import.meta.env.VITE_COINGECKO_API_KEY,
    },
    params: {
      vs_currency: "usd",
      days,
    },
  });

  return res.data;
}
