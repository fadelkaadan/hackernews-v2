import Card from "../components/card";
import { fetchStories } from "../lib/api";

export default async function Page() {
  const stories = await fetchStories();

  return (
    <div className="flex justify-center min-h-screen bg-main-background p-10">
      <ul>
        {stories.map((story) => (
          <Card key={story.id} data={story} />
        ))}
      </ul>
    </div>
  );
}
