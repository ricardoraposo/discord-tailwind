import Dropdown from './Dropdown';

const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];

function ChannelBar() {
  return (
    <div
      className="fixed top-0 w-64 h-screen m-0 ml-16 bg-gray-200 p-4 shadow-lg
      dark:bg-gray-800
      animation-all duration-300 z-0"
    >
      <h1
        className="text-gray-600 font-bold tracking-wide pb-4
        dark:text-gray-400"
      >
        Channels
      </h1>
      <Dropdown title="Topics" items={ topics } />
      <Dropdown title="Questions" items={ questions } />
      <Dropdown title="Random" items={ random } />
    </div>
  );
}

export default ChannelBar;
