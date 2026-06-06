import { DetailedCoin } from "../../types";

interface CoinLinksProps {
  links: DetailedCoin["links"];
}

const CoinLinks = ({ links }: CoinLinksProps) => {
  const website = links?.homepage?.[0];
  const explorer = links?.blockchain_site?.[0];
  const reddit = links?.subreddit_url;

  const getHostname = (url: string) => {
    try {
      return url ? new URL(url).hostname : "";
    } catch (e) {
      return url;
    }
  };

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
              {getHostname(website)}
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
              {getHostname(explorer)}
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
              {getHostname(reddit)}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoinLinks;
