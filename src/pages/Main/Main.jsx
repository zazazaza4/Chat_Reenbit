import { getAuth } from 'firebase/auth';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar,
  ChatForm,
  Chats,
  ChatTitle,
  Search,
  Message,
} from '../../components';
import { addMessageUser } from '../../redux/slices/usersSlice';

import './Main.scss';

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
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
    setMessages(userData.messages);
    setUser(userData);
  };

  const sendUserMessage = (value) => {
    if (value.content) {
      const newMessages = [...messages, value];
      dispatch(addMessageUser(newMessages));
      setMessages(() => newMessages);
    }
  };

  const renderMessages = (messages) => {
    return messages.map((message, index) => {
      const avatar = user.avatar;
      return <Message key={index} avatar={avatar} {...message} />;
    });
  };

  const getAnswerFromAPI = async () => {
    const res = await fetch('https://api.chucknorris.io/')
      .then((res) => res.json())
      .catch((e) => console.error(e));

    return res;
  };

  useEffect(getUserDataById, [userSelectedId]);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(users);
      localStorage.setItem('users', json);
    }
    isMounted.current = true;
  }, [users, messages]);

  const messagesElements = useMemo(() => renderMessages(messages), [messages]);
  return (
    <div className="main">
      <div className="main__search">
        <Avatar
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
          <div className="main__conversation">{messagesElements}</div>
          <ChatForm sendUserMessage={sendUserMessage} />
        </div>
      ) : null}
    </div>
  );
};
export default Main;
