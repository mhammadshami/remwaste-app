import { type ErrorInfo, type ReactNode } from "react";

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode | ((props: FallbackProps) => ReactNode);
}

export interface FallbackProps {
  error?: Error;
  errorInfo?: ErrorInfo;
  reset: () => void;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isSelected?: boolean;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  isLoading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export interface Step {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface StepperProps {
  steps?: Step[];
  className?: string;
}
