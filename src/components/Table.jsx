import TableHeader from './TableHeader.jsx';
import TableRow from './TableRow.jsx';

const SHADOW_COLOR = 'rgba(167,253,159,0.44)';

const Table = ({ columns, user }) => {
  return (
    <table
      className={`w-full max-w-[1400px] border-separate border-spacing-0 rounded-lg border-4 border-green-800 shadow-[0_0_15px_rgba(167,253,159,0.25)]`}
    >
      <TableHeader columns={columns} />
      <TableRow
        columns={columns}
        user={user}
        onClick={() => console.log('user profile opens')}
      />
      <TableRow
        columns={columns}
        user={user}
        onClick={() => console.log('user profile opens')}
      />
      <TableRow
        columns={columns}
        user={user}
        onClick={() => console.log('user profile opens')}
      />
    </table>
  );
};

export default Table;
