import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/api";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const baseUrl = SITE_URL.replace(/\/$/, "");
  const latestDate = posts[0]?.date ?? new Date().toISOString();

  const postEntries = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.date,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: latestDate,
    },
    ...postEntries,
  ];
}
