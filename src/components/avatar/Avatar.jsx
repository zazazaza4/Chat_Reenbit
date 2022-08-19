import Mark from './check.svg';

import './Avatar.scss';

const Avatar = ({ avatar, online }) => {
  return (
    <div className="avatar">
      <img src={avatar} alt="avatar" />

      {online && <img className="online" src={Mark} alt="online" />}
    </div>
  );
};
export default Avatar;
