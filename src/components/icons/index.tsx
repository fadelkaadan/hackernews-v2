import { cloneElement } from "react";
import CopyIcon from "/next.svg";
import Image from "next/image";

interface Props {
  name: string;
  size?: number;
}



export const Icon: React.FC<Props> = ({ name, size = 18 }) => {
//   const icon = icons.get(name);

//   if (!icon) return null;

  return (
    <Image
      className="dark:invert"
      src={name}
      alt="Next.js logo"
      width={size}
      height={size}
      priority
    />
  );
};
