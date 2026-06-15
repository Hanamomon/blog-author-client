import { useLoaderData } from 'react-router';

function PostList() {
  const { postData } = useLoaderData();

  return (
    <main>
      {' '}
      {postData.length < 1 ? (
        <p>You have not created a post yet.</p>
      ) : (
        <div>
          {postData.map((post) => {
            return (
              <div key={post.publicId}>
                <h2>{post.title}</h2>
                {post.published ? (
                  <>
                    <p>Published</p>
                    <button>Unpublish</button>
                  </>
                ) : (
                  <>
                    <p>Unpublished</p>
                    <button>Publish</button>
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}

export default PostList;
