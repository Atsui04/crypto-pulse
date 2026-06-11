import { useTranslation } from "react-i18next";
import { CurrencyCode } from "../../constants";
import { formatCurrency, formatPriceChange } from "../../utils/formatters";

interface PriceBlockProps {
  price: number;
  change24h: number;
  currency: CurrencyCode;
}

const PriceBlock = ({ price, change24h, currency }: PriceBlockProps) => {
  const { changeClass, formattedValue } = formatPriceChange(change24h);
  const { t } = useTranslation();

  return (
    <div className="coin-page__block coin-value">
      <div className="coin-value__item">
        <p className="coin-value__label">{t("coin.current_price")}</p>
        <p className="coin-value__price">
          {formatCurrency(price, currency, true)}
        </p>
      </div>
      <p className={`coin-value__change ${changeClass}`}>{formattedValue}%</p>
    </div>
  );
};

export default PriceBlock;
