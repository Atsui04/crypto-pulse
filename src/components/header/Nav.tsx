import { NavLink } from "react-router";
import { useFavoritesStore } from "../../stores/useFavoritesStore";

import CurrencySelect from "./CurrencySelect";

const Nav = () => {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <NavLink className="nav__link" to="/">
            Market
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="/favorites">
            Favorites
            {favorites.length > 0 && (
              <span className="nav__badge">{favorites.length}</span>
            )}
          </NavLink>
        </li>
        <li>
          <CurrencySelect />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
