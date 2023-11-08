/* eslint-disable jsx-a11y/control-has-associated-label */
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
      />
      <button type="button">
        <FaSearch size="18" />
      </button>
    </div>
  );
}

export default SearchBar;
