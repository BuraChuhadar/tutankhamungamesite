import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  slug?: string;
};

export function PostHeader({ title, coverImage, date, author, slug }: Props) {
  return (
    <>
      <PostTitle slug={slug}>{title}</PostTitle>
      <DateFormatter dateString={date} />
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage 
          title={title} 
          src={coverImage}
          style={slug ? { viewTransitionName: `hero-image-${slug}` } : undefined}
        />
      </div>
    </>
  );
}
