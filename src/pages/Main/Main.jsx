import { Chats, ChatTitle } from '../../components';

import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="main__search">Search</div>
      <div className="main__chats">
        <h2 className="chats__title">Chats</h2>
        <Chats />
      </div>
      <div className="main__body">
        <ChatTitle />
      </div>
    </div>
  );
};
export default Main;
