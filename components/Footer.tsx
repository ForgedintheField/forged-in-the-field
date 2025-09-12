export default function Footer() {
  return (
    <footer className="mt-20 border-t border-amber-900/20 py-10 text-sm">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Forged in the Field</p>
        <div className="flex items-center gap-4 opacity-80">
          <a href="/shop">Shop</a>
          <a href="/membership">Membership</a>
          <a href="/resources">Resources</a>
        </div>
      </div>
    </footer>
  )
}