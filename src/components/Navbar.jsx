import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Beranda", href: "#beranda" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Produk", href: "#produk" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Kontak", href: "#kontak" },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
        : "bg-transparent"
    }`}>

      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#beranda" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-[#7A9D54] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm" style={{ fontFamily: "Manrope" }}>K</span>
          </div>
          <span className="text-[#0F172A] font-semibold text-lg tracking-tight" style={{ fontFamily: "Manrope" }}>
            Kalam <span className="text-[#7A9D54]">Supplies</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#475569] hover:text-[#0F172A] text-sm font-medium transition-colors duration-200"
              style={{ fontFamily: "Inter" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontak"
            className="bg-[#0F172A] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#1E293B] transition-colors duration-200"
            style={{ fontFamily: "Inter" }}
          >
            Hubungi Kami
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-[#0F172A] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#0F172A] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#0F172A] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

      </div>{/* ← tutup max-w-6xl div */}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#475569] hover:text-[#0F172A] py-2.5 text-sm font-medium border-b border-slate-50 last:border-0 transition-colors"
              style={{ fontFamily: "Inter" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontak"
            className="mt-3 bg-[#0F172A] text-white text-sm font-medium px-5 py-3 rounded-full text-center hover:bg-[#1E293B] transition-colors"
            style={{ fontFamily: "Inter" }}
          >
            Hubungi Kami
          </a>
        </div>
      )}

    </nav>
  )
}