export default async function postEntryAction({ request, params }) {
  const token = localStorage.getItem('JWT');

  const method = request.method;
  const postId = params.postId;

  const formData = await request.formData();
  const commentId = Number(formData.get('commentId'));
  const commentText = formData.get('comment');

  switch (method) {
    case 'POST': {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/posts/${postId}/comments`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: {
              text: commentText,
            },
          }),
        }
      );

      const result = await response.json().catch(() => null);

      if (!response.ok) return result?.errors;

      return result;
    }
    case 'PUT': {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/posts/${postId}/comments/${commentId}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: {
              text: commentText,
            },
          }),
        }
      );

      const result = await response.json().catch(() => null);

      if (!response.ok) return result?.errors;

      return result;
    }
    case 'DELETE': {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/posts/${postId}/comments/${commentId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        return { errors: { delete: { message: 'Could not delete comment.' } } };
      }

      break;
    }
    default:
      break;
  }
}
