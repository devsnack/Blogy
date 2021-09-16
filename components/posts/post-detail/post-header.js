import React from "react";
import ReactMarkdown from "react-markdown";
import style from "./post-header.module.css";

import Image from "next/image";

export default function PostHeader() {
  return (
    <section className={style.header}>
      <h1>Getting Started with NextJS</h1>
      <Image
        src={
          "/images/posts/getting-started-with-nextjs/getting-started-nextjs.png"
        }
        width={150}
        height={100}
      ></Image>
    </section>
  );
}
