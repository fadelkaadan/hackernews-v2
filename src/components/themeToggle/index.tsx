"use client";

import { themes } from "./themeToggle.utils";
import { useState } from "react";
import ThemeButton from "./themeButton";
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
    themes.forEach(({ className }) => {
      document.documentElement.classList.remove(className);
    });
    localStorage.setItem("theme", "");
  };

  return (
    <div>
      {showToggles ? (
        <div className="flex gap-2">
          {themes.map((theme) => (
            <ThemeButton
              key={theme.name}
              onClick={() => changeTheme(theme.className)}
              color={theme.buttonColor}
            />
          ))}
        </div>
      ) : (
        <button onClick={() => setShowToggles(true)}>
          <SparklesIcon className="size-8 text-primaryText  animate-fadeIn" />
        </button>
      )}
    </div>
  );
}
