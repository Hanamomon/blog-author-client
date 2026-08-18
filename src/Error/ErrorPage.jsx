import { useRouteError, isRouteErrorResponse } from 'react-router';

function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error:</h1>
        <p>{error.message}</p>
      </div>
    );
  } else {
    return <h1>Unexpected Error</h1>;
  }
}

export default ErrorPage;
