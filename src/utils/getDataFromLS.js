import { usersDate, messagesData } from '../data';

export const getUsersFromLS = () => {
  const data = localStorage.getItem('users');
  const items = data ? JSON.parse(data) : usersDate;

  return {
    items,
    user: null,
    temp: '',
  };
};

export const getMessagesFromLS = () => {
  const data = localStorage.getItem('messages');
  const messages = data ? JSON.parse(data) : messagesData;

  return {
    messages,
    currentDialogId: null,
  };
};
