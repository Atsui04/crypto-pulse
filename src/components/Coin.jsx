const Coin = ({ coin }) => {
  return (
    <div className="coin">
      <img src={coin.image} alt={coin.name} className="coin-img" />
      <p className="coin-rank">{coin.market_cap_rank}</p>
      <p>
        Current price: <span className="coin-price">{coin.current_price}$</span>
      </p>
    </div>
  );
};

export default Coin;
