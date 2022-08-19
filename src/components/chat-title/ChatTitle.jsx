import Avatar from '../avatar/Avatar';

import './ChatTitle.scss';

const ChatTitle = ({ avatar, online, name, className }) => {
  return (
    <div className={`chatTitle ${className}`}>
      <Avatar avatar={avatar} online={online} />
      <h1 className="chatTitle__name">{name}</h1>
    </div>
  );
};
export default ChatTitle;
