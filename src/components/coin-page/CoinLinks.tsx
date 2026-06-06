const CoinLinks = ({ links }) => {
  const website = links?.homepage?.[0];
  const explorer = links?.blockchain_site?.[0];
  const reddit = links?.subreddit_url;

  return (
    <div className="coin-page__block coin-links">
      <h3 className="coin-links__title">Links</h3>
      <div className="coin-links__list">
        {website && (
          <div className="coin-links__item">
            <span className="coin-links__label">Website</span>
            <a
              href={website}
              target="_blank"
              rel="noreferrer"
              className="coin-links__link"
            >
              {new URL(website).hostname}
            </a>
          </div>
        )}
        {explorer && (
          <div className="coin-links__item">
            <span className="coin-links__label">Explorer</span>
            <a
              href={explorer}
              target="_blank"
              rel="noreferrer"
              className="coin-links__link"
            >
              {new URL(explorer).hostname}
            </a>
          </div>
        )}
        {reddit && (
          <div className="coin-links__item">
            <span className="coin-links__label">Reddit</span>
            <a
              href={reddit}
              target="_blank"
              rel="noreferrer"
              className="coin-links__link"
            >
              {new URL(reddit).hostname}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoinLinks;
