import Skeleton from "./Skeleton";

const CoinDetailsSkeleton = () => {
  return (
    <div className="coin-page">
      <div className="coin-page__info">
        <div className="coin-hero">
          <Skeleton className="coin-hero__main" height="11rem" width="100%" />
        </div>
        <div className="coin-value">
          <Skeleton height="11rem" width="100%" />
        </div>
        <div className="coin-links">
          {[...Array(3)].map((_, index) => (
            <Skeleton
              key={index}
              className="coin-links__item-skeleton"
              height="4rem"
              width="100%"
            />
          ))}
        </div>
      </div>
      <div className="coin-page__stats">
        <div className="coin-graph">
          <Skeleton className="coin-graph__skeleton" width="100%" />
        </div>
        <div className="coin-stats">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="coin-stats__item"
              style={{ border: "none" }}
            >
              <Skeleton height="2rem" width="30%" />
              <Skeleton height="2rem" width="40%" />
            </div>
          ))}
        </div>
        <div className="coin-description">
          <Skeleton className="coin-description__skeleton" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default CoinDetailsSkeleton;
