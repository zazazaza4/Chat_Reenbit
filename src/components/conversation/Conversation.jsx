import Avatar from '../avatar/Avatar';
import './Conversation.scss';

const Conversation = () => {
  return (
    <ul className="messages">
      <li className="messages__item messages__other">
        <Avatar img="" />
        <div className="messages__content">dada dadad ada</div>
        <div className="messages__timestamp">122 31.12.3213</div>
      </li>
      <li className="messages__item messages__other">
        <Avatar img="" />
        <div className="messages__content">dada dadad ada</div>
        <div className="messages__timestamp"></div>
      </li>
      <li className="messages__item messages__self">
        <div className="messages__content">adad</div>
        <div className="messages__timestamp"></div>
      </li>
      <li className="messages__item messages__self">
        <div className="messages__content">adakka</div>
        <div className="messages__timestamp"></div>
      </li>
      <li className="messages__item messages__other">
        <Avatar img="" />
        <div className="messages__content">adakka</div>
        <div className="messages__timestamp"></div>
      </li>
    </ul>
  );
};
export default Conversation;
