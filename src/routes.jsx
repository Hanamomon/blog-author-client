import App from '@/App/App';
import loginAction from '@/Login/login-action';
import { rootLoader } from '@/Login/auth-loader';
import ErrorPage from '@/Error/ErrorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    loader: rootLoader,
    action: loginAction,
    errorElement: <ErrorPage />,
  },
];

export default routes;
