import { type Author } from "@/interfaces/author";
import Link from "next/link";
import React from "react";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {  return (
    <div 
      style={{ 
        viewTransitionName: `post-preview-${slug}`,
        '--preview-delay': `${Math.abs(slug.length % 3) * 0.1}s`
      } as React.CSSProperties}
    >
      <div className="mb-5">
        <CoverImage 
          slug={slug} 
          title={title} 
          src={coverImage}
          style={{ viewTransitionName: `hero-image-${slug}` }}
        />
      </div>      <h3 className="text-3xl mb-3 leading-snug" style={{ viewTransitionName: `post-title-${slug}` }}>
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
