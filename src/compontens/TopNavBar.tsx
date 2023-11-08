import { BsHash } from 'react-icons/bs';
import { FaSun, FaRegBell, FaUserCircle } from 'react-icons/fa';
import SearchBar from './SearchBar';

function TopNavBar() {
  const switchTheme = () => {
    const bodyClass = window.document.body.classList;
    bodyClass.toggle('dark');
  };

  return (
    <div>
      <div>
        <BsHash size={ 28 } />
        <h2>tailwind-css</h2>
      </div>
      <div>
        <FaSun
          onClick={ switchTheme }
          size={ 28 }
        />
        <SearchBar />
        <FaRegBell size={ 24 } />
        <FaUserCircle size={ 24 } />
      </div>
    </div>
  );
}

export default TopNavBar;
