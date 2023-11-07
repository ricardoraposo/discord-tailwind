import { BsPlusCircleFill } from 'react-icons/bs';

function ChatBar() {
  return (
    <div
      className="flex flex-row items-center justify-between gap-3
      fixed right-1/4 translate-x-1/4 bottom-4 h-12 w-2/4
      rounded-lg shadow-lg
      bg-gray-600 px-2"
    >
      <BsPlusCircleFill size={ 26 } className="text-blue-500" />
      <input
        type="text"
        placeholder="Enter message..."
        className="font-semibold w-full
        bg-transparent outline-none
        ml-0 mr-auto
        text-gray-400 placeholder-gray-500
        cursor-text"
      />
    </div>
  );
}

export default ChatBar;
