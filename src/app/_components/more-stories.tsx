import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  const visibleCount = 6;
  const recentPosts = posts.slice(0, visibleCount);
  const olderPosts = posts.slice(visibleCount);

  return (
    <section style={{ viewTransitionName: 'more-stories-section' }}>
      <h2 
        className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
        style={{ viewTransitionName: 'more-stories-title' }}
      >
        More Stories
      </h2>
      <div 
        className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32"
        style={{ viewTransitionName: 'stories-grid' }}
      >
        {recentPosts.map((post) => (
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

      {olderPosts.length > 0 ? (
        <details className="mb-32">
          <summary className="cursor-pointer underline">
            Show older posts ({olderPosts.length})
          </summary>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mt-8">
            {olderPosts.map((post) => (
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
        </details>
      ) : null}
    </section>
  );
}
