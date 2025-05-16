import { useEffect } from "react";
import { throttle } from "../../utils/throttle";

const ScrollThrottle = () => {
  useEffect(() => {

    
    const handleScroll = throttle(() => {
      console.log("Scroll position:", window.scrollY);
    }, 500); // run at most once every 500ms

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "200vh", padding: "2rem" }}>
      <h1>Scroll down the page</h1>
      <p>Check the console for throttled scroll output.</p>
    </div>
  );
};

export default ScrollThrottle;
