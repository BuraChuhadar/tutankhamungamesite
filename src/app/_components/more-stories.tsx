import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
  title?: string;
  collapsible?: boolean;
};

export function MoreStories({
  posts,
  title = "More Stories",
  collapsible = false,
}: Props) {
  const grid = (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  );

  if (posts.length === 0) {
    return null;
  }

  return (
    <section>
      {collapsible ? (
        <details className="mb-32">
          <summary className="cursor-pointer underline">
            {title} ({posts.length})
          </summary>
          <div className="mt-8">{grid}</div>
        </details>
      ) : (
        <>
          <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            {title}
          </h2>
          {grid}
        </>
      )}
    </section>
  );
}
