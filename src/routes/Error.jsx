import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export function ErrorBoundary() {
  let error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops!</h1>
        <h2>Error satus: {error.status}</h2>
        <p>{error.statusText}</p>
        {<p>{error.data?.message}</p> && <p>{error.data.message}</p>}
        <p>{error.error.message}</p>
        <div>
          <Link to="/">Go back to homepage</Link>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div>Dang!</div>
        <div>
          <Link to="/">Go back to homepage</Link>
        </div>
      </>
    );
  }
}
