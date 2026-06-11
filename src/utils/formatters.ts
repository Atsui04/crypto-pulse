export function formatPriceChange(change24h: number) {
  if (!change24h)
    return { formattedValue: "0.00", changeClass: "", isPositive: false };

  const isPositive = change24h > 0;
  const changeClass = isPositive ? "coin-positive" : "coin-negative";
  const formattedValue = isPositive
    ? `+${change24h.toFixed(2)}`
    : change24h.toFixed(2);

  return {
    changeClass,
    formattedValue,
    isPositive,
  };
}

export function formatCompactNumber(number: number, currency: string) {
  if (number === null || number === undefined) return "N/A";

  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency,
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2,
  };

  return new Intl.NumberFormat("en-US", options).format(number);
}

export function formatCurrency(
  number: number,
  currency: string,
  isCompact = false,
) {
  if (number === null || number === undefined) return "$0";

  if (isCompact) {
    return formatCompactNumber(number, currency);
  }

  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency,
    minimumFractionDigits: number < 1 ? 4 : 2,
    maximumFractionDigits: number < 1 ? 6 : 2,
  };

  return new Intl.NumberFormat("en-US", options).format(number);
}

export function formatTimestamp(
  timestamp: Date | number,
  days: number,
  lang: string = "en",
) {
  const date = new Date(timestamp);

  if (days === 1) {
    return new Intl.DateTimeFormat(lang, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  }

  return new Intl.DateTimeFormat(lang, {
    day: "numeric",
    month: "short",
  }).format(date);
}
