// import TopInfo from "./TopInfo";
// import Link from "./Link";
import { IStory } from "@/shared/types";

type Props = {
  data: IStory;
};

export default function Content({ data }: Props) {
  return (
    <div className="w-full p-2 flex flex-col justify-around items-start break-words">
      {/* <TopInfo author={data.by} time={data.time} score={data.score} /> */}
      <div className="text-main-text-primary">
        <a
          href={data.url}
          className="text-main-text-primary text-lg no-underline visited:text-main-text-disabled"
        >
          {data.title}
        </a>
        {/* <Link src={data.url} /> */}
      </div>
    </div>
  );
}
