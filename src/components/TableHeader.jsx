const TableHeader = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((col, idx) => (
          <th
            className={`${idx === columns.length - 1 ? '' : 'border-r-4'} truncate border-b-4 border-green-800 px-3 py-2`}
            key={col.key}
            onClick={() => null}
          >
            {col.name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
