const photos = [
  {
    src: 'https://images-assets.nasa.gov/image/art002e008487/art002e008487~large.jpg?w=1920&h=1440&fit=clip&crop=faces%2Cfocalpoint',
    alt: 'Christina Koch olha pela janela do Orion enquanto a Terra flutua ao fundo',
    caption: 'Christina Koch na janela do Orion',
  },
  {
    src: 'https://images-assets.nasa.gov/image/art002e012278/art002e012278~large.jpg',
    alt: 'A Lua vista da janela da cápsula Orion',
    caption: 'A Lua vista pelo Orion',
  },
  {
    src: 'https://www.nasa.gov/wp-content/uploads/2026/03/suit-patch.jpg',
    alt: 'Patch da missão Artemis II no traje espacial',
    caption: 'Patch da missão no traje',
  },
  {
    src: 'https://images-assets.nasa.gov/image/art002e009292/art002e009292~large.jpg',
    alt: 'Jeremy Hansen fotografando durante o sobrevoo lunar',
    caption: 'Jeremy Hansen fotografando a Lua',
  },
  {
    src: 'https://images-assets.nasa.gov/image/art002e009288/art002e009288~large.jpg',
    alt: 'Earthset — a Terra se pondo, fotografado por Reid Wiseman',
    caption: '"Earthset" por Wiseman',
  },
  {
    src: 'https://images-assets.nasa.gov/image/art002e009294/art002e009294~large.jpg',
    alt: 'Tripulação se preparando para o sobrevoo lunar',
    caption: 'Tripulação durante o sobrevoo',
  },
  {
    src: 'https://images-assets.nasa.gov/image/art002e009272/art002e009272~large.jpg',
    alt: 'Jeremy Hansen na janela da cápsula Orion',
    caption: 'Jeremy Hansen na janela',
  },
  {
    src: 'https://images-assets.nasa.gov/image/art002e009206/art002e009206~large.jpg',
    alt: 'Christina Koch se exercitando no Orion no 4º dia de missão',
    caption: 'Koch — Dia 4',
  },
  {
    src: 'https://www.nasa.gov/wp-content/uploads/2023/02/artemisiicrewposterorig-notext-01.jpg',
    alt: 'Pôster oficial da tripulação Artemis II',
    caption: 'Pôster oficial da tripulação',
  },
  {
    src: 'https://images-assets.nasa.gov/image/art002e000193/art002e000193~large.jpg?w=1920&h=1280&fit=clip&crop=faces%2Cfocalpoint',
    alt: 'Artemis II captura uma foto do lado escuro da lua com aurora nos dois polos',
    caption: 'O lado escuro da Terra',
  },
]

export default function Gallery() {
  return (
    <section id="galeria" className="section gallery-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Registro</span>
          <h2>Fotos da Missão</h2>
          <p>Imagens oficiais da NASA registradas antes e durante a Artemis II.</p>
        </div>
        <div className="gallery-grid">
          {photos.map((p, i) => (
            <div key={i} className="gallery-item">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                onError={e => { e.target.style.display = 'none' }}
              />
              <p className="gallery-caption">{p.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
