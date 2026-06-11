import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const FavoritesEmpty = () => {
  const { t } = useTranslation();

  return (
    <main className="container favorites-empty center-container">
      <h2 className="favorites-empty__title">{t("favorites.empty.header")}</h2>
      <p className="favorites-empty__text">{t("favorites.empty.text")}</p>
      <Link to="/" className="btn-back favorites-empty__link">
        {t("favorites.empty.back")}
      </Link>
    </main>
  );
};

export default FavoritesEmpty;
