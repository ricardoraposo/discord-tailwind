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
    <div className="mb-2">
      <button
        onClick={ toggleExpansion }
        className="flex items-center gap-1 cursor-pointer"
      >
        {expanded
          ? <FaChevronDown className="text-gray-600" />
          : <FaChevronRight className="text-gray-600" />}
        <h2 className="font-bold text-blue-500">{title}</h2>
      </button>
      {expanded && (
        <div>
          {items.map((item) => (
            <div key={ item } className="flex items-center font-semibold pl-4">
              <BsHash size={ 22 } className="text-gray-400" />
              <h3 className="text-gray-600 tracking-wide">{item}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
