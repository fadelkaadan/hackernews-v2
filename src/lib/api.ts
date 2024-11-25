export async function fetchStories(limit: number = 10) {
  const TOP_STORIES_URL =
    "https://hacker-news.firebaseio.com/v0/topstories.json";
  const STORY_URL = "https://hacker-news.firebaseio.com/v0/item";

  const idsResponse = await fetch(TOP_STORIES_URL, { cache: "no-store" });
  const storyIds: number[] = await idsResponse.json();

  return Promise.all(
    storyIds.slice(0, limit).map(async (id) => {
      const storyResponse = await fetch(`${STORY_URL}/${id}.json`);
      return storyResponse.json();
    })
  );
}
