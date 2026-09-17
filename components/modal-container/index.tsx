import React, { useEffect, useRef, useCallback } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { ModalPortal } from "./modal-portal";
import { cn } from "@/lib/utils";

interface Props {
  children?: React.ReactNode;
  modalId: string;
  isOpen: boolean;
  onClose: () => void;
  shouldCloseOnOverlayClick?: boolean;
  shouldCloseOnEsc?: boolean;
  modalClassName?: string;
  modalContentClassName?: string;
}

const ModalContainer: React.FC<Props> = ({
  modalId,
  isOpen,
  onClose,
  children,
  shouldCloseOnOverlayClick = true,
  shouldCloseOnEsc = true,
  modalClassName,
  modalContentClassName,
}) => {
  const modalContentRef = useRef<HTMLDivElement>(null);
  const previousFocusedElement = useRef<HTMLElement | null>(null);

  // Handle Escape key to close the modal
  useEffect(() => {
    if (!isOpen || !shouldCloseOnEsc) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose, shouldCloseOnEsc]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    const htmlBody = document.body;

    if (isOpen) {
      previousFocusedElement.current = document.activeElement as HTMLElement;
      htmlBody.style.position = "fixed";
      htmlBody.style.width = "100%";
      modalContentRef.current?.focus();
    } else {
      htmlBody.style.position = "";
      previousFocusedElement.current?.focus();
    }

    return () => {
      htmlBody.style.position = "";
    };
  }, [isOpen]);

  // Close on outside click
  useOnClickOutside(modalContentRef as React.RefObject<HTMLElement>, () => {
    if (shouldCloseOnOverlayClick) {
      onClose();
    }
  });

  // Trap focus inside the modal
  const trapFocus = useCallback((event: KeyboardEvent) => {
    const focusableElements = modalContentRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements?.[0];
    const lastElement = focusableElements?.[focusableElements.length - 1];

    if (event.key === "Tab") {
      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", trapFocus);
    return () => document.removeEventListener("keydown", trapFocus);
  }, [isOpen, trapFocus]);

  if (!isOpen) return null;

  return (
    <ModalPortal wrapperId={modalId}>
      <div
        className={cn(
          "fixed inset-0 z-[2000] flex items-center justify-center bg-primary/80 outline-none backdrop-blur-[5.5px] backdrop-filter",
          modalClassName
        )}
      >
        <div
          ref={modalContentRef}
          className={cn(
            "relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-xl bg-primary-light py-5 lg:py-6",
            modalContentClassName
          )}
          tabIndex={-1} // Allow the modal to receive focus
        >
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};

export default ModalContainer;
