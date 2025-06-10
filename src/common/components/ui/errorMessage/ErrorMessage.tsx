import React from "react";
import { FiAlertTriangle, FiRefreshCw } from "react-icons/fi";
import clsx from "clsx";
import type { ErrorMessageProps } from "./ErrorMessage.types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  onRetry,
  className = "",
  retryButtonText = "Try Again",
}) => {
  return (
    <div
      className={clsx(
        "max-w-md p-6 rounded-lg border border-red-200 bg-red-50",
        "text-center flex flex-col items-center",
        className
      )}
      role="alert"
    >
      <FiAlertTriangle className="w-10 h-10 text-red-500 mb-4" />
      <h3 className="text-lg font-medium text-red-800 mb-2">
        Something went wrong
      </h3>
      <p className="text-red-600 mb-4">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className={clsx(
            "inline-flex items-center px-4 py-2 border border-transparent",
            "rounded-md shadow-sm text-sm font-medium text-white",
            "bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2",
            "focus:ring-offset-2 focus:ring-red-500 transition-colors"
          )}
        >
          <FiRefreshCw className="mr-2" />
          {retryButtonText}
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
