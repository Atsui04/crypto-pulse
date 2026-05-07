const ErrorMessage = ({ error }) => {
  return (
    <div className="center-container">
      <p className="error-message">{error} ❌</p>
    </div>
  );
};

export default ErrorMessage;
