import { CurrencyCode } from "../../constants";
import { DetailedCoin } from "../../types";
import { formatCompactNumber, formatCurrency } from "../../utils/formatters";

interface CoinStatsProps {
  currency: CurrencyCode;
  symbol: DetailedCoin["symbol"];

  marketCap: DetailedCoin["market_data"]["market_cap"]["usd"];
  curSupply: DetailedCoin["market_data"]["circulating_supply"];
  maxSupply: DetailedCoin["market_data"]["max_supply"];
  volume: DetailedCoin["market_data"]["total_volume"]["usd"];
}

const CoinStats = ({
  currency,
  symbol,
  marketCap,
  curSupply,
  maxSupply,
  volume,
}: CoinStatsProps) => {
  return (
    <div className="coin-page__block coin-stats">
      <h3 className="coin-stats__title">Stats</h3>
      <div className="coin-stats__list">
        <div className="coin-stats__item">
          <p className="coin-stats__label">Market Cap</p>
          <p className="coin-stats__value">
            {formatCurrency(marketCap, currency, true)}
          </p>
        </div>
        <div className="coin-stats__item">
          <p className="coin-stats__label">Current Supply</p>
          <p className="coin-stats__value">
            {formatCompactNumber(curSupply, currency)} {symbol.toUpperCase()}
          </p>
        </div>
        <div className="coin-stats__item">
          <p className="coin-stats__label">Max Supply</p>
          {maxSupply ? (
            <p className="coin-stats__value">
              {formatCompactNumber(maxSupply, currency)} {symbol.toUpperCase()}
            </p>
          ) : (
            <p className="coin-stats__value">Unlimited</p>
          )}
        </div>
        <div className="coin-stats__item">
          <p className="coin-stats__label">Total Volume</p>
          <p className="coin-stats__value">
            {formatCurrency(volume, currency, true)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoinStats;
