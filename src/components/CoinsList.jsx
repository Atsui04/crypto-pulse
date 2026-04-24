import Coin from "./Coin";

const CoinsList = ({ coins }) => {
  return (
    <div className="coins-list">
      {coins.map((coin) => (
        <Coin coin={coin} key={coin.id} />
      ))}
    </div>
  );
};

export default CoinsList;
