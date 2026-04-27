const Coin = ({ coin }) => {
  const change24h = coin.price_change_percentage_24h;
  const isPositive = change24h > 0;
  const changeClass = isPositive ? "coin-positive" : "coin-negative";

  return (
    <div className="coin">
      <div className="coin-item">
        <span className="coin-rank">{coin.market_cap_rank}</span>
        <img src={coin.image} alt={coin.name} className="coin-img" />
        <p className="coin-symbol">{coin.symbol}</p>
        <p className="coin-name">{coin.name}</p>
      </div>

      <div className="coin-item">
        <p className="coin-price">{coin.current_price.toLocaleString()}$</p>
      </div>

      <div className="coin-item">
        <p className={`coin-change ${changeClass}`}>
          {isPositive ? "+" : ""}
          {change24h?.toFixed(2)}%
        </p>
      </div>

      <div className="coin-item">
        <p className="coin-market-cap">
          ${(coin.market_cap / 1000000).toFixed(0)}M
        </p>
      </div>
    </div>
  );
};

export default Coin;
