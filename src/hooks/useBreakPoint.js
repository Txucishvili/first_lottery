import React, { useEffect, useState } from 'react'
import { VARIABLES } from 'src/utils';

const getBP = (width) => {
  return VARIABLES.bps.find((bp) => width <= bp.value) 
  ? VARIABLES.bps.find((bp) => width <= bp.value) 
  : VARIABLES.bps.find((bp) => bp.value == Math.max(...VARIABLES.bps.map((bp) => bp.value)));
  // for (const key in VARIABLES.bp) {
  //   if (Object.hasOwnProperty.call(VARIABLES.bp, key)) {
  //     if (width <= VARIABLES.bp[key]) {
  //       return key
  //     } else {
  //       return 
  //     }
  //   }
  // }
}

export default function useBreakPoint() {
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        bp: getBP(window.innerWidth).key  
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return {
    width: windowSize.width,
    height: windowSize.height,
    bp: windowSize.bp
  };
}
