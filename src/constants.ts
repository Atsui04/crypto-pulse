export const BASE_URL = "https://api.coingecko.com/api/v3";

export const SUPPORTED_CURRENCIES = [
  { code: "usd", label: "USD" },
  { code: "eur", label: "EUR" },
  { code: "gbp", label: "GBP" },
  { code: "uah", label: "UAH" },
  { code: "pln", label: "PLN" },
  { code: "jpy", label: "JPY" },
  { code: "cad", label: "CAD" },
  { code: "aud", label: "AUD" },
] as const;

export type CurrencyCode = (typeof SUPPORTED_CURRENCIES)[number]["code"];
