import { useFetcher } from 'react-router';

function PostPublisher({ isPublished, postId }) {
  const fetcher = useFetcher();

  let buttonContent = 'Publish',
    publishedValue = 0;
  if (isPublished) {
    buttonContent = 'Unpublish';
    publishedValue = 1;
  }

  return (
    <button
      onClick={() => {
        fetcher.submit(
          { published: publishedValue, id: postId },
          { method: 'PATCH' }
        );
      }}
    >
      {buttonContent}
    </button>
  );
}

export default PostPublisher;
