import { useState } from 'react';
import { trunc } from '../../utils/functions';
import Avatar from '../avatar/Avatar';

import './ItemChats.scss';

const ItemChats = ({ name, avatar, online, lastMsg, date, ...props }) => {
  return (
    <>
      <li className="chat" {...props}>
        <Avatar className="chat__avatar" online={online} avatar={avatar} />
        <div className="chat__content">
          <h2 className="chat__name">{name}</h2>
          <span className="chat__lastMsg">{trunc(lastMsg, 30)}</span>
        </div>
        <div className="chat__date">{date}</div>
      </li>
      <hr className="line" />
    </>
  );
};
export default ItemChats;
