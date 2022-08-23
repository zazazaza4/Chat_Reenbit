import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentId } from '../../redux/slices/messagesSlice';
import { deleteNotification, selecteUser } from '../../redux/slices/usersSlice';

import { mapReverse } from '../../utils/helpers';
import ItemChats from '../Item-chats/ItemChats';

import './Chats.scss';

const Chats = () => {
  const [chatArray, setChatArray] = useState([]);
  const { temp, items } = useSelector((state) => state.users);
  const { messages } = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  const searchedUsers = () => {
    if (temp < 1) {
      setChatArray(items);
    }

    const tempLower = temp.toLowerCase();

    const filteredUsers = items.filter((item) => {
      return item.name.toLowerCase().indexOf(tempLower) > -1;
    });

    setChatArray(filteredUsers);
  };

  useEffect(() => {
    searchedUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [temp, items]);

  return (
    <ul className="chats__list">
      {mapReverse(chatArray, (chat) => {
        const messageId = messages[chat.id];
        const lastMessage = messageId[messageId.length - 1];

        return (
          <ItemChats
            onClick={() => {
              dispatch(selecteUser(chat.id));
              dispatch(setCurrentId(chat.id));
              dispatch(deleteNotification(chat.id));
            }}
            key={chat.id}
            lastMsg={lastMessage.content}
            date={lastMessage.date}
            {...chat}
          />
        );
      })}
    </ul>
  );
};

export default Chats;
