import { PostItem, type PostItemProps } from "./PostItem";

type Props = {
  data?: PostItemProps[];
};

export const PostList = ({ data }: Props) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
      {data?.map((post) => <PostItem key={post.id} {...post} />)}
    </div>
  );
};
