import { IStory } from "@/shared/types";
import Content from "../content";

interface Props {
  data: IStory;
}

const Card: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full flex rounded-lg shadow-lg animate-fadeIn">
      <div
        className="min-w-4
            h-auto bg-gradient-to-r from-pink-500 to-blue-600
            bg-[length:400%_400%] animate-gradient border-tl-lg border-bl-lg rounded-l-lg"
      ></div>
      <Content data={data} />
    </div>
  );
};

export default Card;
