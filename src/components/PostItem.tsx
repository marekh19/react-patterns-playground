import { Card } from "./Card";

export type PostItemProps = {
  id: number;
  title: string;
  body: string;
};

export const PostItem = ({ title, body }: PostItemProps) => {
  return (
    <Card>
      <Card.Title className="line-clamp-1">{title}</Card.Title>
      <Card.Body className="line-clamp-3">{body}</Card.Body>
    </Card>
  );
};
