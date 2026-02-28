import './tableCell.css';

const TableCell = ({ content, isLoading, isLast }) => {
  return (
    <td
      className={`${isLast ? '' : 'border-r-3'} ${isLoading ? 'shimmer' : ''} truncate border-b-3 border-green-800 px-4 py-2 text-center group-last:border-b-0`}
    >
      {content}
    </td>
  );
};

export default TableCell;
