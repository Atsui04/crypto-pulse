interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

const Skeleton = ({ className = "", width, height }: SkeletonProps) => {
  const styles = { width: width, height: height };
  return (
    <div className={`coin-page__skeleton ${className}`} style={styles}></div>
  );
};

export default Skeleton;
