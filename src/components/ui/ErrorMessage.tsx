interface ErrorProps {
  error: string;
}

const ErrorMessage = ({ error }: ErrorProps) => {
  return (
    <div className="center-container">
      <p className="error-message">{error} ❌</p>
    </div>
  );
};

export default ErrorMessage;
