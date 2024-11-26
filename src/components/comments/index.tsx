import { fetchComments } from "@/lib/api";
import { IComment } from "@/shared/types";
import { useEffect, useState } from "react";
import Comment from "./comment";
import LoadingIndicator from "../loadingIndicator";

interface Props {
  commentIds: number[];
}

const Comments: React.FC<Props> = ({ commentIds }) => {
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    async function getComments() {
      const response = await fetchComments(commentIds);
      setComments(response);
    }
    getComments();
  }, [commentIds]);

  return (
    <div>
      {comments.length > 0 ? (
        <div className="mt-5">
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      ) : (
        <LoadingIndicator />
      )}
    </div>
  );
};

export default Comments;
