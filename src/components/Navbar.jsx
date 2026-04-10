import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#missao', label: 'Missão' },
    { href: '#tripulacao', label: 'Tripulação' },
    { href: '#timeline', label: 'Linha do Tempo' },
    { href: '#tecnologia', label: 'Tecnologia' },
    { href: '#galeria', label: 'Fotos' },
    { href: '#marcos', label: 'Marcos' },
  ]

  const scrollTo = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-brand">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Artemis_II_patch.svg/400px-Artemis_II_patch.svg.png"
          alt="Artemis II patch"
          className="navbar-patch"
        />
        Artemis II
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a onClick={() => scrollTo(l.href)} href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
