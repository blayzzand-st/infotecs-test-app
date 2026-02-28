export const COLUMNS_DEF = [
  { key: 'lastName', name: 'Фамилия', getValue: (u) => u.lastName },
  { key: 'firstName', name: 'Имя', getValue: (u) => u.firstName },
  {
    key: 'maidenName',
    name: 'Отчество',
    getValue: (u) => u.maidenName || '---',
  },
  { key: 'age', name: 'Возраст', getValue: (u) => u.age },
  { key: 'gender', name: 'Пол', getValue: (u) => u.gender },
  { key: 'phone', name: 'Телефон', getValue: (u) => u.phone },
  { key: 'email', name: 'Почта', getValue: (u) => u.email },
  { key: 'country', name: 'Страна', getValue: (u) => u.address.country },
  { key: 'city', name: 'Город', getValue: (u) => u.address.city },
];

export const CLICKABLE_COLS = [
  'lastName',
  'firstName',
  'maidenName',
  'age',
  'gender',
  'phone',
];
