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
import { addMessageUser, pushUpUser } from '../../redux/slices/usersSlice';
import { mapReverse } from '../../utils/helpers';

import './Main.scss';

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [answer, setAnswer] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
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

  const sendMessage = (value) => {
    if (value.content) {
      const newMessages = [value, ...messages];
      dispatch(addMessageUser(newMessages));
      dispatch(pushUpUser(user.id));
      setMessages(() => newMessages);

      if (value.selfOrOther === 'self') {
        setAnswer(false);
      }
    }
  };

  const sendAnswer = () => {
    setIsLoading(true);
    getAnswerFromAPI()
      .then((res) => {
        const value = {
          content: res.value,
          selfOrOther: 'other',
          date: new Date(),
          avatar: user.avatar,
        };

        sendMessage(value);
      })
      .catch((e) => console.error(e));
    setIsLoading(false);
    setAnswer(true);
  };

  const renderMessages = (messages) => {
    return mapReverse(messages, (message, index) => {
      const avatar = user.avatar;
      return <Message key={index} avatar={avatar} {...message} />;
    });
  };

  const getAnswerFromAPI = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .catch((e) => console.error(e));

    return res;
  };

  useEffect(() => {
    if (isLoading === true && answer === true) return;

    const idTimeOut = setTimeout(() => {
      sendAnswer();
    }, 10000);

    return () => clearTimeout(idTimeOut);
  }, [answer]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getUserDataById, [userSelectedId]);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(users);
      localStorage.setItem('users', json);
    }
    isMounted.current = true;
  }, [users, messages]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const messagesElements = useMemo(() => renderMessages(messages), [messages]);
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
          <div className="main__conversation">{messagesElements}</div>
          <ChatForm sendUserMessage={sendMessage} />
        </div>
      ) : null}
    </div>
  );
};
export default Main;
