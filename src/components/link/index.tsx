"use client";

import copy from "copy-to-clipboard";
import { Icon, IconName } from "../icons";
import { useState } from "react";

interface Props {
  src: string;
}

const Link: React.FC<Props> = ({ src }) => {
  const [icon, setIcon] = useState(IconName.Copy);

  const addToClipboard = () => {
    copy(src);
    setIcon(IconName.CheckCircle);
    setTimeout(() => {
      setIcon(IconName.Copy);
    }, 1500);
  };

  const getHostname = (url: string) => {
    const hostname = new URL(url).hostname.replace("www.", "");
    return hostname;
  };

  return (
    <div className="cursor-pointer">
      <button
        onClick={addToClipboard}
        className={`flex items-center gap-1 text-xs 
                ${
                  icon === IconName.Copy
                    ? "text-main-text-secondary"
                    : "text-[#83ad6c]"
                } 
                after:${
                  icon === IconName.Copy ? "bg-[#785bf7]" : "bg-[#83ad6c]"
                } 
                bg-transparent border-none cursor-pointer relative focus:outline-none
                hover:after:w-full after:content-[''] after:block after:h-[2px] 
                after:w-0 after:absolute after:bottom-0 after:left-0 
                after:transition-width after:duration-200 pb-1`}
      >
        <Icon name={icon} />
        {icon === IconName.Copy ? getHostname(src) : "Copied"}
      </button>
    </div>
  );
};

export default Link;
