export interface ErrorMessageProps {
    message: string;
    onRetry?: () => void;
    className?: string;
    retryButtonText?: string;
}