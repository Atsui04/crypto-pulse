import { CurrencyCode } from "../../constants";
import { DetailedCoin } from "../../types";
import CoinDescription from "./CoinDescription";
import CoinGraph from "./CoinGraph";
import CoinStats from "./CoinStats";

interface MarketStatsProps {
  currency: CurrencyCode;
  symbol: DetailedCoin["symbol"];
  description: string;

  marketCap: DetailedCoin["market_data"]["market_cap"]["usd"];
  volume: DetailedCoin["market_data"]["total_volume"]["usd"];
  curSupply: DetailedCoin["market_data"]["circulating_supply"];
  maxSupply: DetailedCoin["market_data"]["max_supply"];
}

const MarketStats = ({
  currency,
  symbol,
  description,
  marketCap,
  curSupply,
  maxSupply,
  volume,
}: MarketStatsProps) => {
  return (
    <div className="coin-page__stats">
      <CoinGraph currency={currency} />
      <CoinStats
        currency={currency}
        symbol={symbol}
        marketCap={marketCap}
        curSupply={curSupply}
        maxSupply={maxSupply}
        volume={volume}
      />
      <CoinDescription description={description} />
    </div>
  );
};

export default MarketStats;
