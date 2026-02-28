import TableCell from './TableCell/TableCell.jsx';

const TableRow = ({ columns, user, isLoading, onClick }) => {
  return (
    <tr
      className={`group even:bg-emerald-950 hover:bg-teal-900`}
      onClick={() => onClick(user)}
    >
      {columns.map((col, idx) => (
        <TableCell
          key={col.key}
          content={col.content}
          isLast={idx === columns.length - 1}
          isLoading={isLoading}
        />
      ))}
    </tr>
  );
};

export default TableRow;
