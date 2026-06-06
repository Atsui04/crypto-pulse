import { Link } from "react-router";

const FavoritesEmpty = () => {
  return (
    <main className="container favorites-empty center-container">
      <h2 className="favorites-empty__title">Your Watchlist is empty</h2>
      <p className="favorites-empty__text">
        Explore the market to add your favorite cryptocurrencies.
      </p>
      <Link to="/" className="btn-back favorites-empty__link">
        Go to Market
      </Link>
    </main>
  );
};

export default FavoritesEmpty;
