import { cn } from "../lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: Props) => (
  <article
    className={cn("flex p-4 flex-col gap-4 border rounded-xl", className)}
  >
    {children}
  </article>
);

const Title = ({ children, className }: Props) => (
  <h2 className={cn("text-2xl font-semibold", className)}>{children}</h2>
);

const Body = ({ children, className }: Props) => (
  <p className={className}>{children}</p>
);

const Footer = ({ children, className }: Props) => (
  <div className={className}>{children}</div>
);

export const Card = Object.assign(Wrapper, { Title, Body, Footer });
