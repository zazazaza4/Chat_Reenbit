import { useState } from 'react';
import Avatar from '../avatar/Avatar';

import './ItemChats.scss';

const ItemChats = () => {
  const [online, setOnline] = useState(true);

  return (
    <>
      <li className="chat">
        <Avatar
          online
          avatar={
            'https://ichef.bbci.co.uk/news/640/cpsprodpb/12E3E/production/_89247377_89247376.jpg'
          }
        />
        <div className="chat__content">
          <h2 className="chat__name">Alica Freeman</h2>
          <span className="chat__lastMsg">You are the worst!</span>
        </div>
        <div className="chat__date">Jul 12, 2017</div>
      </li>
      <hr className='line'/>
    </>
  );
};
export default ItemChats;
