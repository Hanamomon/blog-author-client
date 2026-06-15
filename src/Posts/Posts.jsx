import { Outlet } from 'react-router';
import PostNav from './PostNav';

function Posts() {
  return (
    <>
      <PostNav />
      <Outlet />
    </>
  );
}

export default Posts;
