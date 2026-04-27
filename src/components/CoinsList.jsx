import Coin from "./Coin";

const CoinsList = ({ coins }) => {
  return (
    <div className="coins-list">
      <div className="list-header">
        <div className="header-item">Coin</div>
        <div className="header-item">Price</div>
        <div className="header-item">Change 24H</div>
        <div className="header-item">Market Cap</div>
      </div>

      {coins.map((coin) => (
        <Coin coin={coin} key={coin.id} />
      ))}
    </div>
  );
};

export default CoinsList;
