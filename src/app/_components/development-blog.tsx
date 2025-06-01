import { getAllPosts } from "@/lib/api";
import Link from "next/link";

export function DevelopmentBlog() {
  const posts = getAllPosts();

  return (
    <section className="py-5 bg-[#f9f6f2] dark:bg-[#18120a] border border-[#e6e1d5] dark:border-[#40362b] rounded-xl shadow-md mx-4">
      <style jsx global>{`
        body {
          background-color: #f9f6f2;
        }
        .dark body {
          background-color: #18120a;
        }
      `}</style>
      <h2 className="text-[#2d1c00] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3">
        Development Blog
      </h2>
      <div className="flex flex-col gap-4 px-4">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="bg-white dark:bg-[#231a10] border border-[#e6e1d5] dark:border-[#40362b] rounded-lg p-4 shadow-sm transition-colors"          >
            <h3 className="text-[#2d1c00] dark:text-white text-lg font-bold leading-tight mb-2">
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="text-[#6b4f1d] dark:text-[#beae9d] text-sm font-normal leading-normal">
              By {post.author.name} on{" "}
              {typeof window !== "undefined"
                ? new Date(post.date).toLocaleDateString()
                : ""}
            </p>
            <p className="text-[#3d2b00] dark:text-white text-sm font-normal leading-normal">
              {post.excerpt}
            </p>
            <div className="mt-2">              <Link
                href={`/posts/${post.slug}`}
                className="text-[#c2881b] dark:text-[#d4a574] hover:text-[#8b6914] dark:hover:text-[#c2881b] underline transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
