import './tableHeaderCell.css';

import FilterPopup from '../FilterPopup.jsx';

import { SORT_STATES } from '../../utils/sortUtils.js';
import lineIcon from '../../assets/icons/line.svg';
import filterIcon from '../../assets/icons/filter.svg';

const TableHeaderCell = ({
  col,
  isLast,
  isActive,
  direction,
  isClickable,
  isFilterActive,
  handleSort,
  handleFilter,
  onFilterSubmit,
  onFilterClose,
  onResize,
  colWidths,
}) => {
  const sortState = isActive ? direction : SORT_STATES.DEFAULT;
  const thStyle = colWidths[col.key]
    ? { width: `${colWidths[col.key]}px` }
    : {};

  return (
    <th
      className={`${isLast ? '' : 'border-r-4'} relative border-b-4 border-green-800 ${isActive ? 'bg-green-900' : 'bg-green-950'} px-3 py-2 transition-colors duration-100`}
      style={thStyle}
    >
      {isFilterActive && (
        <FilterPopup onSubmit={onFilterSubmit} onClose={onFilterClose} />
      )}

      {!isLast && (
        <div
          className="absolute inset-y-0 left-full z-1 flex w-1 cursor-col-resize outline-1 outline-lime-600"
          onMouseDown={(e) => onResize(col.key, e)}
        ></div>
      )}

      <div className="flex items-center justify-around gap-x-3">
        <p className="truncate">{col.name}</p>
        {isClickable ? (
          <div className="flex items-center justify-center">
            <button
              className={`sortBtn ${sortState === SORT_STATES.DEFAULT ? '' : sortState === SORT_STATES.ASC ? 'sortBtn--asc' : 'sortBtn--desc'} flex flex-none flex-col items-center justify-center gap-y-1`}
              onClick={handleSort}
            >
              {[...Array(3)].map((_, i) => (
                <img
                  key={i}
                  className="sortBtnIcon w-4"
                  src={lineIcon}
                  alt={sortState.description}
                ></img>
              ))}
            </button>
            <button
              className={`filterBtn ${isFilterActive ? 'filterBtn--active' : ''} flex-none`}
              onClick={handleFilter}
            >
              <img
                src={filterIcon}
                alt={
                  isFilterActive
                    ? `Применена фильтрация по полю ${col.name}`
                    : `Применить фильтрацию по полю ${col.name}`
                }
              ></img>
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
    </th>
  );
};

export default TableHeaderCell;
