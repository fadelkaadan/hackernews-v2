import { ChevronUpIcon } from "@heroicons/react/16/solid";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";

interface CommentsProps {
  comments: number[];
  isOpen?: boolean;
  onClick: () => void;
  label: string;
  // icon?: ReactElement;
}

const CommentsButton: React.FC<CommentsProps> = ({
  comments,
  isOpen,
  onClick,
  label,
}) => {
  const getCommentsCount = () => (comments ? comments.length : 0);
  const isDisabled = getCommentsCount() === 0;

  return (
    <button
      onClick={isDisabled ? undefined : onClick}
      className={`${
        isDisabled
          ? "text-textDisabled border-textDisabled"
          : "text-gray-300 border-gray-300 hover:text-white hover:border-white"
      }
        flex bg-transparent items-center justify-center gap-1 border border-textPrimary
        text-textPrimary rounded-md py-1 pl-1.5 pr-2 outline-none text-nowrap w-auto text-xs mt-2`}
    >
      {isOpen ? (
        <ChevronUpIcon className="size-4" />
      ) : (
        <ChatBubbleOvalLeftIcon className="size-4" />
      )}
      {isOpen ? "hide" : `${getCommentsCount()} ${label}`}
    </button>
  );
};

export default CommentsButton;
