import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { HOME_OG_IMAGE_URL, SITE_URL } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }
  const content = await markdownToHtml(post.content || "");
  const baseUrl = SITE_URL.replace(/\/$/, "");
  const canonicalUrl = `${baseUrl}/posts/${post.slug}`;
  const imageUrl = post.coverImage
    ? post.coverImage.startsWith("http")
      ? post.coverImage
      : `${baseUrl}${post.coverImage}`
    : undefined;
  const publisherLogo = HOME_OG_IMAGE_URL?.startsWith("http")
    ? HOME_OG_IMAGE_URL
    : `${baseUrl}${HOME_OG_IMAGE_URL}`;
  const publishedTime = new Date(post.date).toISOString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
  image: imageUrl ? [imageUrl] : undefined,
    datePublished: publishedTime,
    dateModified: publishedTime,
    author: post.author?.name
      ? {
          "@type": "Person",
          name: post.author.name,
        }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: "Tutankhamun Game Studio",
      logo: {
        "@type": "ImageObject",
        url: publisherLogo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <div className="min-h-screen bg-[#f9f6f2] dark:bg-[#1f1a14] pt-8">
      <Container>
        <div className="w-full bg-white/80 dark:bg-[#1f1a14]/80 rounded-lg shadow-lg p-8 relative z-10">
          <Header />
          <article className="mb-32">
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <Script
              id={`post-jsonld-${post.slug}`}
              type="application/ld+json"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PostBody content={content} />
          </article>
        </div>
      </Container>
    </div>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }
  const title = `${post.title} | Tutankhamun: Builders of the Eternal Dev Blog`;
  const baseUrl = SITE_URL.replace(/\/$/, "");
  const canonicalUrl = `${baseUrl}/posts/${post.slug}`;
  const imageUrl = post.ogImage?.url
    ? post.ogImage.url.startsWith("http")
      ? post.ogImage.url
      : `${baseUrl}${post.ogImage.url}`
    : undefined;
  const publishedTime = new Date(post.date).toISOString();
  const description = post.excerpt;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: canonicalUrl,
      siteName: "Tutankhamun: Builders of the Eternal",
      images: imageUrl
        ? [
            {
              url: imageUrl,
              alt: post.title,
            },
          ]
        : undefined,
      publishedTime,
      authors: post.author?.name ? [post.author.name] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
    authors: post.author?.name ? [{ name: post.author.name }] : undefined,
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
