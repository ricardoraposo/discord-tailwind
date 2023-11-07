import ChatBar from './ChatBar';
import Posts from './Posts';
import TopNavBar from './TopNavBar';

function ContentContainer() {
  return (
    <div className="ml-80 h-full w-full">
      <TopNavBar />
      <Posts />
      <ChatBar />
    </div>
  );
}

export default ContentContainer;
