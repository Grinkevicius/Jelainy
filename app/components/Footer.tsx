import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-heading text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <Link
            href="/"
            className="text-xl font-serif font-bold text-white"
          >
            Jelainy
          </Link>

          {/* Links */}
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-white transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} Jelainy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
