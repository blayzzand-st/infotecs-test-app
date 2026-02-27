const TableCell = ({ content, isLast }) => {
  return (
    <td
      className={`${isLast ? '' : 'border-r-3'} py-2' truncate border-b-3 border-green-800 px-4 text-center group-last:border-b-0`}
    >
      {content}
    </td>
  );
};

export default TableCell;
