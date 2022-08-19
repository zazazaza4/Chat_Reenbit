import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchedUsers, selecteUser } from '../../redux/slices/usersSlice';
import ItemChats from '../Item-chats/ItemChats';

import './Chats.scss';

const Chats = () => {
  const [chatArray, setChatArray] = useState([]);
  const { userTemp: temp, filteredUsers } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchedUsers());
    setChatArray(filteredUsers);
  }, [temp]);

  return (
    <ul className="chats__list">
      {chatArray.map((chat) => {
        const lastItem = chat.messages[chat.messages.length - 1];

        return (
          <ItemChats
            onClick={() => dispatch(selecteUser(chat.id))}
            key={chat.id}
            lastMsg={lastItem.content}
            date={lastItem.date}
            {...chat}
          />
        );
      })}
    </ul>
  );
};

export default Chats;
