import Coin from "./Coin";

const CoinsList = ({ coins, sortOrder, sortBy, onSort }) => {
  const direction = sortOrder === "desc" ? "↓" : "↑";

  return (
    <div className="coins-list">
      <div className="list-header">
        <div
          className={`header-item ${sortBy === "market_cap_rank" ? "active" : ""}`}
          onClick={() => onSort("market_cap_rank")}
        >
          Coin {sortBy === "market_cap_rank" ? direction : ""}
        </div>
        <div
          className={`header-item ${sortBy === "current_price" ? "active" : ""}`}
          onClick={() => onSort("current_price")}
        >
          Price {sortBy === "current_price" ? direction : ""}
        </div>
        <div
          className={`header-item ${sortBy === "price_change_percentage_24h" ? "active" : ""}`}
          onClick={() => onSort("price_change_percentage_24h")}
        >
          Change 24H {sortBy === "price_change_percentage_24h" ? direction : ""}
        </div>
        <div
          className={`header-item ${sortBy === "market_cap" ? "active" : ""}`}
          onClick={() => onSort("market_cap")}
        >
          Market Cap {sortBy === "market_cap" ? direction : ""}
        </div>
      </div>

      {coins.map((coin) => (
        <Coin coin={coin} key={coin.id} />
      ))}
    </div>
  );
};

export default CoinsList;
