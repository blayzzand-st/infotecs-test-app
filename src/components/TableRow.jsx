import TableCell from './TableCell.jsx';

const TableRow = ({ columns, user, onClick }) => {
  return (
    <tr className="group" onClick={() => onClick(user)}>
      {columns.map((col, idx) => (
        <TableCell
          key={col.key}
          content={col.content}
          isLast={idx === columns.length - 1}
        />
      ))}
    </tr>
  );
};

export default TableRow;
