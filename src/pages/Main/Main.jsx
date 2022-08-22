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

import { addMessageUser, pushUpUser } from '../../redux/slices/usersSlice';

import './Main.scss';

const Main = () => {
  const [user, setUser] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [messages, setMessages] = useState([]);
  const isMounted = useRef(false);

  const auth = getAuth();
  const data = auth.currentUser;

  const { userSelectedId, users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const getUserDataById = () => {
    if (!userSelectedId) {
      return;
    }

    const userData = users.find((item) => item.id === userSelectedId);
    setUser(userData);
    setMessages(userData.messages);
  };

  const sendMessage = (value) => {
    console.log(value);
    if (value.content) {
      const newMessages = [value, ...user.messages];
      console.log(newMessages);
      const id = value.userId;
      dispatch(addMessageUser({ messages: newMessages, id }));
      dispatch(pushUpUser(id));

      if (value.selfOrOther === 'self') {
        getUserDataById();
        setAnswer({ id: user.id, img: user.avatar });
      } else {
        setAnswer(null);
      }
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getUserDataById, [userSelectedId, messages, answer]);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(users);
      localStorage.setItem('users', json);
    }
    isMounted.current = true;
  }, [users]);

  return (
    <div className="main">
      <div className="main__search">
        <Avatar
          online={!!data}
          className="main__avatar"
          avatar={data?.photoURL || ''}
          title={data?.displayName || ''}
        />
        <Search />
      </div>
      <div className="main__chats">
        <h2 className="chats__title">Chats</h2>
        <Chats />
      </div>
      {userSelectedId ? (
        <div className="main__body">
          <ChatTitle {...user} />
          <div className="main__conversation">
            <Conversation
              user={user}
              messages={messages}
              sendMessage={sendMessage}
              answer={answer}
            />
          </div>
          <ChatForm sendUserMessage={sendMessage} />
        </div>
      ) : null}
    </div>
  );
};
export default Main;
