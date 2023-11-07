/* eslint-disable jsx-a11y/control-has-associated-label */
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  return (
    <div className="flex bg-gray-600 rounded-lg overflow-hidden">
      <input
        type="text"
        placeholder="Search..."
        className="bg-gray-600 text-gray-400 py-2 px-4
        placeholder:text-gray-500"
      />
      <button
        type="button"
        className="pr-3 text-gray-500"
      >
        <FaSearch size="18" />
      </button>
    </div>
  );
}

export default SearchBar;
