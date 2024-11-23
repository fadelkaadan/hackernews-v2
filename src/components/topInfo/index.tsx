import Image from "next/image";
import { getTimeAgo } from "@/utils/time";
import Link from "next/link";

interface Props {
  author: string;
  time: number;
  score?: number;
}

const TopInfo: React.FC<Props> = ({ author, time, score }) => {
  return (
    <div className="flex gap-3 mb-2">
      <div className="no-underline flex text-xs items-center gap-1">
        <Image
          className="dark:invert"
          src={"/user.svg"}
          alt="User icon"
          width={15}
          height={15}
          priority
        />
        <Link href={`/user/${author}`}>{author}</Link>
      </div>
      <div className="flex text-xs items-center gap-1">
        <Image
          className="dark:invert"
          src={"/clock.svg"}
          alt="Clock icon"
          width={15}
          height={15}
          priority
        />
        {getTimeAgo(time)}
      </div>
      <div className="flex text-xs items-center gap-1">
        <Image
          className="dark:invert"
          src={"/arrowUp.svg"}
          alt="Score icon"
          width={15}
          height={15}
          priority
        />
        {score}
      </div>
    </div>
  );
};

export default TopInfo;
