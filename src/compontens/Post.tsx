import { FaUserCircle } from 'react-icons/fa';

type Prop = {
  username: string;
  timestamp: string;
};

function Post({ username, timestamp }: Prop) {
  return (
    <div
      className="flex items-start bg-gray-300 dark:bg-gray-700
      transition-all duration-300"
    >
      <div className="px-24">
        <FaUserCircle size={ 40 } className="text-gray-700 dark:text-gray-300" />
      </div>
      <div>
        <div className="flex gap-2 items-end">
          <p className="font-bold text-lg text-gray-500 dark:text-gray-400">{username}</p>
          <p className="text-gray-600 text-xs">{timestamp}</p>
        </div>
        <p className="text-gray-600 text-lg dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sequi praesentium
          neque magnam velit! Animi similique sed tempore voluptatibus fugiat aliquid
          voluptatum? Quisquam quas soluta vero maiores asperiores necessitatibus velit.
        </p>
      </div>
    </div>
  );
}

export default Post;
