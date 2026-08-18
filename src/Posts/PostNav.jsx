import { NavLink, Form } from 'react-router';
import styles from '@/Posts/nav.module.css';

function PostNav() {
  return (
    <nav className={styles.nav}>
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
