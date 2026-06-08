import { Link } from "react-router";
import { formatPriceChange, formatCurrency } from "../../utils/formatters";
import { Coin } from "../../types";
import { CurrencyCode } from "../../constants";

interface CoinsListItemProps {
  coin: Coin;
  currency: CurrencyCode;
}

const CoinListItem = ({ coin, currency }: CoinsListItemProps) => {
  const change24h = coin.price_change_percentage_24h;
  const { changeClass, formattedValue } = formatPriceChange(change24h);

  return (
    <Link to={`/coin/${coin.id}`} className="coin-link">
      <div className="coin">
        <div className="coin-item">
          <span className="coin-rank">{coin.market_cap_rank}</span>
          <img src={coin.image} alt={coin.name} className="coin-img" />
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>

        <div className="coin-item">
          <p className="coin-price">
            {formatCurrency(coin.current_price, currency)}
          </p>
        </div>

        <div className="coin-item">
          <p className={`coin-change ${changeClass}`}>{formattedValue}%</p>
        </div>

        <div className="coin-item">
          <p className="coin-market-cap">
            {formatCurrency(coin.market_cap, currency, true)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CoinListItem;
