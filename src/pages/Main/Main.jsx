import { getAuth } from 'firebase/auth';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import {
  Avatar,
  Chats,
  ChatTitle,
  Search,
  Conversation,
} from '../../components';

import './Main.scss';

const Main = () => {
  const isMounted = useRef(false);

  const auth = getAuth();
  const data = auth.currentUser;

  const { items, user } = useSelector((state) => state.users);
  const { messages, currentDialogId } = useSelector((state) => state.messages);

  useEffect(() => {
    if (isMounted.current) {
      const jsonUsers = JSON.stringify(items);
      const jsonMessages = JSON.stringify(messages);

      localStorage.setItem('users', jsonUsers);
      localStorage.setItem('messages', jsonMessages);
    }
    isMounted.current = true;
  }, [items, messages]);

  return (
    <div className="main">
      <div className="main__search">
        <Avatar
          online={!!data}
          className="main__avatar"
          avatar={data?.photoURL}
          title={data?.displayName || ''}
        />
        <Search />
      </div>
      <div className="main__chats">
        <h2 className="chats__title">Chats</h2>
        <Chats />
      </div>
      {currentDialogId ? (
        <div className="main__body">
          <ChatTitle {...user} />

          <Conversation user={user} messages={messages[currentDialogId]} />
        </div>
      ) : null}
    </div>
  );
};
export default Main;
