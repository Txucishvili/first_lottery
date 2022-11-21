import React, { useEffect, useRef, useState } from "react"

export const useClient = () => {
  const [rendered, setRendered] = useState(false)

  useEffect(() => {
    setRendered(true);
    return () => {
      setRendered(false);
    }
  }, []);


  return {
    isClient: rendered
  }
}

export const useScroll = () => {
  const [scrollSize, setScrollSize] = useState(null);

  useEffect(() => {
    function handleScroll(e) {
      setScrollSize(e);
      const value = (document.body.getBoundingClientRect()).top < scrollSize;
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll(null);

    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  return {
    scroll: scrollSize
  }
}


