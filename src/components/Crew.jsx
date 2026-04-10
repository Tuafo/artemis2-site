const crew = [
  {
    name: 'Reid Wiseman',
    role: 'Comandante',
    agency: 'NASA',
    flag: '🇺🇸',
    photo: 'https://www.nasa.gov/wp-content/uploads/2023/06/jsc2023e0016434-alt.jpg?w=768',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Artemis_2_Crew_Portrait.jpg',
    bio: 'Piloto naval veterano, Wiseman já passou 165 dias na ISS. Serviu como Chefe do Escritório de Astronautas da NASA antes de ser selecionado para comandar a Artemis II.',
    highlight: 'Comandante da Artemis II',
  },
  {
    name: 'Victor Glover',
    role: 'Piloto',
    agency: 'NASA',
    flag: '🇺🇸',
    photo: 'https://www.nasa.gov/wp-content/uploads/2023/06/jsc2023e0016433-alt.jpg?w=768',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Artemis_2_Crew_Portrait.jpg',
    bio: 'Aviador naval com mais de 3.000 horas de voo em mais de 40 aeronaves. Já participou das Expedições 64/65 da ISS, passando quase 6 meses em órbita.',
    highlight: '1º astronauta negro a viajar à Lua',
  },
  {
    name: 'Christina Koch',
    role: 'Especialista de Missão',
    agency: 'NASA',
    flag: '🇺🇸',
    photo: 'https://www.nasa.gov/wp-content/uploads/2023/06/jsc2023e0016435-alt.jpg?w=768',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Artemis_2_Crew_Portrait.jpg',
    bio: 'Detentora do recorde de maior tempo contínuo no espaço por uma mulher — 328 dias. Realizou 6 caminhadas espaciais, incluindo a primeira caminhada exclusivamente feminina.',
    highlight: '1ª mulher a viajar além da órbita terrestre',
  },
  {
    name: 'Jeremy Hansen',
    role: 'Especialista de Missão',
    agency: 'Agência Espacial Canadense',
    flag: '🇨🇦',
    photo: 'https://www.nasa.gov/wp-content/uploads/2023/06/jsc2023e0016436-alt.jpg?w=768',
    fallback: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Artemis_2_Crew_Portrait.jpg',
    bio: 'Coronel da Força Aérea Real Canadense e astronauta experiente. É o primeiro canadense a viajar além da órbita baixa da Terra em toda a história.',
    highlight: '1º canadense a viajar à Lua',
  },
]

export default function Crew() {
  return (
    <section id="tripulacao" className="section crew-section">
      <div className="container">
        <div className="section-header dark">
          <span className="section-tag">Tripulação</span>
          <h2>Os Quatro Astronautas</h2>
          <p>
            Uma equipe histórica que representa diversidade, excelência e coragem para levar
            a humanidade de volta à Lua.
          </p>
        </div>
        <div className="crew-grid">
          {crew.map(member => (
            <div key={member.name} className="crew-card">
              <div className="crew-photo-wrap">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="crew-photo"
                  onError={e => {
                    e.target.src = member.fallback
                    e.target.onerror = () => {
                      e.target.style.display = 'none'
                      e.target.parentNode.classList.add('no-photo')
                    }
                  }}
                />
                <div className="crew-agency-badge">{member.flag} {member.agency}</div>
              </div>
              <div className="crew-info">
                <h3>{member.name}</h3>
                <span className="crew-role">{member.role}</span>
                <p className="crew-bio">{member.bio}</p>
                <div className="crew-highlight">{member.highlight}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
