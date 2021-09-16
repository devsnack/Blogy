import Link from "next/link";
import Logo from "./logo";
import HeaderStyle from "./main-navigation.module.css";

export default function Header() {
  return (
    <header className={HeaderStyle.header}>
      <Logo></Logo>
      <ul>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}
