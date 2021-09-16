import style from "./logo.module.css";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className={style.logo}>KitDev</div>
    </Link>
  );
}
