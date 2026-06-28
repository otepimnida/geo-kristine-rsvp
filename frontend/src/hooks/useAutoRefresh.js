import { useEffect, useRef } from "react";

function useAutoRefresh(callback, delay = 15000) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay) return;

    const interval = setInterval(() => {
      callbackRef.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
}

export default useAutoRefresh;
