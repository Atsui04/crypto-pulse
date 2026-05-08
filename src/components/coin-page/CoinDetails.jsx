import Info from "./Info";

const CoinDetails = ({ coin }) => {
  if (!coin) return null;

  const {
    name,
    symbol,
    image,
    description,
    market_cap_rank: rank,
    market_data: {
      current_price: { usd: price },
      price_change_percentage_24h: change24h,
      market_cap: { usd: marketCap },
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
    </div>
  );
};

export default CoinDetails;
