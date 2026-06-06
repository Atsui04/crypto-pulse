import CoinDescription from "./CoinDescription";
import CoinGraph from "./CoinGraph";
import CoinStats from "./CoinStats";

const MarketStats = ({
  symbol,
  description,
  marketCap,
  curSupply,
  maxSupply,
  volume,
}) => {
  return (
    <div className="coin-page__stats">
      <CoinGraph />
      <CoinStats
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
