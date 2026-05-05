import Hero from "./Hero";

const Info = ({ name, symbol, image, rank }) => {
  return (
    <div className="coin-page__info">
      <Hero name={name} symbol={symbol} image={image} rank={rank} />
    </div>
  );
};

export default Info;
