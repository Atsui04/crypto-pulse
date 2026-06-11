import { NavLink } from "react-router";
import { useFavoritesStore } from "../../stores/useFavoritesStore";

import CurrencySelect from "./CurrencySelect";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const favorites = useFavoritesStore((state) => state.favorites);
  const { t } = useTranslation();

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <NavLink className="nav__link" to="/">
            {t("header.market")}
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="/favorites">
            {t("header.favorites")}
            {favorites.length > 0 && (
              <span className="nav__badge">{favorites.length}</span>
            )}
          </NavLink>
        </li>
      </ul>

      <div className="header__actions">
        <CurrencySelect />
        <LanguageToggle />
      </div>
    </nav>
  );
};

export default Nav;
