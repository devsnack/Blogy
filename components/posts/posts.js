import style from "./posts-grid.module.css";
import Post from "./post";

export default function Posts({ posts }) {
  return (
    <div>
      <ul className={style.grid}>
        {posts.map((p) => (
          <li>
            <Post post={p}></Post>
          </li>
        ))}
      </ul>
    </div>
  );
}
