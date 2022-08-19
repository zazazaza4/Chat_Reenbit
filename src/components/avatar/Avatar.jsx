import Mark from './check.svg';
import defaultAvatar from '../../assets/withoutPhoto.png';
import cn from 'classnames';

import './Avatar.scss';

const Avatar = ({ avatar, online, className = '', ...props }) => {
  return (
    <div className={`avatar ${className}`} {...props}>
      <img src={avatar || defaultAvatar} alt="avatar" />
      {online && <img className="online" src={Mark} alt="online" />}
    </div>
  );
};
export default Avatar;
