import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  return (
    <div className="language-toggle">
      <button
        className={`language-toggle__btn ${i18n.language === "en" ? "language-toggle__btn--active" : ""}`}
        type="button"
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </button>

      <span className="language-toggle__divider">|</span>

      <button
        className={`language-toggle__btn ${i18n.language === "uk" ? "language-toggle__btn--active" : ""}`}
        type="button"
        onClick={() => i18n.changeLanguage("uk")}
      >
        UK
      </button>
    </div>
  );
};

export default LanguageToggle;
