interface EmptyCoinsProps {
  searchQuery: string;
  onClearSearch: () => void;
}

const EmptyCoins = ({ searchQuery, onClearSearch }: EmptyCoinsProps) => {
  return (
    <div className="center-container empty-state">
      <p>No coins found matching "{searchQuery}"</p>
      <button onClick={onClearSearch} className="reset-search">
        Clear search
      </button>
    </div>
  );
};

export default EmptyCoins;
