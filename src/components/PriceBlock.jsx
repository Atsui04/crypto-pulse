import formatPriceChange from "../utils/formatters";

const PriceBlock = ({ price, change24h }) => {
  const { changeClass, formattedValue } = formatPriceChange(change24h);

  return (
    <div className="coin-page__block coin-value">
      <div className="coin-value__item">
        <p className="coin-value__label">Current Price</p>
        <p className="coin-value__price">${price.toLocaleString()}</p>
      </div>
      <p className={`coin-value__change ${changeClass}`}>{formattedValue}%</p>
    </div>
  );
};

export default PriceBlock;
