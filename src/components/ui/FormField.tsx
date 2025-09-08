interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoComplete?: string;
  error?: string;
  disabled?: boolean;
  onBlur?: () => void;
  inputMode?: "text" | "numeric" | "tel" | "email";
  maxLength?: number;
  autoFocus?: boolean;
}

export default function FormField({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  autoComplete,
  error,
  disabled,
  onBlur,
  inputMode,
  maxLength,
  autoFocus,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block pr-1 text-sm font-medium text-blue-100 font-iransans"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        inputMode={inputMode}
        maxLength={maxLength}
        autoFocus={autoFocus}
        className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm text-sm h-12 border rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 font-iransans ${
          error ? "border-red-700" : "border-white/20"
        }`}
      />
      {error && (
        <p className="text-red-500 text-xs pr-1 font-iransans">{error}</p>
      )}
    </div>
  );
}
