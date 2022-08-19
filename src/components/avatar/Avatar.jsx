import Mark from './check.svg';
import defaultAvatar from '../../assets/withoutPhoto.png';

import './Avatar.scss';

const Avatar = ({ avatar = defaultAvatar, online = false }) => {
  return (
    <div className="avatar">
      <img src={avatar} alt="avatar" />

      {online && <img className="online" src={Mark} alt="online" />}
    </div>
  );
};
export default Avatar;
