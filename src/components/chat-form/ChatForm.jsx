import { useState } from 'react';
import SendIcon from './send.svg';

import './ChatForm.scss';

const ChatForm = () => {
  const [value, setValue] = useState('&pg');

  const sendMessage = () => {
    const data = {
      selfOrOther: true,
      content: value,
      time: new Date(),
    };

    console.log(data);
    setValue('');
  };

  return (
    <div className="form">
      <div className="form__box">
        <textarea
          value={value}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sendMessage(null);
            }
          }}
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
