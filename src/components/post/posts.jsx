import { useEffect, useState } from 'react';
import Post from './post';
function Posts() {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="text-left">
      <h2>Posts:{Posts.length}</h2>
      <div>
        {Posts.map((post) => (
          <Post post={post}></Post>
        ))}
      </div>
    </div>
  );
}
export default Posts;
