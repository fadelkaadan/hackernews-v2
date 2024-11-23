import Card from "../components/card";
import { fetchStories } from "../lib/api";

export default async function Page() {
  const stories = await fetchStories();

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-7 w-11/12 max-w-4xl">
        {stories.map((story) => (
          <Card key={story.id} data={story} />
        ))}
      </div>
    </div>
  );
}
