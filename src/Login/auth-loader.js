import { redirect } from 'react-router';

export default async function authLoader({ pattern }) {
  const token = localStorage.getItem('JWT');

  if (!token) return redirect('/');

  const response = await fetch('http://localhost:3000/users', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) return redirect('/');

  const user = await response.json();

  if (user.role !== 'AUTHOR') return redirect('/');

  if (pattern === '/') return redirect('/posts');

  return user;
}
