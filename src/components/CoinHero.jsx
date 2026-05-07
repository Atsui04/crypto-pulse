const CoinHero = ({ name, symbol, image, rank }) => {
  return (
    <div className="coin-page__block coin-hero">
      <div className="coin-hero__main">
        <img src={image.large} alt={name} className="coin-hero__img" />
        <p className="coin-hero__name">
          {name} <span className="coin-hero__symbol">({symbol})</span>
        </p>
      </div>
      <p className="coin-hero__rank">№{rank}</p>
    </div>
  );
};

export default CoinHero;
