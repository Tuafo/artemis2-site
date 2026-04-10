const milestones = [
  {
    title: 'Primeira mulher além da órbita terrestre',
    person: 'Christina Koch',
    description:
      'Christina Koch se tornou a primeira mulher a viajar além da órbita baixa da Terra, quebrando uma barreira de 60 anos na exploração espacial humana.',
  },
  {
    title: 'Primeiro astronauta negro em missão lunar',
    person: 'Victor Glover',
    description:
      'Victor Glover faz história como o primeiro astronauta negro a participar de uma missão lunar, um marco de representatividade para a NASA e para o mundo.',
  },
  {
    title: 'Primeiro canadense além da órbita terrestre',
    person: 'Jeremy Hansen',
    description:
      'Jeremy Hansen é o primeiro cidadão não-americano a viajar para além da órbita terrestre baixa, reafirmando o caráter internacional do programa Artemis.',
  },
  {
    title: 'Humanos mais longe da Terra desde 1972',
    person: 'Toda a tripulação',
    description:
      'Os 4 astronautas chegaram a mais de 400.000 km da Terra — o ponto mais distante percorrido por humanos desde a missão Apollo 17, em dezembro de 1972.',
  },
  {
    title: 'Retorno ao espaço profundo',
    person: 'Programa Artemis / NASA',
    description:
      'Pela primeira vez em mais de 50 anos, humanos deixaram a órbita terrestre e viajaram em direção à Lua, abrindo caminho para um pouso lunar previsto na Artemis III.',
  },
]

export default function Milestones() {
  return (
    <section id="marcos" className="section milestones-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Marcos Históricos</span>
          <h2>Feitos Inéditos da Artemis II</h2>
          <p>Uma missão cheia de primeiras vezes que entram para os livros de história.</p>
        </div>
        <div className="milestones-grid">
          {milestones.map(m => (
            <div key={m.title} className="milestone-card">
              <h3>{m.title}</h3>
              <span className="milestone-person">{m.person}</span>
              <p>{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
