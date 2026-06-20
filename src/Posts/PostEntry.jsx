import { useLoaderData, useFetcher } from 'react-router';
import { formatDistanceToNow } from 'date-fns';
import { useState } from 'react';

function PostEntry() {
  const { postData, commentData } = useLoaderData();
  const fetcher = useFetcher();
  const [isEditing, setIsEditing] = useState(null);

  return (
    <main>
      <article>
        <h1>{postData.title}</h1>
        <p>{postData.content.body}</p>
        <time>{formatDistanceToNow(postData.postedAt) + ' ago'}</time>
      </article>
      <section>
        <h2>Comments ({commentData.length})</h2>
        {commentData.map((comment) => {
          return (
            <article key={comment.id}>
              <header>
                <p>{comment.user.username}</p>
                <time>{formatDistanceToNow(comment.postedAt) + ' ago'}</time>
              </header>
              {isEditing === comment.id ? (
                <fetcher.Form
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
                <>
                  <p>{comment.content.text}</p>
                  <menu>
                    <button
                      onClick={() => {
                        setIsEditing(comment.id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        fetcher.submit(
                          { commentId: comment.id },
                          {
                            method: 'DELETE',
                          }
                        );
                      }}
                    >
                      Delete
                    </button>
                  </menu>
                </>
              )}
            </article>
          );
        })}
        <fetcher.Form method="POST">
          <label htmlFor="comment">Comment:</label>
          <textarea name="comment" id="comment"></textarea>
          <button>Submit</button>
        </fetcher.Form>
      </section>
    </main>
  );
}

export default PostEntry;
