import './ChatForm.scss';

const ChatForm = ({ ...props }) => {
  return (
    <form className="message">
      <div className="message__box">
        <textarea
          type="text"
          class="message__input"
          placeholder="Type message..."
        ></textarea>
        <button type="submit" class="message__submit"></button>
      </div>
    </form>
  );
};
export default ChatForm;
