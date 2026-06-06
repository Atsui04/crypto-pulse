const CoinDescription = ({ description }) => {
  if (!description) return null;

  return (
    <div className="coin-page__block coin-description">
      <h3 className="coin-description__title">About</h3>
      <div className="coin-description__content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CoinDescription;
