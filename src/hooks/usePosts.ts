import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import { todoKeys } from "../lib/queryKeys";
import { api } from "../lib/api";
import { mockPosts } from "../mocks/posts";

const DELAY = 1000; // ms
const postSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

const getPosts = async () => {
  const response = await api.get("posts");
  const json = await response.json();
  return postSchema.array().parse(json);
};

const getMockPosts = async () => {
  await new Promise((resolve) => setTimeout(resolve, DELAY));
  return [];
  // throw new Error("Tady neco chciplo");
  // return mockPosts;
};

export const usePosts = () => {
  return useQuery({
    queryKey: todoKeys.lists(),
    queryFn: getMockPosts,
    retry: false,
  });
};
