import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { StoredInfoItem } from "./cookies-model";

interface StoredInformationToggleProps {
  title: string;
  data: StoredInfoItem[];
}

const StoredInformationToggle: React.FC<StoredInformationToggleProps> = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="flex cursor-pointer items-center justify-between rounded-md bg-primary-light p-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h6 className="font-nexaheavy text-sm text-white">{title}</h6>
        {isOpen ? <ChevronUp className="text-white" size={20} aria-hidden /> : <ChevronDown className="text-white" size={20} aria-hidden />}
      </div>

      {isOpen && (
        <div className="mt-4 flex flex-col gap-4">
          <p className="text-xs text-white">
            This service uses different means of storing information on a user&apos;s device as listed below.
          </p>
          <div className="flex flex-col overflow-hidden rounded-lg border border-primary-dark">
            {data.map((item) => (
              <div key={item.name} className="border-b border-primary-dark p-4">
                <h6 className="font-nexaheavy text-yellow">{item.name}</h6>
                {item.description && <p className="text-xs text-white">{item.description}</p>}
                <p className="text-xs text-white">
                  <strong>Type:</strong> {item.type}
                </p>
                {item.duration && (
                  <p className="text-xs text-white">
                    <strong>Duration:</strong> {item.duration}
                  </p>
                )}

                {item.domain && (
                  <p className="text-xs text-white">
                    <strong>Domain:</strong> {item.domain}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StoredInformationToggle;
