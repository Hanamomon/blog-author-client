import { useRouteError } from 'react-router';

function ErrorPage() {
  const error = useRouteError();

  return (
    <main>
      <p>{error.error.message}</p>
    </main>
  );
}

export default ErrorPage;
