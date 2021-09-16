import ReactMarkdown from "react-markdown";
import style from "./post-content.module.css";
import Image from "next/image";
import PostHeader from "./post-header";

export default function PostContent() {
  return (
    <section className={style.content}>
      <PostHeader></PostHeader>
      <div className={style.image}>
        <Image
          src={
            "/images/posts/getting-started-with-nextjs/getting-started-nextjs.png"
          }
          width={200}
          height={200}
        ></Image>
      </div>
    </section>
  );
}
