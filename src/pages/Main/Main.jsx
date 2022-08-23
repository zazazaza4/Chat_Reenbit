import { getAuth } from 'firebase/auth';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar,
  ChatForm,
  Chats,
  ChatTitle,
  Search,
  Conversation,
} from '../../components';
import { addMessagesById } from '../../redux/slices/messagesSlice';

import './Main.scss';

const Main = () => {
  const [answer, setAnswer] = useState(null);
  const [isFirst, setIsFirst] = useState(true);

  const isMounted = useRef(false);

  const auth = getAuth();
  const data = auth.currentUser;

  const { items, user } = useSelector((state) => state.users);
  const { messages, currentDialogId } = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  const sendMessage = (value) => {
    if (value.content) {
      dispatch(addMessagesById({ id: value.userId, message: value }));
      if ((value.selfOrOther === 'self' && answer === 'self') || isFirst) {
        setAnswer((answer) => 'other');
      } else if (value.selfOrOther === 'other' && answer === 'other') {
        setAnswer((answer) => 'self');
      }
      setIsFirst(false);
    }
  };

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

          <Conversation
            user={user}
            messages={messages[currentDialogId]}
            sendMessage={sendMessage}
            isAnswer={answer}
          />

          <ChatForm sendUserMessage={sendMessage} />
        </div>
      ) : null}
    </div>
  );
};
export default Main;
