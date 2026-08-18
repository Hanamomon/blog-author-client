import App from '@/App/App';
import Posts from '@/Posts/Posts';
import PostList from '@/Posts/PostList';
import PostEntry from '@/Posts/PostEntry';
import loginAction from '@/Login/login-action';
import { authLoader, rootLoader } from '@/Login/auth-loader';
import logoutAction from '@/Login/logout-action';
import postLoader from '@/Posts/post-loader';
import postEntryLoader from '@/Posts/post-entry-loader';
import setPublishAction from '@/Posts/set-publish-action';
import postEntryAction from '@/Posts/post-entry-action';
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
      {
        index: true,
        element: <PostList />,
        loader: postLoader,
        action: setPublishAction,
      },
      {
        path: ':postId',
        element: <PostEntry />,
        loader: postEntryLoader,
        action: postEntryAction,
      },
      //      { path: 'new', component: <NewPost /> },
    ],
  },
  {
    path: '/logout',
    action: logoutAction,
  },
];


export default routes;
