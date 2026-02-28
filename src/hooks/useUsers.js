import { useEffect, useState, useRef } from 'react';

const BASE_URL = 'https://dummyjson.com/users';

const UseUsers = ({
  page = 1,
  limit = 15,
  sortBy = null,
  order = 'asc',
  filterKey = null,
  filterValue = null,
}) => {
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const previousUsers = useRef([]);

  useEffect(() => {
    let cancelled = false;

    const skip = (page - 1) * limit;
    setIsLoading(true);
    setError(null);

    let url = BASE_URL;
    const params = new URLSearchParams();

    if (filterKey && filterValue) {
      url = `${url}/filter`;

      params.set('key', filterKey);
      params.set('value', filterValue);
    }

    if (sortBy) {
      params.set('sortBy', sortBy);
      params.set('order', order);
    }

    params.set('limit', String(limit));
    params.set('skip', String(skip));

    fetch(`${url}?${params}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Network Error!: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;

        setUsers(data.users);
        setTotal(data.total);
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [page, limit, sortBy, order, filterKey, filterValue]);

  useEffect(() => {
    if (!isLoading && users.length > 0) {
      previousUsers.current = users;
    }
  }, [isLoading, users]);

  return {
    users: isLoading ? previousUsers.current : users,
    total,
    isLoading,
    error,
  };
};

export default UseUsers;
