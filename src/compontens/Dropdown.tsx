import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

type Props = {
  title: string;
  items: string[];
};

function Dropdown({ title, items }: Props) {
  const [expanded, setExapanded] = useState(true);

  const toggleExpansion = () => {
    setExapanded(!expanded);
  };

  return (
    <div>
      <button
        onClick={ toggleExpansion }
      >
        {expanded
          ? <FaChevronDown />
          : <FaChevronRight />}
        <h2>{title}</h2>
      </button>
      {expanded && (
        <div>
          {items.map((item) => (
            <div key={ item }>
              <BsHash size={ 22 } />
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
