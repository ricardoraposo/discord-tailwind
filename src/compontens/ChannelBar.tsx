import Dropdown from './Dropdown';

const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];

function ChannelBar() {
  return (
    <div>
      <h1>
        Channels
      </h1>
      <Dropdown title="Topics" items={ topics } />
      <Dropdown title="Questions" items={ questions } />
      <Dropdown title="Random" items={ random } />
    </div>
  );
}

export default ChannelBar;
