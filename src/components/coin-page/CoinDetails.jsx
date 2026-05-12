import Info from "./Info";
import MarketStats from "./MarketStats";

const CoinDetails = ({ coin }) => {
  if (!coin) return null;

  const {
    name,
    symbol,
    image,
    description: { en: description },
    market_cap_rank: rank,
    market_data: {
      current_price: { usd: price },
      price_change_percentage_24h: change24h,
      market_cap: { usd: marketCap },
      circulating_supply: curSupply,
      max_supply: maxSupply,
      total_volume: { usd: volume },
    },
    links,
  } = coin;

  return (
    <div className="coin-page">
      <Info
        name={name}
        symbol={symbol}
        image={image}
        price={price}
        rank={rank}
        change24h={change24h}
        links={links}
      />
      <MarketStats
        symbol={symbol}
        description={description}
        marketCap={marketCap}
        curSupply={curSupply}
        maxSupply={maxSupply}
        volume={volume}
      />
    </div>
  );
};

export default CoinDetails;
