import { CurrencyCode } from "../../constants";
import { DetailedCoin } from "../../types";
import { formatCompactNumber, formatCurrency } from "../../utils/formatters";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <div className="coin-page__block coin-stats">
      <h3 className="coin-stats__title">{t("coin.stats.text")}</h3>
      <div className="coin-stats__list">
        <div className="coin-stats__item">
          <p className="coin-stats__label">{t("coin.stats.market_cap")}</p>
          <p className="coin-stats__value">
            {formatCurrency(marketCap, currency, true)}
          </p>
        </div>
        <div className="coin-stats__item">
          <p className="coin-stats__label">{t("coin.stats.current_supply")}</p>
          <p className="coin-stats__value">
            {formatCompactNumber(curSupply, currency)} {symbol.toUpperCase()}
          </p>
        </div>
        <div className="coin-stats__item">
          <p className="coin-stats__label">{t("coin.stats.max_supply")}</p>
          {maxSupply ? (
            <p className="coin-stats__value">
              {formatCompactNumber(maxSupply, currency)} {symbol.toUpperCase()}
            </p>
          ) : (
            <p className="coin-stats__value">{t("coin.stats.unlimited")}</p>
          )}
        </div>
        <div className="coin-stats__item">
          <p className="coin-stats__label">{t("coin.stats.total_volume")}</p>
          <p className="coin-stats__value">
            {formatCurrency(volume, currency, true)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoinStats;
