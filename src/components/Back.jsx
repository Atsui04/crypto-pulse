import { useNavigate } from "react-router";

const Back = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="btn-back">
      ← Back to list
    </button>
  );
};

export default Back;
