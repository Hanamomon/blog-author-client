import { redirect } from 'react-router';

async function getUser() {
  const token = localStorage.getItem('JWT');

  if (!token) return { message: 'You are not logged in.' };

  const response = await fetch('http://localhost:3000/users', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) return { message: 'Request has failed.' };

  const user = await response.json();

  if (user.role !== 'AUTHOR')
    return { message: 'You are not authorized to access this resource.' };

  return user;
}

export async function rootLoader() {
  const user = await getUser();

  if (user?.message) return user.message;

  return redirect('/posts');
}
