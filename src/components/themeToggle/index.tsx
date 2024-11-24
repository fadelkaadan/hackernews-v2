"use client";

export default function ThemeToggle() {
  const changeTheme = (theme: string) => {
    setDefaultTheme();
    document.documentElement.classList.add(theme);
  };

  const setDefaultTheme = () => {
    document.documentElement.classList.remove("theme-dark", "theme-light");
  };

  return (
    <div>
      <button
        onClick={() => changeTheme("theme-dark")}
        className="p-2 border rounded"
      >
        Dark
      </button>
      <button onClick={() => setDefaultTheme()} className="p-2 border rounded">
        Night
      </button>
      <button
        onClick={() => changeTheme("theme-light")}
        className="p-2 border rounded"
      >
        Light
      </button>
    </div>
  );
}
