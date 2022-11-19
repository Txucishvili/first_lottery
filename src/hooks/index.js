import React, { useEffect, useState } from "react"

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
      console.log('---', e.scrollElement)
      setScrollSize(e);
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll(null);

    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  return {
    scroll: scrollSize 
  }
}

