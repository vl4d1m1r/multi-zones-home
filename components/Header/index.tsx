import Link from "next/link";

function Header() {
  return (
    <nav className="flex gap-6 items-center flex-wrap bg-teal-500 p-6">
      <Link href="/" className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        Home (from Home Page)
      </Link>
      <Link href="/blog" className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        Blog (from Home Page)
      </Link>
      <Link href="/about" className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        About (from Home Page)
      </Link>
    </nav>
  );
}

export default Header;