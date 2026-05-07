import CoinHero from "./CoinHero";
import PriceBlock from "./PriceBlock";

const Info = ({ name, symbol, image, price, rank, change24h }) => {
  return (
    <div className="coin-page__info">
      <CoinHero name={name} symbol={symbol} image={image} rank={rank} />
      <PriceBlock price={price} change24h={change24h} />
    </div>
  );
};

export default Info;
