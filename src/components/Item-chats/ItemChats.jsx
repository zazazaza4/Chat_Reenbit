import format from 'date-format';
import { trunc } from '../../utils/helpers';
import { months } from '../../utils/helpers';
import Avatar from '../avatar/Avatar';

import './ItemChats.scss';

const ItemChats = ({
  name,
  avatar,
  online,
  lastMsg,
  date,
  notification,
  ...props
}) => {
  const onFormatTime = (time) => {
    if (!(time instanceof Date)) {
      time = new Date(time);
    }

    return months[time.getMonth()] + format(' dd, yyyy', time);
  };

  const time = onFormatTime(date);
  return (
    <>
      <li
        className={`chat  ${notification && 'chat__notification'}`}
        {...props}
      >
        <Avatar className="chat__avatar" online={online} avatar={avatar} />
        <div className="chat__content">
          <h2 className="chat__name">{trunc(name, 30)}</h2>
          <span className="chat__lastMsg">{trunc(lastMsg, 50)}</span>
        </div>
        <div className="chat__date">{time}</div>
      </li>
      <hr className="line" />
    </>
  );
};
export default ItemChats;
