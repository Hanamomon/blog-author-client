import { redirect } from 'react-router';

export default async function logoutAction() {
  localStorage.removeItem('JWT');

  return redirect('/');
}
