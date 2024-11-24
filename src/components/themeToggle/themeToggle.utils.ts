type Theme = {
  name: string;
  className: string;
  buttonColor: string;
};

export const themes: readonly Theme[] = [
  {
    name: "Dark",
    className: "theme-dark",
    buttonColor: "bg-[#000]",
  },
  {
    name: "Light",
    className: "theme-light",
    buttonColor: "bg-[#d1d1d1]",
  },
  {
    name: "Night",
    className: "theme-night",
    buttonColor: "bg-[#1e3a8a]",
  },
] as const;

export type ThemeName = (typeof themes)[number]["name"];
