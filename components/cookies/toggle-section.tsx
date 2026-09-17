"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ToggleSection = ({
  title,
  description,
  disabled = false,
  children,
  toggleSwitch = true,
  isOpen: isOpenProp = false, // Accept external `isOpen` prop for syncing state
  onToggleChange = () => {}, // Trigger external state change
}: any) => {
  const [isOpen, setIsOpen] = useState(isOpenProp); // Local open state
  const [isEnabled, setIsEnabled] = useState(true); // Manage switch state
  const sectionRef = useRef<HTMLDivElement>(null);

  // Sync `isOpen` state with external prop changes
  useEffect(() => {
    setIsOpen(isOpenProp);
  }, [isOpenProp]);

  const handleToggle = () => {
    const newOpenState = !isOpen;
    setIsOpen(newOpenState);
    onToggleChange(newOpenState); // Notify parent about toggle state change
  };

  return (
    <div ref={sectionRef} className="mb-4 rounded-lg border border-primary-dark py-3">
      <div className="flex flex-col items-start justify-between gap-3 px-5 sm:flex-row sm:items-center">
        <div className="text-xs">
          <h3 className="font-nexaheavy text-white">{title}</h3>
          <p className="text-yellow">{description}</p>
        </div>

        <div className="flex items-center gap-4 maxmobile:self-end">
          {toggleSwitch && (
            <button
              type="button"
              aria-label={isEnabled ? `Disable ${title}` : `Enable ${title}`}
              className={`h-4 w-9 rounded-full px-1 ${
                isEnabled ? "bg-green" : "bg-primary"
              } ${disabled ? "pointer-events-none opacity-50" : ""}`}
              onClick={() => setIsEnabled(!isEnabled)}
            >
              <span
                className={`block size-3 rounded-full bg-primary-light transition-transform ${
                  isEnabled ? "translate-x-4" : ""
                }`}
              />
            </button>
          )}

          <button
            type="button"
            aria-label={isOpen ? `Collapse ${title}` : `Expand ${title}`}
            className="flex size-11 items-center justify-center"
            onClick={handleToggle}
          >
            {isOpen ? <ChevronUp aria-hidden size={20} /> : <ChevronDown aria-hidden size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 flex flex-col gap-4 border-t border-primary-dark px-5 pt-3 text-white">{children}</div>
      )}
    </div>
  );
};

export default ToggleSection;
