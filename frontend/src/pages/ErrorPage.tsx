import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const isRouteError = isRouteErrorResponse(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{isRouteError ? error.statusText : "Sorry..."}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
