import TableHeaderCell from './TableHeaderCell/TableHeaderCell.jsx';

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
              onFilter(col.key);
            }}
          />
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
