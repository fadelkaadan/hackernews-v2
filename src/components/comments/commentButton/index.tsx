import { ChevronUpIcon } from "@heroicons/react/16/solid";
import {
  ArrowUturnLeftIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/outline";

interface CommentsProps {
  comments: number[];
  isOpen?: boolean;
  onClick: () => void;
  label: string;
  isComment?: boolean;
}

const CommentsButton: React.FC<CommentsProps> = ({
  comments,
  isOpen,
  onClick,
  label,
  isComment,
}) => {
  const getCommentsCount = () => (comments ? comments.length : 0);
  const isDisabled = getCommentsCount() === 0;

  const Icon = isOpen
    ? ChevronUpIcon
    : isComment
    ? ChatBubbleOvalLeftIcon
    : ArrowUturnLeftIcon;

  return (
    <button
      onClick={isDisabled ? undefined : onClick}
      className={`${
        isDisabled
          ? "text-textDisabled border-textDisabled"
          : "text-textPrimary hover:text-textHover hover:border-textHover"
      }
        flex bg-transparent items-center justify-center gap-1 border border-textPrimary
        rounded-md py-1 pl-1.5 pr-2 outline-none text-nowrap w-auto text-xs mt-2`}
    >
      <Icon className="size-4" />
      {isOpen ? "hide" : `${getCommentsCount()} ${label}`}
    </button>
  );
};

export default CommentsButton;
