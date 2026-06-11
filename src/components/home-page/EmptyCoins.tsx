import { useTranslation } from "react-i18next";

interface EmptyCoinsProps {
  searchQuery: string;
  onClearSearch: () => void;
}

const EmptyCoins = ({ searchQuery, onClearSearch }: EmptyCoinsProps) => {
  const { t } = useTranslation();

  return (
    <div className="center-container empty-state">
      <p>
        {t("empty.coins")} "{searchQuery}"
      </p>
      <button onClick={onClearSearch} className="reset-search">
        {t("empty.button")}
      </button>
    </div>
  );
};

export default EmptyCoins;
