import SendIcon from './send.svg';

import './ChatForm.scss';

const ChatForm = ({ ...props }) => {
  return (
    <form className="message">
      <div className="message__box">
        <textarea
          type="text"
          className="message__input"
          placeholder="Type message..."
        ></textarea>
        <button type="submit" className="message__submit">
          <img src={SendIcon} alt=">" />
        </button>
      </div>
    </form>
  );
};
export default ChatForm;
