import { Link, useLoaderData } from 'react-router';
import PostPublisher from '@/Posts/PostPublisher';
import styles from '@/Posts/posts.module.css';

function PostList() {
  const { postData } = useLoaderData();

  return (
    <main>
      {' '}
      {postData.length < 1 ? (
        <p>You have not created a post yet.</p>
      ) : (
        <div className={styles.postList}>
          {postData.map((post) => {
            return (
              <div className={styles.post} key={post.publicId}>
                <h2>
                  <Link to={'/posts/' + post.publicId}>{post.title}</Link>
                </h2>
                <PostPublisher
                  isPublished={post.published}
                  postId={post.publicId}
                />
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}

export default PostList;
