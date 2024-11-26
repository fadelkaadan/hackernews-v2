import { IComment, IStory } from "@/shared/types";

const BASE_URL = "https://hacker-news.firebaseio.com/v0/";
const TOP_STORIES_ENDPOINT = BASE_URL + "topstories.json";
const ITEM_ENDPOINT = BASE_URL + "item";

export const fetchStories = async (limit: number = 10): Promise<IStory[]> => {
  const idsResponse = await fetch(TOP_STORIES_ENDPOINT, { cache: "no-store" });
  const storyIds: number[] = await idsResponse.json();

  return Promise.all(
    storyIds.slice(0, limit).map(async (id) => {
      const storyResponse = await fetch(`${ITEM_ENDPOINT}/${id}.json`);
      return storyResponse.json();
    })
  );
};

export const fetchComments = async (
  commentIds: number[]
): Promise<IComment[]> => {
  return Promise.all(
    commentIds.map(async (id) => {
      const storyResponse = await fetch(`${ITEM_ENDPOINT}/${id}.json`);
      return storyResponse.json();
    })
  );
};
