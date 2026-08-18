import { redirect } from 'react-router';

export default async function newPostAction({ request }) {
  const token = localStorage.getItem('JWT');

  const formData = await request.formData();
  const title = formData.get('title');
  const content = formData.get('content');

  console.log(content);

  const response = await fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content: { body: content } }),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    return data?.errors;
  }

  return redirect(`/posts/${data.publicId}`);
}
