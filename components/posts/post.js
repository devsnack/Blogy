import style from "./post-item.module.css";
import Image from "next/image";
import Link from "next/link";
import Posts from "./posts";

export default function Post({ post }) {
  return (
    <li className={style.post}>
      <Link href={"/posts/" + post.slug}>
        <a>
          <div className={style.image}>
            <Image src={post.image} height={300} width={500}></Image>
          </div>
          <div className={style.content}>
            <h3>jak aissa</h3>
            <time>07/03/2000</time>
            <p>jaka iassa la banda 1</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
