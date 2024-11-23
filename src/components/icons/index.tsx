import Image from "next/image";

interface Props {
  name: ICON;
  size?: {
    width: number;
    height: number;
  };
}

export enum ICON {
  ARROW_UP = "arrowUp",
  CHECK_CIRCLE = "checkCircle",
  CLOCK = "clock",
  COPY = "copy",
  USER = "user",
  ROCKET = "rocket",
}

export const Icon: React.FC<Props> = ({
  name,
  size = { width: 15, height: 15 },
}) => {
  return (
    <Image
      className="dark:invert"
      src={`/${name}.svg`}
      alt={`${name} icon`}
      width={size.width}
      height={size.height}
      priority
    />
  );
};
