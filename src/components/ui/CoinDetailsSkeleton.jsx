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
          <Skeleton height="22rem" width="100%" />
        </div>
      </div>
      <div className="coin-page__stats">
        <div className="coin-graph">
          <Skeleton className="skeleton-graph" width="100%" />
        </div>
        <div className="coin-stats">
          <Skeleton height="26rem" width="100%" />
        </div>
        <div className="coin-description">
          <Skeleton height="48rem" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default CoinDetailsSkeleton;
