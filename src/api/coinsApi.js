const BASE_URL = "https://api.coingecko.com/api/v3";

export async function getCoins() {
  const res = await fetch(
    `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": import.meta.env.VITE_COINGECKO_API_KEY,
      },
    },
  );

  if (!res.ok) throw new Error("Failed to fetch market data");

  return res.json();
}

export async function getCoin(id) {
  const res = await fetch(`${BASE_URL}/coins/${id}`);

  if (!res.ok) throw new Error("Failed to fetch market data");

  return res.json();
}

export async function getCoinGraph(id, days = 7) {
  const res = await fetch(
    `${BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=${days}`,
  );

  if (!res.ok) throw new Error("Failed to fetch market data");

  return res.json();
}
