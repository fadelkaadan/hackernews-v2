import { getTimeAgo } from "@/utils/time";
import Link from "next/link";
import {
  ArrowUpCircleIcon,
  ClockIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

interface Props {
  author: string;
  time: number;
  score?: number;
}

const TopInfo: React.FC<Props> = ({ author, time, score }) => {
  return (
    <div className="flex gap-3 mb-2">
      <div className="no-underline flex text-xs items-center gap-1">
        <UserCircleIcon className="size-4 text-primaryText" />
        <Link href={`/user/${author}`}>{author}</Link>
      </div>
      <div className="flex text-xs items-center gap-1">
        <ClockIcon className="size-4 text-primaryText" />
        {getTimeAgo(time)}
      </div>
      {score ? (
        <div className="flex text-xs items-center gap-1">
          <ArrowUpCircleIcon className="size-4 text-primaryText" />
          {score}
        </div>
      ) : null}
    </div>
  );
};

export default TopInfo;
