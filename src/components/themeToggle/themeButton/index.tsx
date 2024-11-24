"use client";

import { ThemeName } from "../themeToggle.utils";

interface Props {
  color: ThemeName;
  onClick: () => void;
}

const ThemeButton: React.FC<Props> = ({ color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${color} rounded-md w-10 h-10 hover:opacity-40 animate-fadeIn`}
    ></button>
  );
};

export default ThemeButton;
