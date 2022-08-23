import SearchIcon from './search.svg';

import './Search.scss';
import { useDispatch, useSelector } from 'react-redux';
import { filterUsers } from '../../redux/slices/usersSlice';

const Search = () => {
  const temp = useSelector((state) => state.users.userTemp);
  const dispatch = useDispatch();

  return (
    <div className={'search'}>
      <img src={SearchIcon} alt="search" />
      <input
        onChange={(e) => dispatch(filterUsers(e.target.value))}
        value={temp}
        type="text"
        placeholder="Search or start new chat"
      />
    </div>
  );
};
export default Search;
