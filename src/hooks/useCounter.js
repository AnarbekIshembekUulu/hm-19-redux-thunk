import { useState } from "react";

export const useCounter = (initialState) => {
  const [count, setCount] = useState(initialState || 0);

  const incrementHandler = () => {
    setCount((prevS) => prevS + 1);
  };

  const decrementHandler = () => {
    setCount((prevS) => {
      if (prevS > initialState) {
        return prevS - 1;
      }

      return prevS;
    });
  };

  return {
    count,
    incrementHandler,
    decrementHandler,
  };
};
