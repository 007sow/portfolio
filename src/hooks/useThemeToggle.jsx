import { useState } from "react";
import ThemeOverlay from "../components/layout/ThemeOverlay";

export function useThemeToggle() {
  const [overlay, setOverlay] = useState(null);

  const toggle = (e) => {
    const html = document.documentElement;
    const nextIsDark = !html.classList.contains("dark");

    // spawn overlay from click/toggle centre
    const rect = e.currentTarget.getBoundingClientRect();
    const origin = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };

    setOverlay(
      <ThemeOverlay
        nextIsDark={nextIsDark}
        origin={origin}
        onComplete={() => {
          html.classList.toggle("dark", nextIsDark);
          setOverlay(null);
        }}
      />
    );
  };

  return { overlay, toggle };
} 