import ThemeToggle from "../themeToggle";

const Header = () => {
  return (
    <div className="flex justify-center items-center h-16 bg-cardBackground mb-8">
      <ThemeToggle />
    </div>
  );
};

export default Header;
