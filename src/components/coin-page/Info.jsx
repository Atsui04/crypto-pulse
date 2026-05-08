import CoinHero from "./CoinHero";
import CoinLinks from "./CoinLinks";
import PriceBlock from "./PriceBlock";

const Info = ({ name, symbol, image, price, rank, change24h, links }) => {
  return (
    <div className="coin-page__info">
      <CoinHero name={name} symbol={symbol} image={image} rank={rank} />
      <PriceBlock price={price} change24h={change24h} />
      <CoinLinks links={links} />
    </div>
  );
};

export default Info;
