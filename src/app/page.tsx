import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { ClientIntro } from "@/app/_components/client-intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { WaitlistSignup } from "@/app/_components/waitlist-signup";
import { FeaturedVideo } from "@/app/_components/featured-video";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);
  return (
    <main>
      <Container>
        <ClientIntro />
        <WaitlistSignup />
        <FeaturedVideo />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
