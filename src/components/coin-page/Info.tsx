import { CurrencyCode } from "../../constants";
import { DetailedCoin } from "../../types";

import CoinHero from "./CoinHero";
import CoinLinks from "./CoinLinks";
import PriceBlock from "./PriceBlock";

interface InfoProps {
  currency: CurrencyCode;
  name: DetailedCoin["name"];
  symbol: DetailedCoin["symbol"];
  image: DetailedCoin["image"];
  rank: DetailedCoin["market_cap_rank"];
  links: DetailedCoin["links"];

  price: number;
  change24h: number;
}

const Info = ({
  currency,
  name,
  symbol,
  image,
  price,
  rank,
  change24h,
  links,
}: InfoProps) => {
  return (
    <div className="coin-page__info">
      <CoinHero name={name} symbol={symbol} image={image} rank={rank} />
      <PriceBlock price={price} change24h={change24h} currency={currency} />
      <CoinLinks links={links} />
    </div>
  );
};

export default Info;
