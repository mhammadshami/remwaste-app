import Button from "../button/Button";

const ErrorFallbackComponent = () => (
  <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
    <h1 className="text-2xl font-bold text-red-600 mb-2">
      Something went wrong
    </h1>
    <p className="text-gray-700 mb-4">
      We're having trouble loading the application. Please try again later.
    </p>
    <Button variant="secondary" onClick={() => window.location.reload()}>
      Refresh Page
    </Button>
  </div>
);

export default ErrorFallbackComponent;
