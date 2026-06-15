import App from '@/App/App';
import Posts from '@/Posts/Posts';
import PostList from '@/Posts/PostList';
import loginAction from '@/Login/login-action';
import { authLoader, rootLoader } from '@/Login/auth-loader';
import logoutAction from '@/Login/logout-action';
import postLoader from '@/Posts/post-loader';
import ErrorPage from '@/Error/ErrorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    loader: rootLoader,
    action: loginAction,
    errorElement: <ErrorPage />,
  },
  {
    path: '/posts',
    element: <Posts />,
    loader: authLoader,
    children: [
      { index: true, element: <PostList />, loader: postLoader },
      //      { path: ':postId', component: <PostEntry /> },
      //      { path: 'new', component: <NewPost /> },
    ],
  },
  {
    path: '/logout',
    action: logoutAction,
  },
];


export default routes;
