import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
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
    </section>
  );
}
