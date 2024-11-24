"use client";

import { useState } from "react";
import ThemeButton from "../themeButton";
import { SparklesIcon } from "@heroicons/react/16/solid";

export default function ThemeToggle() {
  const [showToggles, setShowToggles] = useState(false);

  const changeTheme = (theme: string) => {
    setDefaultTheme();
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
    setShowToggles(false);
  };

  const setDefaultTheme = () => {
    document.documentElement.classList.remove(
      "theme-dark",
      "theme-light",
      "theme-night"
    );
    localStorage.setItem("theme", "");
  };

  return (
    <div>
      {showToggles ? (
        <div className="flex gap-2">
          <ThemeButton
            onClick={() => changeTheme("theme-night")}
            theme="theme-night"
          />
          <ThemeButton
            onClick={() => changeTheme("theme-dark")}
            theme="theme-dark"
          />
          <ThemeButton
            onClick={() => changeTheme("theme-light")}
            theme="theme-light"
          />
        </div>
      ) : (
        <button onClick={() => setShowToggles(true)}>
          <SparklesIcon className="size-8 text-primaryText  animate-fadeIn" />
        </button>
      )}
    </div>
  );
}
