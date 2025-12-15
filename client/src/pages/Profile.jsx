import { useEffect, useState } from 'react';
import { getUser } from '../api/userApi';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser('123').then(setUser);
  }, []);

  return <div>{user ? user.name : 'Loading...'}</div>;
}
