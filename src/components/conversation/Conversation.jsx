import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sleeper } from '../../utils/helpers';
import ChatForm from '../chat-form/ChatForm';
import Message from '../message/Message';

import { addMessagesById } from '../../redux/slices/messagesSlice';
import { pushUpUser, setNotification } from '../../redux/slices/usersSlice';

import './Conversation.scss';

const Conversation = ({ messages }) => {
  const [isBottom, setIsBottom] = useState(false);

  const { user } = useSelector((state) => state.users);
  const { currentDialogId } = useSelector((state) => state.messages);

  const bottomRef = useRef(null);

  const dispatch = useDispatch();

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

  const sendMessage = (value) => {
    if (value.content) {
      dispatch(addMessagesById({ id: value.userId, message: value }));
      dispatch(pushUpUser(value.userId));

      if (value.selfOrOther === 'self') {
        sendAnswer(value.userId, user.avatar);
        setIsBottom(true);
      } else {
        dispatch(setNotification(value.userId));
      }
    }
  };

  const renderMessages = (messages = []) => {
    return messages.map((message, index) => {
      const avatar = user.avatar;
      return <Message key={index} avatar={avatar} {...message} />;
    });
  };

  useEffect(() => {
    if (isBottom) {
      bottomRef.current?.scrollIntoView({
        behavior: 'smooth',
      });
      setIsBottom(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  const messagesElements = useMemo(
    () => renderMessages(messages),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [messages, currentDialogId]
  );

  return (
    <>
      <div className="conversation">
        {messagesElements}
        <li ref={bottomRef} className="conversation__end"></li>
      </div>
      <ChatForm sendUserMessage={sendMessage} />
    </>
  );
};
export default Conversation;
