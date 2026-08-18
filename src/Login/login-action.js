import { redirect } from 'react-router';

export default async function loginAction({ request }) {
  const formData = await request.formData();
  const username = formData.get('username');
  const password = formData.get('password');

  const response = await fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: username, password: password }),
  });

  const data = await response.json();

  if (!response.ok) {
    const errors = {};
    Object.entries(data.errors).map(([key, value]) => {
      errors[key] = { message: value.msg };
    });
    return errors;
  }

  const userResponse = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${data}`,
    },
  });

  const userData = await userResponse.json();

  if (userData.role !== 'AUTHOR') {
    return { role: { message: 'User is not an author.' } };
  }

  localStorage.setItem('JWT', data);

  return redirect('/posts');
}
