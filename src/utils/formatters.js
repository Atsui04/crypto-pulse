export function formatPriceChange(change24h) {
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

export function formatCompactNumber(number) {
  if (number === null || number === undefined) return "N/A";

  const options = {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2,
  };

  return new Intl.NumberFormat("en-US", options).format(number);
}

export function formatCurrency(number, isCompact = false) {
  if (number === null || number === undefined) return "$0";

  if (isCompact) {
    return "$" + formatCompactNumber(number);
  }

  const options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: number < 1 ? 4 : 2,
    maximumFractionDigits: number < 1 ? 6 : 2,
  };

  return new Intl.NumberFormat("en-US", options).format(number);
}

export function formatTimestamp(timestamp, days) {
  const options =
    days > 1
      ? { day: "numeric", month: "short" }
      : { hour: "2-digit", minute: "2-digit" };

  return new Intl.DateTimeFormat("en-US", options).format(timestamp);
}
