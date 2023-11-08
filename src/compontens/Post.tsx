import { FaUserCircle } from 'react-icons/fa';

type Prop = {
  username: string;
  timestamp: string;
};

function Post({ username, timestamp }: Prop) {
  return (
    <div>
      <div>
        <FaUserCircle size={ 40 } />
      </div>
      <div>
        <div>
          <p>{username}</p>
          <p>{timestamp}</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sequi praesentium
          neque magnam velit! Animi similique sed tempore voluptatibus fugiat aliquid
          voluptatum? Quisquam quas soluta vero maiores asperiores necessitatibus velit.
        </p>
      </div>
    </div>
  );
}

export default Post;
