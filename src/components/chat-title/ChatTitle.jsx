import Avatar from '../avatar/Avatar';

const ChatTitle = ({ img, name }) => {
  return (
    <div className="chatTitle">
      <Avatar img={img} />
      <h1 className="chatTitle__name">{name}</h1>
    </div>
  );
};
export default ChatTitle;
