import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Dev Portafolio
        </Link>
        <ul className="flex gap-6">

          <li>
            <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
              About
            </Link>
          </li>

          <li>
            <Link href="/blog" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
              Blog
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
              Contact
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}
