// @ts-nocheck

"use client";

import React from "react";
import Image from "next/image";
import { CookiesModal } from "./cookies-model";

const CookiesManagement: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <div
        id="cookies"
        className="fixed bottom-5 right-5 z-50 flex size-16 items-center justify-center sm:bottom-10 sm:right-10 sm:size-24"
      >
        <button type="button" aria-label="Open cookie settings" onClick={() => setOpen(true)}>
          <Image
            src="/assets/icons/cookie-icon.svg"
            width={96}
            height={96}
            alt=""
            aria-hidden
            className="shrink-0 object-contain"
          />
        </button>
      </div>

      <CookiesModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};

export default CookiesManagement;
