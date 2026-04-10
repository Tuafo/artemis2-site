const events = [
  {
    date: '1 de Abril de 2026',
    time: '18:35 EDT',
    title: 'Lançamento',
    description:
      'O foguete SLS decola do Kennedy Space Center na Flórida carregando a cápsula Orion com os 4 astronautas. Um dos lançamentos mais esperados da história da exploração espacial.',
    status: 'done',
  },
  {
    date: '1 de Abril de 2026',
    time: '~19h30 EDT',
    title: 'Separação e Órbita Terrestre',
    description:
      'O núcleo do SLS separa após 8 minutos. O Orion entra em órbita baixa da Terra para verificação completa de todos os sistemas de navegação, propulsão e suporte de vida.',
    status: 'done',
  },
  {
    date: '2 de Abril de 2026',
    time: 'Dia 2',
    title: 'Injeção Trans-Lunar (TLI)',
    description:
      'Após verificar todos os sistemas, o motor do Orion executa a queima TLI, acelerando a espaçonave em direção à Lua. A tripulação começa sua jornada de ~4 dias até a Lua.',
    status: 'done',
  },
  {
    date: '5 de Abril de 2026',
    time: 'Dia 5',
    title: 'Sobrevoo Lunar',
    description:
      'O Orion realiza um sobrevoo da Lua a cerca de 10.000 km de altitude. A tripulação fotografa a superfície lunar e observa a Terra surgir do horizonte lunar — uma vista jamais vista desde Apollo.',
    status: 'done',
  },
  {
    date: '5–9 de Abril de 2026',
    time: 'Dias 5 a 9',
    title: 'Retorno à Terra',
    description:
      'Usando a gravidade lunar como catapulta (trajetória de retorno livre), o Orion navega de volta à Terra. A tripulação realiza observações científicas, exercícios e transmissões ao vivo.',
    status: 'done',
  },
  {
    date: '10 de Abril de 2026',
    time: 'Dia 10',
    title: 'Amerissagem no Pacífico',
    description:
      'A cápsula Orion separa o módulo de serviço e reentrada a atmosfera a mais de 11 km/s. Os paraquedas abrem e o Orion "Integrity" pousa no Oceano Pacífico, concluindo a missão histórica.',
    status: 'done',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="section timeline-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Cronograma</span>
          <h2>Linha do Tempo da Missão</h2>
          <p>Do lançamento ao amerissagem — 10 dias que mudaram a história da exploração espacial.</p>
        </div>
        <div className="timeline">
          {events.map((ev, i) => (
            <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-connector">
                <div className={`timeline-dot ${ev.status}`}>{i + 1}</div>
              </div>
              <div className="timeline-card">
                <div className="timeline-date">{ev.date} · {ev.time}</div>
                <h3>{ev.title}</h3>
                <p>{ev.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
