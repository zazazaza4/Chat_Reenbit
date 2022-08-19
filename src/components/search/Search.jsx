import SearchIcon from './search.svg';

import './Search.scss';

const Search = () => {
  return (
    <div className={'search'}>
      <img src={SearchIcon} alt="search" />
      <input type="text" placeholder="Search or start new chat" />
    </div>
  );
};
export default Search;
