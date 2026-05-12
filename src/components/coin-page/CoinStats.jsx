import { formatCompactNumber, formatCurrency } from "./../../utils/formatters";

const CoinStats = ({ symbol, marketCap, curSupply, maxSupply, volume }) => {
  return (
    <div className="coin-page__block coin-stats">
      <h3 className="coin-stats__title">Coin Stats</h3>
      <div className="coin-stats__list">
        <div className="coin-stats__item">
          <p className="coin-stats__label">Market Cap</p>
          <p className="coin-stats__value">{formatCurrency(marketCap, true)}</p>
        </div>
        <div className="coin-stats__item">
          <p className="coin-stats__label">Current Supply</p>
          <p className="coin-stats__value">
            {formatCompactNumber(curSupply)} {symbol.toUpperCase()}
          </p>
        </div>
        <div className="coin-stats__item">
          <p className="coin-stats__label">Max Supply</p>
          {maxSupply ? (
            <p className="coin-stats__value">
              {formatCompactNumber(maxSupply)} {symbol.toUpperCase()}
            </p>
          ) : (
            <p className="coin-stats__value">Unlimited</p>
          )}
        </div>
        <div className="coin-stats__item">
          <p className="coin-stats__label">Total Volume</p>
          <p className="coin-stats__value">{formatCurrency(volume, true)}</p>
        </div>
      </div>
    </div>
  );
};

export default CoinStats;
