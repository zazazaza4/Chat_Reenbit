import { useEffect, useState } from 'react';
import ItemChats from '../Item-chats/ItemChats';

const data = [
  {
    id: 1,
    name: 'Alica Freeman',
    lastMsg: 'You are the worst!',
    date: 'Jul 12, 2017',
    online: true,
    avatar: '',
  },
  {
    id: 2,
    name: 'Alica Freeman',
    lastMsg: 'You are the worst!',
    date: 'Jul 12, 2017',
    online: true,
    avatar: '',
  },
  {
    id: 3,
    name: 'Alica Freeman',
    lastMsg: 'You are the worst!',
    date: 'Jul 12, 2017',
    online: true,
    avatar: '',
  },
  {
    id: 4,
    name: 'Alica Freeman',
    lastMsg: 'You are the worst!',
    date: 'Jul 12, 2017',
    online: true,
    avatar: '',
  },
  {
    id: 5,
    name: 'Alica Freeman',
    lastMsg: 'You are the worst!',
    date: 'Jul 12, 2017',
    online: true,
    avatar: '',
  },
  {
    id: 5,
    name: 'Alica Freeman',
    lastMsg: 'You are the worst!',
    date: 'Jul 12, 2017',
    online: true,
    avatar: '',
  },
  {
    id: 6,
    name: 'Alica Freeman',
    lastMsg: 'You are the worst!',
    date: 'Jul 12, 2017',
    online: true,
    avatar: '',
  },
  {
    id: 7,
    name: 'Alica Freeman',
    lastMsg: 'You are the worst!',
    date: 'Jul 12, 2017',
    online: true,
    avatar: '',
  },
];

const Chats = () => {
  const [chatArray, setChatArray] = useState([]);

  useEffect(() => {
    setChatArray(data);
  }, []);

  return (
    <ul className='chats__list'>
      {chatArray.map((chat) => {
        return <ItemChats key={chat.id} {...chat} />;
      })}
    </ul>
  );
};

export default Chats;
