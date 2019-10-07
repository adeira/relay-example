// @flow strict

import { useEffect, useRef } from 'react';

type Callback = () => void;

// See: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export default function useInterval(callback: Callback, delay: number | null) {
  const savedCallback = useRef<Callback>(() => {});

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return () => {};
  }, [delay]);
}
