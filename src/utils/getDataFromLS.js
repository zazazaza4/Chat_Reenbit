import { usersDate } from '../data';
import { sortUserByTime } from './sortUsers';

export const getCartFromLS = () => {
  const data = localStorage.getItem('users');
  const items = data ? JSON.parse(data) : usersDate;
  const users = sortUserByTime(items);

  return {
    users,
    filteredUsers: users,
    userSelectedId: null,
    userTemp: '',
  };
};
