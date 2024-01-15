import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-zinc-400 p-4">
      <ul className="flex justify-evenly text-xl font-bold">
        <li>
          <Link href="/">홈으로</Link>
        </li>
        <li>
          <Link href="/st/st1">1 페이지</Link>
        </li>
        <li>
          <Link href="/st/st2">2 페이지</Link>
        </li>
        <li>
          <Link href="/st/st3">3 페이지</Link>
        </li>
        <li>
          <Link href="/st/st3">4 페이지</Link>
        </li>
        <li>
          <Link href="/st/st4">5 페이지</Link>
        </li>
      </ul>
    </nav>
  );
}
