import SearchIcon from './search.svg';

import './Search.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserTemp } from '../../redux/slices/usersSlice';

const Search = () => {
  const temp = useSelector((state) => state.users.userTemp);
  const dispatch = useDispatch();

  return (
    <div className={'search'}>
      <img src={SearchIcon} alt="search" />
      <input
        onChange={(e) => dispatch(changeUserTemp(e.target.value))}
        value={temp}
        type="text"
        placeholder="Search or start new chat"
      />
    </div>
  );
};
export default Search;
