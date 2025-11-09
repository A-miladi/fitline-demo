import { useState, useRef } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import { DropdownOption } from "@/types";

interface CustomDropdownProps {
  options: DropdownOption[];
  value: string;
  onSelect: (option: DropdownOption) => void;
  placeholder: string;
  className?: string;
  disabled?: boolean;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onSelect,
  placeholder,
  className = "",
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  const handleSelect = (option: DropdownOption) => {
    onSelect(option);
    setIsOpen(false);
  };

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || placeholder;

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent text-right flex justify-between items-center transition-all duration-300 ${
          disabled
            ? "bg-gray-100 cursor-not-allowed"
            : "bg-white hover:border-gray-400"
        } ${isOpen ? "ring-1 ring-primary/50" : ""}`}
      >
        <span className={`${!value ? "text-gray-500" : "text-gray-800"}`}>
          {selectedLabel}
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1">
          <div
            className={`
            bg-white border px-2 py-1 border-gray-200 rounded-lg shadow-lg 
            max-h-64 overflow-y-auto
            transform origin-top
            transition-all duration-300 ease-out
            ${
              isOpen
                ? "opacity-100 scale-y-100 translate-y-0"
                : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
            }
          `}
          >
            {options.map((option, index) => (
              <div>
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`
                w-full rounded-xl px-4 py-2 my-1 text-right 
                hover:bg-primary/10 transition-all duration-200 ease-out
                transform
               
                ${
                  value === option.value
                    ? "bg-gradient-to-br from-primary to-secondary text-white font-medium"
                    : "text-gray-700"
                }
                ${
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-2"
                }
              `}
                  style={{
                    transitionDelay: isOpen ? `${index * 30}ms` : "0ms",
                  }}
                >
                  {option.label}
                </button>
                {index < options.length - 1 && (
                  <div className="w-full h-[1px] bg-neutral-100" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
