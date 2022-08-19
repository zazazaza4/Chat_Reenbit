import { Avatar, ChatForm, Chats, ChatTitle, Search } from '../../components';

import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="main__search">
        <Avatar
          className="main__avatar"
          avatar={
            'https://ichef.bbci.co.uk/news/640/cpsprodpb/12E3E/production/_89247377_89247376.jpg'
          }
        />
        <Search />
      </div>
      <div className="main__chats">
        <h2 className="chats__title">Chats</h2>
        <Chats />
      </div>
      <div className="main__body">
        <ChatTitle />
        <div className="main__conversation">
          Conversation{/* <Conversation /> */}
        </div>
        <ChatForm />
      </div>
    </div>
  );
};
export default Main;
