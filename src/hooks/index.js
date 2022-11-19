import React, { useEffect, useRef, useState } from "react"

export const useClient = () => {
  const [rendered, setRendered] = useState(false)

  useEffect(() => {
    setRendered(true);
    return () => {
      console.log('[Render ]')
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
      console.log('value', value)
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll(null);

    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  return {
    scroll: scrollSize
  }
}


