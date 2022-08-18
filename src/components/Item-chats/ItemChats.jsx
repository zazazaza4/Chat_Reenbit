import { useState } from 'react';

import './ItemChats.scss';

const ItemChats = () => {
  const [online, setOnline] = useState(true);

  return (
    <li className="chat">
      <div className="chat__avatar">
        <img src="" alt="avatar" />
        {online && <div className="online">)</div>}
      </div>
      <div className="chat__content">
        <h2 className="chat__name">Alica Freeman</h2>
        <span className="chat__lastMsg">You are the worst!</span>
      </div>
      <div className="chat__date">Jul 12, 2017</div>
    </li>
  );
};
export default ItemChats;
