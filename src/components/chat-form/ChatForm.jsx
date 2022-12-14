import { useState } from 'react';
import SendIcon from './send.svg';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import './ChatForm.scss';

const ChatForm = ({ sendUserMessage }) => {
  const [value, setValue] = useState('');
  const { user } = useSelector((state) => state.users);

  const sendMessage = () => {
    const data = {
      userId: user.id,
      id: nanoid(),
      selfOrOther: 'self',
      content: value,
      date: new Date(),
    };

    sendUserMessage(data);
    setValue('');
  };

  return (
    <div className="form">
      <div className="form__box">
        <textarea
          onKeyDown={(e) => {
            if (e.code === 'Enter') {
              e.preventDefault();
              sendMessage();
            }
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className="form__input"
          placeholder="Type your message"
        ></textarea>
        <button onClick={sendMessage} className="form__submit">
          <img src={SendIcon} alt=">" />
        </button>
      </div>
    </div>
  );
};
export default ChatForm;
