import { useTranslation } from "react-i18next";

interface CoinDescriptionProps {
  description: string;
}

const CoinDescription = ({ description }: CoinDescriptionProps) => {
  if (!description) return null;

  const { t } = useTranslation();

  return (
    <div className="coin-page__block coin-description">
      <h3 className="coin-description__title">{t("coin.about.text")}</h3>
      <div className="coin-description__content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CoinDescription;
