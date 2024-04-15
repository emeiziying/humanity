import { useCallback } from 'react';

let timestamp = 0;

export const useDelta = () => {
  const getDelta = useCallback(() => {
    const now = Date.now();

    // set initial timestamp
    if (!timestamp) timestamp = now;

    const delta = now - timestamp;
    timestamp = now;

    return delta;
  }, []);

  return getDelta;
};
