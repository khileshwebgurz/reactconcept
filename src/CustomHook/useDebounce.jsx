import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timer to update debouncedValue after delay
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function: clear the timer if value or delay changes before delay finishes
    return () => clearTimeout(timer);
  }, [value, delay]); // Re-run this effect whenever 'value' or 'delay' changes

  // Return the debounced value
  return debouncedValue;
}

export default useDebounce;
