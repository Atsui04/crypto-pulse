const Skeleton = ({ className = "", width, height }) => {
  const styles = { width: width, height: height };
  return (
    <div className={`coin-page__skeleton ${className}`} style={styles}></div>
  );
};

export default Skeleton;
