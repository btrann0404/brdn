import Link from 'next/link'

export default function Header() {
  return (
    <header className="relative fixed border-b border-white/10 bg-[#161616]/80 backdrop-blur-sm">
      <nav className="flex w-full items-center justify-between px-8 py-5">
        <Link 
          href="/" 
          className="text-md font-medium text-white transition-opacity hover:opacity-70"
        >
          Brandon Tran
        </Link>

        <div className="flex items-center gap-8">
          <Link 
            href="/about" 
            className="text-sm text-gray-500 transition-colors hover:text-white"
          >
            about
          </Link>
          <Link 
            href="/work" 
            className="text-sm text-gray-500 transition-colors hover:text-white"
          >
            work
          </Link>
          <Link 
            href="/projects" 
            className="text-sm text-gray-500 transition-colors hover:text-white"
          >
            projects
          </Link>
          <Link 
            href="/contact" 
            className="text-sm text-gray-500 transition-colors hover:text-white"
          >
            contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
