import backIcon from '../assets/icons/back.svg';
import forwardIcon from '../assets/icons/forward.svg';

const Pagination = ({ handlePrevPage, handleNextPage, page, maxPages }) => {
  return (
    <div className="flex items-center justify-center">
      <button
        disabled={page <= 1}
        className={`rounded-bl-sm border-4 border-t-0 border-r-2 border-green-800 px-2 py-1 hover:opacity-80 active:opacity-70 disabled:opacity-50`}
        aria-label="Получить предыдущую страницу"
        onClick={handlePrevPage}
      >
        <img className="w-9" src={backIcon} alt="" />
      </button>
      <button
        disabled={page >= maxPages}
        className={
          'rounded-br-sm border-4 border-t-0 border-l-2 border-green-800 px-2 py-1 hover:opacity-80 active:opacity-70 disabled:opacity-50'
        }
        aria-label="Получить следующую страницу"
        onClick={handleNextPage}
      >
        <img className="w-9" src={forwardIcon} alt="" />
      </button>
    </div>
  );
};

export default Pagination;
