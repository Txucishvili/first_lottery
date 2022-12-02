import {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";


export function useOutsideClick(initialIsVisible = false, customEvent) {
  const [isOpen, setIsOpen] = useState(
    initialIsVisible
  );
  const [event, setLastEvent] = useState(null);

  const ref = createRef();

  const handleHideDropdown = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
      setLastEvent(event);
    }
  };

  const handleClickOutside = useCallback((event) => {
    if (!isOpen) {
      return;
    }
    if (customEvent) {
      customEvent(event);
      return;
    }
    if (ref && ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
      setLastEvent(event);
    }
  }, [isOpen, customEvent, ref]);

  // !!
  useEffect(() => {
    if (!isOpen) {
      document.addEventListener("keydown", handleHideDropdown, true);
      document.addEventListener("click", handleClickOutside, true);
    } else {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleClickOutside, isOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return {
    ref,
    isOpen,
    setIsOpen,
    event
  };
}