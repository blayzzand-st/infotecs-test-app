import { useState, useReducer } from 'react';

import TableHeader from '../TableHeader.jsx';
import TableRow from '../TableRow.jsx';
import Pagination from '../Pagination.jsx';

import useUsers from '../../hooks/useUsers.js';

import { COLUMNS_DEF, CLICKABLE_COLS } from './constants.js';
import { reducer, initialState, SORT_STATES } from '../../utils/sortUtils.js';
import {
  initialState as filterInitialState,
  filterReducer,
} from '../../utils/filterUtils.js';

const SHADOW_COLOR = 'rgba(154,255,228,0.25)';
const PAGE_LIMIT = 15;

const Table = () => {
  const [page, setPage] = useState(1);
  const [sortState, dispatch] = useReducer(reducer, initialState);
  const [filterState, dispatchFilter] = useReducer(
    filterReducer,
    filterInitialState
  );

  const sortBy =
    sortState.direction === SORT_STATES.DEFAULT ? null : sortState.activeKey;
  const order =
    sortState.direction === SORT_STATES.DEFAULT ? 'asc' : sortState.direction;
  const filterKey = filterState.activeKey;
  const filterValue = filterState.value;

  const { users, error, isLoading, total } = useUsers({
    page,
    limit: PAGE_LIMIT,
    sortBy,
    order,
    filterKey,
    filterValue,
  });

  const rows = users.map((u) => ({
    user: u,
    columns: COLUMNS_DEF.map((col) => ({
      key: col.key,
      name: col.name,
      content: col.getValue(u),
    })),
  }));

  const MAX_PAGES = Math.ceil(total / PAGE_LIMIT);

  const handleSort = (colKey) => {
    dispatch(colKey);
  };

  const handleFilter = (colKey) => {
    dispatchFilter(colKey);
  };

  const handlePrevPage = () => {
    setPage((prev) => {
      if (prev > 1) {
        return prev - 1;
      }

      return prev;
    });
  };

  const handleNextPage = () => {
    setPage((prev) => {
      if (prev < MAX_PAGES) {
        return prev + 1;
      }

      return prev;
    });
  };

  return (
    <div className="flex flex-col items-end">
      <table
        className={`w-full max-w-[1400px] table-fixed border-separate border-spacing-0 rounded-lg rounded-br-none border-4 border-green-800`}
        style={{ boxShadow: `0 0 13px ${SHADOW_COLOR}` }}
      >
        <TableHeader
          columns={COLUMNS_DEF}
          clickableColumns={CLICKABLE_COLS}
          sortState={sortState}
          onSort={handleSort}
          filterState={filterState}
          onFilter={handleFilter}
        />
        <tbody>
          {rows.map((row) => (
            <TableRow
              key={row.user.id}
              columns={row.columns}
              user={row.user}
              isLoading={isLoading}
              onClick={() => console.log('user profile opens')}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        page={page}
        maxPages={MAX_PAGES}
      />
    </div>
  );
};

export default Table;
