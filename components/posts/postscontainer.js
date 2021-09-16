import Posts from "./posts";
import style from "./all-posts.module.css";

export default function PostsContainer(props) {
  return (
    <section className={style.posts}>
      <h1>All posts</h1>
      <Posts posts={props.posts}></Posts>
    </section>
  );
}
