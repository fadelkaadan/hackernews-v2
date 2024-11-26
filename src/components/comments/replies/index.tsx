"use client";

import { useState } from "react";
import Comments from "../";
import CommentsButton from "../commentButton";

interface Props {
  data: number[];
}

const Replies = ({ data }: Props) => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  return (
    <>
      <CommentsButton
        comments={data}
        isOpen={isCommentsOpen}
        onClick={() => setIsCommentsOpen((prev) => !prev)}
        label={data && data.length === 1 ? "reply" : "replies"}
      />
      {isCommentsOpen ? <Comments commentIds={data} /> : null}
    </>
  );
};

export default Replies;
