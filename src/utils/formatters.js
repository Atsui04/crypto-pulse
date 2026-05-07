export default function formatPriceChange(change24h) {
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
