export default function Mission() {
  const cards = [
    {
      title: 'Primeiro voo tripulado',
      text: 'A Artemis II é o primeiro voo tripulado do programa Artemis, testando a espaçonave Orion com humanos a bordo pela primeira vez.',
    },
    {
      title: 'Sobrevoo lunar',
      text: 'A tripulação realizou um sobrevoo próximo à Lua, chegando a cerca de 10.000 km da superfície lunar — o ponto mais distante da Terra percorrido por humanos desde 1972.',
    },
    {
      title: 'Teste de sistemas',
      text: 'A missão valida sistemas críticos: propulsão, suporte de vida, comunicações e o escudo térmico do Orion para futuras missões de pouso na Lua.',
    },
    {
      title: 'Retorno histórico',
      text: 'Após 50 anos, a humanidade volta a viajar além da órbita baixa da Terra. O splashdown ocorreu em 10 de abril de 2026 no Pacífico.',
    },
  ]

  return (
    <section id="missao" className="section mission-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Sobre a Missão</span>
          <h2>O que é a Artemis II?</h2>
          <p>
            O programa Artemis da NASA tem como objetivo retornar humanos à Lua de forma sustentável.
            A Artemis II é a segunda missão do programa e a primeira com tripulação, servindo como prova
            essencial antes dos pousos lunares previstos nas missões seguintes.
          </p>
        </div>
        <div className="cards-grid">
          {cards.map(c => (
            <div key={c.title} className="mission-card">
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
        <div className="mission-image-block">
          <div className="mission-image-wrap">
            <img
              src="https://images-assets.nasa.gov/image/KSC-20230920-PH-FMX01_0467/KSC-20230920-PH-FMX01_0467~large.jpg?w=1920&h=1280&fit=clip&crop=faces%2Cfocalpoint"
              alt="Tripulação da Artemis II"
              className="mission-img"
              onError={e => { e.target.style.display = 'none' }}
            />
          </div>
          <div className="mission-text-block">
            <h3>A Rota da Missão</h3>
            <p>
              Após o lançamento do Kennedy Space Center na Flórida, o foguete SLS colocou a
              cápsula Orion em órbita terrestre. Depois de verificar todos os sistemas, a tripulação
              realizou a queima de injeção trans-lunar (TLI), iniciando a viagem à Lua.
            </p>
            <p>
              O sobrevoo lunar aconteceu por volta do 4º dia de missão. A trajetória em "figura oito"
              usa a gravidade lunar para catapultar o Orion de volta à Terra — sem precisar de um
              motor potente para o retorno.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
