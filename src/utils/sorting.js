export default function sorting(coins, sortBy, sortOrder) {
  if (!sortBy) return coins;

  const direction = sortOrder === "asc" ? 1 : -1;

  return [...coins].sort((a, b) => {
    if (typeof a[sortBy] !== "number") {
      return a[sortBy].localeCompare(b[sortBy]) * direction;
    } else {
      return (a[sortBy] - b[sortBy]) * direction;
    }
  });
}
