"use client";

import copy from "copy-to-clipboard";
import { useState } from "react";
import Image from "next/image";

interface Props {
  src: string;
}

const Link: React.FC<Props> = ({ src }) => {
  const [icon, setIcon] = useState("copy");
  const [isCopying, setIsCopying] = useState(false);

  const addToClipboard = () => {
    copy(src);
    setIcon("checkCircle");
    setIsCopying(true);
    setTimeout(() => {
      setIcon("copy");
      setIsCopying(false);
    }, 1500);
  };

  const getHostname = (url: string) => {
    if (url) {
      return new URL(url).hostname.replace("www.", "");
    }
    return url;
  };

  return (
    <div className="cursor-pointer">
      <button
        onClick={addToClipboard}
        className={`flex items-center gap-1 text-sm 
            ${isCopying ? "text-[#83ad6c]" : "text-main-text-secondary"} 
            bg-transparent border-none cursor-pointer relative focus:outline-none
            ${
              !isCopying
                ? "hover:after:w-full after:content-[''] after:block after:h-[2px] after:bg-[#785bf7] after:w-0 after:absolute after:bottom-0 after:left-0 after:transition-width after:duration-200"
                : ""
            }
            pb-1`}
      >
        <Image
          className={`dark:invert`}
          src={`/${icon}.svg`}
          style={{ fill: isCopying ? "#fff" : "#83ad6c" }}
          alt="Check logo"
          width={15}
          height={15}
          priority
        />
        {isCopying ? "Copied" : getHostname(src)}
      </button>
    </div>
  );
};

export default Link;
