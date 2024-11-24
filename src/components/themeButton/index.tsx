interface Props {
  theme: string;
  onClick: () => void;
}

const ThemeButton: React.FC<Props> = ({ theme, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${
          theme === "theme-dark"
            ? "bg-black"
            : theme === "theme-night"
            ? "bg-blue-900"
            : "bg-white"
        } rounded-md w-10 h-10 hover:opacity-70 animate-fadeIn`}
    ></button>
  );
};

export default ThemeButton;
