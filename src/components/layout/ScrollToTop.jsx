import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ScrollToTop resets the window scroll position to top on every navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null; // renders nothing
};

export default ScrollToTop; 