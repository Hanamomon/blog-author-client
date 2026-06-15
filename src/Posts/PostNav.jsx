import { NavLink, Form } from 'react-router';

function PostNav() {
  return (
    <nav>
      <NavLink to="/posts">Home</NavLink>
      {'|'}
      <NavLink to="/posts/new">New Post</NavLink>
      <Form action="/logout" method="post">
        <button type="submit">Logout</button>
      </Form>
    </nav>
  );
}

export default PostNav;
