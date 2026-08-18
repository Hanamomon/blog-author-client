import { useLoaderData, useFetcher } from 'react-router';
import { formatDistanceToNow } from 'date-fns';
import { useState } from 'react';
import ConfirmDialog from '@/Posts/ConfirmDialog';
import styles from '@/Posts/post-entry.module.css';

function PostEntry() {
  const { postData, commentData } = useLoaderData();
  const fetcher = useFetcher();
  const [isEditing, setIsEditing] = useState(null);
  const markup = { __html: postData.content.body };

  return (
    <main className={styles.post}>
      <article>
        <h1>{postData.title}</h1>
        <div dangerouslySetInnerHTML={markup} />
        <time>{formatDistanceToNow(postData.postedAt) + ' ago'}</time>
      </article>
      <section className={styles.commentList}>
        <h2>Comments ({commentData.length})</h2>
        {commentData.map((comment) => {
          return (
            <article className={styles.comment} key={comment.id}>
              <header className={styles.commentInfo}>
                <p>{comment.user.username}</p>
                <time>{formatDistanceToNow(comment.postedAt) + ' ago'}</time>
              </header>
              {isEditing === comment.id ? (
                <fetcher.Form
                  className={styles.edit}
                  method="PUT"
                  onSubmit={() => {
                    setIsEditing(null);
                  }}
                >
                  <input type="hidden" name="commentId" value={comment.id} />
                  <textarea name="comment" id="comment">
                    {comment.content.text}
                  </textarea>
                  <menu>
                    <button type="submit">Submit</button>
                    <button
                      onClick={() => {
                        setIsEditing(null);
                      }}
                    >
                      Cancel
                    </button>
                  </menu>
                </fetcher.Form>
              ) : (
                <div className={styles.display}>
                  <p>{comment.content.text}</p>
                  <menu>
                    <button
                      onClick={() => {
                        setIsEditing(comment.id);
                      }}
                    >
                      Edit
                    </button>
                    <ConfirmDialog
                      onDelete={() => {
                        fetcher.submit(
                          { commentId: comment.id },
                          {
                            method: 'DELETE',
                          }
                        );
                      }}
                    />
                  </menu>
                </div>
              )}
            </article>
          );
        })}
        <fetcher.Form className={styles.postComment} method="POST">
          <label htmlFor="comment">Comment:</label>
          <textarea name="comment" id="comment"></textarea>
          <button>Submit</button>
        </fetcher.Form>
      </section>
    </main>
  );
}
// Dialog is imperative and systematically operates on the last comment, need to change it to be aware of the comment it will operate on

export default PostEntry;
