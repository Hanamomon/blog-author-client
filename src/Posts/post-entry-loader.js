export default async function postEntryLoader({ params }) {
  const postResponse = await fetch(
    `${import.meta.env.VITE_API_URL}/posts/${params.postId}`
  );

  const postData = await postResponse.json();

  if (!postResponse.ok) return postData?.errors;

  const commentResponse = await fetch(
    `${import.meta.env.VITE_API_URL}/posts/${params.postId}/comments`
  );

  const commentData = await commentResponse.json();

  if (!commentResponse.ok) return commentData?.errors;

  return { postData, commentData };
}
