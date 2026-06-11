import { useTranslation } from "react-i18next";
import { useCoinsStore } from "../../stores/useCoinsStore";

interface PaginationProps {
  page: number;
}

const Pagination = ({ page }: PaginationProps) => {
  const setPage = useCoinsStore((state) => state.setPage);
  const { t } = useTranslation();

  return (
    <nav className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          <button
            className="pagination__btn pagination__btn--arrow"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            {t("pagination.previous")}
          </button>
        </li>

        {Array.from({ length: 5 }, (_, index) => {
          const pageNumber = index + 1;
          const isActive = pageNumber === page;

          return (
            <li key={pageNumber} className="pagination__item">
              <button
                className={`pagination__btn ${isActive ? "pagination__btn--active" : ""}`}
                onClick={() => setPage(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}

        <li className="pagination__item">
          <button
            className="pagination__btn pagination__btn--arrow"
            disabled={page === 5}
            onClick={() => setPage(page + 1)}
          >
            {t("pagination.next")}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
