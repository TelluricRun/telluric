import { useState, useEffect } from 'react';

const useDebounce = (value: string, delay: number, debounceOnFirstClick?: boolean): string => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let handler: NodeJS.Timeout | null = null;

    if (debounceOnFirstClick) {
      // Debounce on the first click
      handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
    } else {
      // Debounce on the last click
      handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
    }

    return () => {
      if (handler) clearTimeout(handler);
    };
  }, [value, delay, debounceOnFirstClick]);

  return debouncedValue;
};

export default useDebounce;
