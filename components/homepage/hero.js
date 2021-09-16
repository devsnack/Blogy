import style from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.image}>
        <Image src="/images/site/max.png" width={300} height={300} />
      </div>

      <div>
        <h1>Hi, I am KitDev</h1>
        <p>I blog about web development</p>
      </div>
    </section>
  );
}
