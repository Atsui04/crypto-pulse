import { CurrencyCode, SUPPORTED_CURRENCIES } from "../../constants";
import { useCoinsStore } from "../../stores/useCoinsStore";

const CurrencySelect = () => {
  const currency = useCoinsStore((state) => state.currency);
  const setCurrency = useCoinsStore((state) => state.setCurrency);

  return (
    <select
      className="currency-select"
      value={currency}
      onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
    >
      {SUPPORTED_CURRENCIES.map((curr) => (
        <option value={curr.code}>{curr.label}</option>
      ))}
    </select>
  );
};

export default CurrencySelect;
