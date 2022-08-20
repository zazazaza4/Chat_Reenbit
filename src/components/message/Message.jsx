import Avatar from '../avatar/Avatar';
import format from 'date-format';

import './Message.scss';

const Message = ({ selfOrOther, content, date, avatar }) => {
  if (selfOrOther !== 'self' && selfOrOther !== 'other') {
    return;
  }

  const time = date instanceof Date ? date : new Date(date);
  return (
    <li className={`message message__${selfOrOther}`}>
      {selfOrOther === 'other' && <Avatar avatar={avatar} />}
      <div className="message__content">{content}</div>
      <div className="message__timestamp">
        {format('dd/MM/yy, hh:mm', time)}
      </div>
    </li>
  );
};
export default Message;
