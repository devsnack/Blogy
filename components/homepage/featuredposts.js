import Posts from "../posts/posts";
import style from "./featured-posts.module.css";

export default function FeaturedPosts({ posts }) {
  return (
    <section className={style.latest}>
      <h2>Featured Posts</h2>
      <Posts posts={posts}></Posts>
    </section>
  );
}
