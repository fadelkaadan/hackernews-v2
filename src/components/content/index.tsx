"use client";

import { IStory } from "@/shared/types";
import Link from "../link";
import TopInfo from "../topInfo";
import CommentsButton from "../comments/commentButton";
import { useState } from "react";
import Comments from "../comments";

type Props = {
  data: IStory;
};

const Content: React.FC<Props> = ({ data }) => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  return (
    <div className="w-full p-4 flex flex-col justify-around items-start rounded-r-lg break-words text-textPrimary bg-cardBackground">
      <TopInfo author={data.by} time={data.time} score={data.score} />
      <div className="text-main-text-primary flex flex-col gap-1 w-full">
        <a
          href={data.url}
          className="text-main-text-primary text-lg no-underline visited:text-secondary mb-0 pl-0.5"
        >
          {data.title}
        </a>
        <Link src={data.url} />
        <div>
          <CommentsButton
            comments={data.kids}
            isOpen={isCommentsOpen}
            onClick={() => setIsCommentsOpen((prev) => !prev)}
            label={data.kids && data.kids.length === 1 ? "comment" : "comments"}
            isComment
          />

          {isCommentsOpen ? <Comments commentIds={data.kids} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Content;
