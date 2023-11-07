import { BsDiscord, BsPlaystation, BsApple, BsFillGearFill } from 'react-icons/bs';
import { FaPoo } from 'react-icons/fa';
import SideBarIcon from './SideBarIcon';

function SideBar() {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 bg-gray-200 flex flex-col
      items-center justify-between pb-4 pt-4 shadow-lg dark:bg-gray-900
      transition-all duration-300"
    >
      <div className="flex flex-col gap-4 justify-center items-center">
        <SideBarIcon icon={ <BsDiscord size="28" /> } text="Discord" />
        <div className="border w-4/6 border-gray-600" />
        <SideBarIcon icon={ <BsPlaystation size="28" /> } text="Turma do Play" />
        <SideBarIcon icon={ <BsApple size="28" /> } text="Fãs da Apple" />
        <SideBarIcon icon={ <FaPoo size="28" /> } text="Fãs de Android" />
      </div>
      <SideBarIcon icon={ <BsFillGearFill size="28" /> } text="Configurações" />
    </div>
  );
}

export default SideBar;
