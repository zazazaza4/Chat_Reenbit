import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar,
  ChatForm,
  Chats,
  ChatTitle,
  Search,
  Message,
} from '../../components';

import './Main.scss';

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const { userSelectedId, users } = useSelector((state) => state.users);

  const getUserDataById = () => {
    if (!userSelectedId) {
      return;
    }

    const userData = users.find((item) => item.id === userSelectedId);
    setMessages(userData.messages);
    setUser(userData);
  };

  useEffect(getUserDataById, [userSelectedId]);

  const renderMessages = (messages = []) => {
    return messages.map((message, index) => {
      console.log(user.avatar);
      const avatar = user.avatar;
      return <Message key={index} avatar={avatar} {...message} />;
    });
  };

  const messagesElements = renderMessages(messages);
  return (
    <div className="main">
      <div className="main__search">
        <Avatar
          className="main__avatar"
          avatar={
            'https://ichef.bbci.co.uk/news/640/cpsprodpb/12E3E/production/_89247377_89247376.jpg'
          }
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
          <ChatForm />
        </div>
      ) : null}
    </div>
  );
};
export default Main;
