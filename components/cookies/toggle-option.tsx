import React from "react";

interface ToggleOptionProps {
  title: string;
  isEnabled: boolean;
  onToggle: (value: boolean) => void;
  handleRedirectFunc: () => void;
  disabled?: boolean;
}

const ToggleOption: React.FC<ToggleOptionProps> = ({
  title,
  isEnabled,
  onToggle,
  handleRedirectFunc,
  disabled = false,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-xs">
          <h3 className="font-nexaheavy text-white">{title}</h3>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label={isEnabled ? `Disable ${title}` : `Enable ${title}`}
            className={`h-4 w-9 rounded-full px-1 ${
              isEnabled ? "bg-green" : "bg-primary"
            } ${disabled ? "pointer-events-none opacity-50" : ""}`}
            onClick={() => !disabled && onToggle(!isEnabled)}
          >
            <span
              className={`block size-3 rounded-full bg-primary-light transition-transform ${
                isEnabled ? "translate-x-4" : ""
              }`}
            />
          </button>
          <button
            type="button"
            aria-label={`More information about ${title}`}
            onClick={handleRedirectFunc}
            className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-dark text-xs text-white transition-all duration-300 hover:bg-primary"
          >
            <span className="mt-[2px]">i</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToggleOption;
