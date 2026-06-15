import App from '@/App/App';
import loginAction from '@/Login/login-action';
import authLoader from '@/Login/auth-loader';
import ErrorPage from '@/Error/ErrorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    loader: authLoader,
    action: loginAction,
    errorElement: <ErrorPage />,
  },
];

export default routes;
