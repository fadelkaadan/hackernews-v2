import { IStory } from "@/shared/types";
import Link from "../link";
// import TopInfo from "./TopInfo";

type Props = {
  data: IStory;
};

const Content: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full p-2 flex flex-col justify-around items-start break-words">
      {/* <TopInfo author={data.by} time={data.time} score={data.score} /> */}
      <div className="text-main-text-primary">
        <a
          href={data.url}
          className="text-main-text-primary text-lg no-underline visited:text-main-text-disabled mb-0"
        >
          {data.title}
        </a>
        <Link src={data.url} />
      </div>
    </div>
  );
};

export default Content;
