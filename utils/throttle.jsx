// utils/throttle.js

// the callback function and delay is being passed from ThrottleReact
export function throttle(callback, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      callback(...args);
    }
  };
}
