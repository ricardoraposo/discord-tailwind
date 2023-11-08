import ChannelBar from '../compontens/ChannelBar';
import ContentContainer from '../compontens/ContentContainer';
import SideBar from '../compontens/SideBar';

function Dashboard() {
  return (
    <div className="flex transition-all duration-500 w-full">
      <SideBar />
      <ChannelBar />
      <ContentContainer />
    </div>
  );
}

export default Dashboard;
