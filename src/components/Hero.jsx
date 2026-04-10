import { useEffect, useRef } from 'react'

export default function Hero() {
  const starsRef = useRef(null)

  useEffect(() => {
    const canvas = starsRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.005 + 0.001,
    }))

    let animId
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach(s => {
        s.alpha += s.speed
        if (s.alpha > 1 || s.alpha < 0) s.speed *= -1
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section className="hero">
      <canvas ref={starsRef} className="stars-canvas" />
      <div className="hero-content">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Artemis_II_patch.svg/400px-Artemis_II_patch.svg.png"
          alt="Artemis II mission patch"
          className="hero-patch"
        />
        <div className="hero-badge">NASA · 1 de Abril de 2026</div>
        <h1 className="hero-title">
          <span className="hero-title-small">Missão</span>
          ARTEMIS II
        </h1>
        <p className="hero-subtitle">
          O retorno da humanidade à Lua — a maior aventura desde Apollo 17
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">10</span>
            <span className="stat-label">Dias de Missão</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">4</span>
            <span className="stat-label">Astronautas</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">400.000 km</span>
            <span className="stat-label">Distância da Terra</span>
          </div>
        </div>
        <a
          className="hero-btn"
          href="#missao"
          onClick={e => {
            e.preventDefault()
            document.querySelector('#missao')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Explorar Missão
        </a>
      </div>
      <div className="hero-moon" />
    </section>
  )
}
