import TableHeaderCell from './TableHeaderCell/TableHeaderCell.jsx';
import { FILTER_ACTIONS } from '../utils/filterUtils.js';

const TableHeader = ({
  columns,
  clickableColumns,
  sortState,
  onSort,
  filterState,
  onFilter,
}) => {
  return (
    <thead>
      <tr>
        {columns.map((col, idx) => (
          <TableHeaderCell
            key={col.key}
            col={col}
            isLast={idx === columns.length - 1}
            isActive={sortState.activeKey === col.key}
            direction={sortState.direction}
            isClickable={clickableColumns.includes(col.key)}
            isFilterActive={filterState.activeKey === col.key}
            filterValue={filterState.value}
            handleSort={() => {
              onSort(col.key);
            }}
            handleFilter={() => {
              onFilter({ type: FILTER_ACTIONS.TOGGLE, colKey: col.key });
            }}
            onFilterClose={() => {
              onFilter({ type: FILTER_ACTIONS.CLOSE });
            }}
            onFilterSubmit={(value) => {
              if (value.trim()) {
                onFilter({
                  type: FILTER_ACTIONS.SUBMIT,
                  colKey: col.key,
                  value,
                });
              }
            }}
          />
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
