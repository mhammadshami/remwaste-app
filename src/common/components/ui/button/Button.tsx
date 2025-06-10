import clsx from "clsx";
import type { ButtonProps } from "../../../types/types";
import { forwardRef } from "react";


const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      onClick,
      variant = "primary",
      size = "md",
      isSelected = false,
      disabled = false,
      className = "",
      type = "button",
      fullWidth = false,
      isLoading = false,
      icon,
      iconPosition = "left",
    },
    ref
  ) => {
    const baseClasses = clsx(
      "font-semibold rounded-lg transition-all duration-300 focus:outline-none",
      "focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50",
      "disabled:opacity-60 disabled:cursor-not-allowed",
      "active:scale-[0.98] transform-gpu", // Subtle press effect
      "flex items-center justify-center gap-2", // For icon support
      fullWidth && "w-full",
      {
        // Sizes
        "px-3 py-1.5 text-sm": size === "sm",
        "px-4 py-2.5 text-md": size === "md",
        "px-6 py-3 text-lg": size === "lg",
      }
    );

    const variantClasses = clsx({
      // Primary
      "bg-secondary text-white shadow-md hover:shadow-lg hover:from-[#0c1a40] hover:to-[#223264]":
        variant === "primary" && !isSelected,
      "bg-gradient-to-r from-[#1a2a56] to-[#3a4a7a] text-white shadow-lg ring-2 ring-offset-1 ring-blue-300":
        variant === "primary" && isSelected,

      // Secondary
      "bg-white text-gray-800 border border-gray-200 shadow-sm hover:bg-gray-50 hover:shadow":
        variant === "secondary" && !isSelected,
      "bg-gray-100 text-gray-900 border border-gray-300 shadow-inner ring-1 ring-gray-200":
        variant === "secondary" && isSelected,
    });

    const loadingClasses = clsx({
      "cursor-wait": isLoading,
    });

    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled || isLoading}
        className={clsx(
          baseClasses,
          variantClasses,
          loadingClasses,
          className
        )}
        aria-busy={isLoading}
      >
        {isLoading ? (
          <>
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
            <span>Loading...</span>
          </>
        ) : (
          <>
            {icon && iconPosition === "left" && (
              <span className="text-inherit">{icon}</span>
            )}
            {children}
            {icon && iconPosition === "right" && (
              <span className="text-inherit">{icon}</span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;