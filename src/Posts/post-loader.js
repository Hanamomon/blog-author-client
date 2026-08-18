export default async function postLoader() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/posts/author`, {
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
