import { Link } from "react-router";

const NotFound = () => {
  return (
    <main className="container not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">Market Crash! Page Not Found</h2>
        <p className="not-found__text">
          It looks like this coin was removed from the exchange, or this page
          never was existed We recommend returning to a safe area.
        </p>
        <Link to="/" className="not-found__btn">
          Back to Market
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
