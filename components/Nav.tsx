import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  return (
    <header className="border-b border-amber-900/20 bg-earth-50">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" width={220} height={40} alt="Forged in the Field" />
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/programs">Programs</Link>
          <Link href="/exercise-library">Exercise Library</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/community">Community</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/membership" className="inline-block px-4 py-2 rounded bg-pine-600 text-white">Join</Link>
        </nav>
      </div>
    </header>
  )
}
