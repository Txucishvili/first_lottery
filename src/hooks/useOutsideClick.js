import { useEffect, useRef, useState } from "react";

export function useOutsideClick(initialIsVisible, customEvent) {
  const [isOpen, setIsOpen] = useState(
    initialIsVisible
  );
  const [event, setLastEvent] = useState(null);

  const ref = useRef(null);

  const handleHideDropdown = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
      setLastEvent(event);
    }
  };

  const handleClickOutside = event => {
    if (customEvent) {
      customEvent(event);
      return;
    }
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
      setLastEvent(event);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isOpen, setIsOpen, event };
}