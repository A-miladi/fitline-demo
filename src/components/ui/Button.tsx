import { LoadingSpinner } from "../spinner";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  variant?: "primary" | "outline";
}

export default function Button({
  children,
  onClick,
  type = "button",
  disabled,
  loading,
  className = "",
  variant = "primary",
}: ButtonProps) {
  const baseClasses =
    "w-full py-3 px-4 cursor-pointer font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed font-morabba";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white",
    outline: "bg-white/5 border border-white/20 hover:bg-white/10 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <LoadingSpinner className="ml-2" />
          در حال پردازش...
        </div>
      ) : (
        children
      )}
    </button>
  );
}
