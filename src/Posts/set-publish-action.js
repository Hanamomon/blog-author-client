export default async function setPublishAction({ request }) {
  const token = localStorage.getItem('JWT');

  const formData = await request.formData();
  const publicId = formData.get('id');
  const published = formData.get('published');

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/posts/${publicId}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ published: !Number(published) }),
    }
  );

  if (!response.ok)
    return {
      errors: { setPublish: { message: 'Could not publish/unpublish post.' } },
    };

  const result = await response.json();

  return { postData: result };
}
