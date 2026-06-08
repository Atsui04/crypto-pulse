import { useCoinsStore } from "../../stores/useCoinsStore";
import { DetailedCoin } from "../../types";

import CoinDetailsSkeleton from "../ui/CoinDetailsSkeleton";
import Info from "./Info";
import MarketStats from "./MarketStats";

interface CoinDetailsProps {
  coin: DetailedCoin | null;
  isPending: boolean;
}

const CoinDetails = ({ coin, isPending }: CoinDetailsProps) => {
  const currency = useCoinsStore((state) => state.currency);

  if (isPending) return <CoinDetailsSkeleton />;

  if (!coin) return null;

  const {
    name,
    symbol,
    image,
    description: { en: description },
    market_cap_rank: rank,
    market_data: {
      current_price: { [currency]: price },
      price_change_percentage_24h: change24h,
      market_cap: { [currency]: marketCap },
      circulating_supply: curSupply,
      max_supply: maxSupply,
      total_volume: { [currency]: volume },
    },
    links,
  } = coin;

  return (
    <div className="coin-page">
      <Info
        currency={currency}
        name={name}
        symbol={symbol}
        image={image}
        price={price}
        rank={rank}
        change24h={change24h}
        links={links}
      />
      <MarketStats
        currency={currency}
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
