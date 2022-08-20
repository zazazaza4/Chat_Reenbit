import { useState } from 'react';
import SendIcon from './send.svg';

import './ChatForm.scss';

const ChatForm = ({ sendUserMessage }) => {
  const [value, setValue] = useState('');

  const sendMessage = () => {
    const data = {
      selfOrOther: 'self',
      content: value,
      time: new Date(),
    };

    sendUserMessage(data);
    setValue('');
  };

  return (
    <div className="form">
      <div className="form__box">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className="form__input"
          placeholder="Type message..."
        ></textarea>
        <button onClick={sendMessage} className="form__submit">
          <img src={SendIcon} alt=">" />
        </button>
      </div>
    </div>
  );
};
export default ChatForm;
