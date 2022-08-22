import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { sleeper, mapReverse } from '../../utils/helpers';
import Message from '../message/Message';

import './Conversation.scss';

const Conversation = ({ user, messages, sendMessage, answer }) => {
  const { userSelectedId } = useSelector((state) => state.users);

  const getAnswerFromAPI = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then(sleeper(10000))
      .catch((e) => console.error(e));

    return res;
  };

  const sendAnswer = (id, img) => {
    getAnswerFromAPI()
      .then((res) => {
        const value = {
          userId: id,
          content: res.value,
          selfOrOther: 'other',
          date: new Date(),
          avatar: img,
        };

        sendMessage(value);
      })
      .catch((e) => console.error(e));
  };

  const renderMessages = (messages = []) => {
    return mapReverse(messages, (message, index) => {
      const avatar = user.avatar;
      return <Message key={index} avatar={avatar} {...message} />;
    });
  };

  useEffect(() => {
    if (answer) {
      sendAnswer(answer.id, answer.img);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, answer]);

  const messagesElements = useMemo(
    () => renderMessages(messages),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [messages, userSelectedId]
  );

  return <div className="conversation">{messagesElements}</div>;
};
export default Conversation;
