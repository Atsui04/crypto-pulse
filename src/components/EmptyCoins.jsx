const EmptyCoins = ({ searchQuery, onClearSearch }) => {
  return (
    <div className="empty-state">
      <p>No coins found matching "{searchQuery}"</p>
      <button onClick={onClearSearch} className="reset-search">
        Clear search
      </button>
    </div>
  );
};

export default EmptyCoins;
