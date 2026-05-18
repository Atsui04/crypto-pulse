import Nav from "../components/header/Nav";
import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <Link to="/" className="logo">
          Crypto Pulse
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
