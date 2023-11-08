import { BsPlusCircleFill } from 'react-icons/bs';

function ChatBar() {
  return (
    <div>
      <BsPlusCircleFill size={ 26 } />
      <input
        type="text"
        placeholder="Enter message..."
      />
    </div>
  );
}

export default ChatBar;
