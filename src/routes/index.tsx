import { createFileRoute } from "@tanstack/react-router";
import { PostList } from "../components/PostList";
import { compose } from "../lib/utils";
import {
  withNoDataFeedback,
  withLoadingFeedback,
  withErrorFeedback,
} from "../components/withQueryState";
import { usePosts } from "../hooks/usePosts";

export const Route = createFileRoute("/")({
  component: PostsPage,
});

const enhance = compose(
  // withLoadingFeedback(),
  // withErrorFeedback(),
  // withNoDataFeedback(),
  withLoadingFeedback(
    <div className="rounded-xl dark:bg-gray-700 bg-gray-200 animate-pulse w-full h-96" />,
  ),
  withErrorFeedback((error) => (
    <p className="text-red-400 font-semibold ">
      {error instanceof Error ? error.message : "Not able to fetch posts."}
    </p>
  )),
  withNoDataFeedback(
    <p className="text-lg font-medium underline">
      No posts yet. Try to add some.
    </p>,
  ),
);

const EnhancedPostList = enhance(PostList);

function PostsPage() {
  const queryResult = usePosts();

  return (
    <main className="px-10">
      <section className="mt-6">
        <h1 className="text-3xl font-bold mb-10">Posts</h1>
        <EnhancedPostList {...queryResult} />
      </section>
    </main>
  );
}
