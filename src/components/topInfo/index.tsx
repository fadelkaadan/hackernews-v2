import { getTimeAgo } from "@/utils/time";
import Link from "next/link";
import { Icon } from "../icon";

interface Props {
  author: string;
  time: number;
  score?: number;
}

const TopInfo: React.FC<Props> = ({ author, time, score }) => {
  return (
    <div className="flex gap-3 mb-2">
      <div className="no-underline flex text-xs items-center gap-1">
        <Icon name="user" />
        <Link href={`/user/${author}`}>{author}</Link>
      </div>
      <div className="flex text-xs items-center gap-1">
        <Icon name="clock" />
        {getTimeAgo(time)}
      </div>
      <div className="flex text-xs items-center gap-1">
        <Icon name="arrowUp" />
        {score}
      </div>
    </div>
  );
};

export default TopInfo;
