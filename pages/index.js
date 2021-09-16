import { Fragment } from "react";
import Hero from "../components/homepage/hero";
import FeaturedPosts from "../components/homepage/featuredposts";
import getFeaturedPosts from "../utils/posts_utils";

function HomePage({ posts }) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts}></FeaturedPosts>
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
export default HomePage;
