import { IStory } from "@/shared/types";
import Link from "../link";
import TopInfo from "../topInfo";

type Props = {
  data: IStory;
};

const Content: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full p-4 flex flex-col justify-around items-start rounded-r-lg break-words text-textPrimary bg-cardBackground">
      <TopInfo author={data.by} time={data.time} score={data.score} />
      <div className="text-main-text-primary flex flex-col gap-1">
        <a
          href={data.url}
          className="text-main-text-primary text-lg no-underline visited:text-textDisabled mb-0 pl-0.5"
        >
          {data.title}
        </a>
        <Link src={data.url} />
      </div>
    </div>
  );
};

export default Content;
