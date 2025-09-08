export const LoadingSpinner = ({
  size = "medium",
  className = "",
}: {
  size?: "small" | "medium" | "large";
  className?: string;
}) => {
  const sizeClasses = {
    small: "h-4 w-4 border-2",
    medium: "h-5 w-5 border-2",
    large: "h-8 w-8 border-3",
  };

  return (
    <div
      className={`rounded-full border-b-transparent border-current animate-spin ${sizeClasses[size]} ${className}`}
      role="status"
      aria-label="Loading"
    />
  );
};
