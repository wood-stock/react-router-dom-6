import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <h1>Blog</h1>
      {posts.map(({ id, title }) => (
        <Link key={id} to={`/blog/${id}`}>
          <li>{title}</li>
        </Link>
      ))}
    </>
  );
};
export default BlogPage;
