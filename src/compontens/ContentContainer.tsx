import ChatBar from './ChatBar';
import Posts from './Posts';
import TopNavBar from './TopNavBar';

function ContentContainer() {
  return (
    <div>
      <TopNavBar />
      <Posts />
      <ChatBar />
    </div>
  );
}

export default ContentContainer;
