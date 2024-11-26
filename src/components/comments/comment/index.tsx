import TopInfo from "@/components/topInfo";
import { IComment } from "@/shared/types";
import CommentContent from "../commentContent";

interface Props {
  comment: IComment;
}

const Comment: React.FC<Props> = ({
  comment: { id, text, kids, by, time },
}) => {
  return text ? (
    <div className="border-l pl-3 pt-4">
      <TopInfo author={by} time={time} />
      <CommentContent text={text} />
    </div>
  ) : null;
};

export default Comment;
