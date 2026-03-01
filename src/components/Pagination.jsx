import backIcon from '../assets/icons/back.svg';
import forwardIcon from '../assets/icons/forward.svg';

const Pagination = ({ handlePrevPage, handleNextPage, page, maxPages }) => {
  // с page и maxPages потом можно будет задать disabled на соответствующие кнопки, чтобы пользователь
  // знал, что дальше листать некуда

  return (
    <div className="flex items-center justify-center">
      <button
        className={`rounded-bl-sm border-4 border-t-0 border-r-3 border-green-800 px-2 py-1 hover:opacity-90 active:opacity-80`}
        aria-label="Получить предыдущую страницу"
        onClick={handlePrevPage}
      >
        <img className="w-9" src={backIcon} alt="" />
      </button>
      <button
        className={
          'rounded-br-sm border-4 border-t-0 border-l-0 border-green-800 px-2 py-1 hover:opacity-90 active:opacity-80'
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
