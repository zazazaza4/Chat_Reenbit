import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selecteUser } from '../../redux/slices/usersSlice';
import { mapReverse } from '../../utils/helpers';
import ItemChats from '../Item-chats/ItemChats';

import './Chats.scss';

const Chats = () => {
  const [chatArray, setChatArray] = useState([]);
  const { userTemp: temp, users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const searchedUsers = () => {
    if (temp < 1) {
      setChatArray(users);
    }

    const tempLower = temp.toLowerCase();

    const filteredUsers = users.filter((item) => {
      return item.name.toLowerCase().indexOf(tempLower) > -1;
    });

    setChatArray(filteredUsers);
  };

  useEffect(() => {
    searchedUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [temp, users]);

  return (
    <ul className="chats__list">
      {mapReverse(chatArray, (chat) => {
        const lastItem = chat.messages[0];

        return (
          <ItemChats
            onClick={() => {
              dispatch(selecteUser(chat.id));
            }}
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
