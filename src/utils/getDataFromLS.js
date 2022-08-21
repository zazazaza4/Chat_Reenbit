import { usersDate } from '../data';

export const getCartFromLS = () => {
  const data = localStorage.getItem('users');
  const users = data ? JSON.parse(data) : usersDate;

  return {
    users,
    userSelectedId: null,
    userTemp: '',
  };
};
