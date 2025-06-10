import type { LoadingSpinnerProps } from "./LoadingSpinner.types";

const LoadingSpinner = ({
  message = "Loading...",
  color = "primary",
}: LoadingSpinnerProps) => {
  const ringColor = `${color}`;
  const spinnerColor = `${color}`;
  const dotColor = `${color}`;
  const iconColor = `${color}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative">
        {/* Outer ring */}
        <div
          className={`w-24 h-24 border-4 border-${ringColor} rounded-full`}
        ></div>

        {/* Animated spinner */}
        <div
          className={`absolute top-0 left-0 w-24 h-24 border-4 border-t-${spinnerColor} border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin`}
        ></div>

        {/* Icon in center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            className={`w-10 h-10 text-${iconColor}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
      </div>

      {/* Loading message */}
      <div className="mt-6 text-center">
        <p className="text-lg font-medium text-gray-700 mb-2">{message}</p>
        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 bg-${dotColor} rounded-full animate-bounce`}
              style={{ animationDelay: `${i * 0.15}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
