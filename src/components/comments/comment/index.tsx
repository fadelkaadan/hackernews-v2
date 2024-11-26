import TopInfo from "@/components/topInfo";
import { IComment } from "@/shared/types";
import CommentContent from "../commentContent";

interface Props {
  comment: IComment;
}

const Comment: React.FC<Props> = ({ comment: { text, by, time } }) => {
  return text ? (
    <div className="border-l border-textPrimary pl-3 pt-4 animate-fadeIn">
      <TopInfo author={by} time={time} />
      <CommentContent text={text} />
    </div>
  ) : null;
};

export default Comment;
