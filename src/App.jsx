import './css/main.css';

import TableHeader from './components/TableHeader.jsx';
import TableRow from './components/TableRow.jsx';
import Table from './components/Table.jsx';

const user = {
  id: 1,
  firstName: 'Emily',
  lastName: 'Johnson',
  maidenName: 'Smith',
  age: 28,
  gender: 'female',
  email: 'emily.johnson@x.dummyjson.com',
  phone: '+81 965-431-3024',
  username: 'emilys',
  password: 'emilyspass',
  birthDate: '1996-5-30',
  image: '...',
  bloodGroup: 'O-',
  height: 193.24,
  weight: 63.16,
  eyeColor: 'Green',
  hair: {
    color: 'Brown',
    type: 'Curly',
  },
  ip: '42.48.100.32',
  address: {
    address: '626 Main Street',
    city: 'Phoenix',
    state: 'Mississippi',
    stateCode: 'MS',
    postalCode: '29112',
    coordinates: {
      lat: -77.16213,
      lng: -92.084824,
    },
    country: 'United States',
  },
};

const columns = [
  { key: 'lastName', name: 'Фамилия', content: user.lastName },
  { key: 'firstName', name: 'Имя', content: user.firstName },
  { key: 'maidenName', name: 'Отчество', content: user.maidenName },
  { key: 'age', name: 'Возраст', content: user.age },
  { key: 'gender', name: 'Пол', content: user.gender },
  { key: 'phone', name: 'Телефон', content: user.phone },
  { key: 'email', name: 'Почта', content: user.email },
  { key: 'country', name: 'Страна', content: user.address.country },
  { key: 'city', name: 'Город', content: user.address.city },
];

const App = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-900 text-2xl text-gray-100">
      <Table columns={columns} user={user} />
    </main>
  );
};

export default App;
