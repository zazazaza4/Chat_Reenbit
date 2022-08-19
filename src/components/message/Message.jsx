import Avatar from '../avatar/Avatar';

import './Message.scss';

const Message = ({ selfOrOther, content, time, avatar }) => {
  if (selfOrOther !== 'self' && selfOrOther !== 'other') {
    return;
  }

  return (
    <li className={`message message__${selfOrOther}`}>
      {selfOrOther === 'other' && <Avatar avatar={avatar} />}
      <div className="message__content">{content}</div>
      <div className="message__timestamp">{time}</div>
    </li>
  );
};
export default Message;
