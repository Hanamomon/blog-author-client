export default async function postLoader() {
  const response = await fetch(`http://localhost:3000/posts/author`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('JWT')}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    return data?.errors;
  }

  return { postData: data };
}
