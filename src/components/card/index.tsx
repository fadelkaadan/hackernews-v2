import { IStory } from "@/shared/types";
import Content from "../content";

type Props = {
  data: IStory;
};

const Card = ({ data }: Props) => {
  return (
    <div className="w-full mb-10 flex rounded-md text-[#e7e7e7] bg-cards-background shadow-lg animate-fadeIn">
      <div
        className="min-w-4
            h-auto bg-gradient-to-r from-pink-500 to-blue-600
            bg-[length:400%_400%] animate-gradient border-tl-lg border-bl-lg rounded-l-md"
      ></div>
      <Content data={data} />
    </div>
  );
};

export default Card;
