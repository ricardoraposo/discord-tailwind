import { BsDiscord, BsPlaystation, BsApple, BsFillGearFill } from 'react-icons/bs';
import { FaPoo } from 'react-icons/fa';
import SideBarIcon from './SideBarIcon';

function SideBar() {
  return (
    <div>
      <div>
        <SideBarIcon icon={ <BsDiscord size="28" /> } text="Discord" />
        <SideBarIcon icon={ <BsPlaystation size="28" /> } text="Turma do Play" />
        <SideBarIcon icon={ <BsApple size="28" /> } text="Fãs da Apple" />
        <SideBarIcon icon={ <FaPoo size="28" /> } text="Fãs de Android" />
      </div>
      <SideBarIcon icon={ <BsFillGearFill size="28" /> } text="Configurações" />
    </div>
  );
}

export default SideBar;
