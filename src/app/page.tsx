import Card from "../components/card";
import { fetchStories } from "../lib/api";

export default async function Page() {
  const stories = await fetchStories();

  return (
    <div className="flex justify-center min-h-screen bg-main-background p-10">
      <ul>
        {stories.map((story) => (
          <Card key={story.id} data={story} />
          // <li key={story.id}>
          //   <a href={story.url} target="_blank" rel="noopener noreferrer">
          //     {story.title}
          //   </a>
          //   <p>
          //     By: {story.by} | Score: {story.score} | Comments:{" "}
          //     {story.descendants}
          //   </p>
          // </li>
        ))}
      </ul>
    </div>
  );
}
