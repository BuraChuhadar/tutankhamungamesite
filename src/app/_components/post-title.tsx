import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  slug?: string;
};

export function PostTitle({ children, slug }: Props) {
  return (
    <h1
      className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left dark:text-[#f5e9d6] text-gray-800"
      style={{ 
        color: "#6b4f1d",
        viewTransitionName: slug ? `page-title-${slug}` : 'page-title'
      }}
    >
      {children}
    </h1>
  );
}
