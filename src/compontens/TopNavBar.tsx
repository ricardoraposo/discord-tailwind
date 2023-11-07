import { BsHash } from 'react-icons/bs';
import { FaSun, FaRegBell, FaUserCircle } from 'react-icons/fa';
import SearchBar from './SearchBar';

function TopNavBar() {
  const switchTheme = () => {
    const bodyClass = window.document.body.classList;
    bodyClass.toggle('dark');
  };

  return (
    <div
      className="flex justify-between items-center h-16 w-full bg-gray-300
      drop-shadow-xl dark:bg-gray-700
      transition-all duration-300"
    >
      <div className="flex items-center">
        <BsHash size={ 28 } className="text-gray-500 font-bold" />
        <h2 className="text-gray-500 font-bold tracking-wide">tailwind-css</h2>
      </div>
      <div className="flex items-center gap-4 pr-3">
        <FaSun
          onClick={ switchTheme }
          size={ 28 }
          className="text-gray-500 cursor-pointer"
        />
        <SearchBar />
        <FaRegBell size={ 24 } className="text-gray-500" />
        <FaUserCircle size={ 24 } className="text-gray-500" />
      </div>
    </div>
  );
}

export default TopNavBar;
