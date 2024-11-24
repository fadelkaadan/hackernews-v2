"use client";

import copy from "copy-to-clipboard";
import { useState } from "react";
import { Icon } from "../icon";

interface Props {
  src: string;
}

const Link: React.FC<Props> = ({ src }) => {
  const [, setIcon] = useState("copy");
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
        <Icon
          name={isCopying ? "checkCircle" : "copy"}
          color={isCopying ? "[#83ad6c]" : "textPrimary"}
        />
        {isCopying ? "copied" : getHostname(src)}
      </button>
    </div>
  );
};

export default Link;
