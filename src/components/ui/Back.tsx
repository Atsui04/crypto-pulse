import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const Back = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <button onClick={() => navigate(-1)} className="btn-back">
      ← {t("button.back")}
    </button>
  );
};

export default Back;
