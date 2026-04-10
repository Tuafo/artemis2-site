const vehicles = [
  {
    name: 'Foguete SLS (Space Launch System)',
    image: 'https://www.nasa.gov/wp-content/uploads/2023/02/ksc-01172026-artemis-ii-rollout.jpg',
    specs: [
      { label: 'Altura', value: '98 metros (322 pés)' },
      { label: 'Empuxo no lançamento', value: '39 MN (8,8 milhões de lbf)' },
      { label: 'Motores principais', value: '4 × RS-25 + 2 boosters sólidos' },
      { label: 'Carga útil para TLI', value: '+27 toneladas' },
      { label: 'Versão usada', value: 'SLS Block 1 (Artemis II)' },
    ],
    description:
      'O SLS é o foguete mais poderoso já construído e lançado com sucesso. Substituindo o Saturn V de Apollo, ele é capaz de enviar a cápsula Orion e seus astronautas diretamente à Lua em uma única missão.',
  },
  {
    name: 'Cápsula Orion ("Integrity")',
    image: 'https://www.nasa.gov/wp-content/uploads/2023/02/image-1775074005231.jpg',
    specs: [
      { label: 'Diâmetro da cápsula', value: '5,02 metros' },
      { label: 'Capacidade', value: '4 astronautas' },
      { label: 'Volume habitável', value: '8,95 m³' },
      { label: 'Módulo de serviço', value: 'Europeu (ESA)' },
      { label: 'Duração máxima', value: '21 dias no espaço profundo' },
    ],
    description:
      'O Orion foi batizado de "Integrity" (Integridade) pela tripulação. A cápsula é projetada especificamente para voos de longa duração além da órbita terrestre, com sistema avançado de suporte de vida e escudo térmico capaz de suportar velocidades de reentrada a 11 km/s.',
  },
]

export default function Spacecraft() {
  return (
    <section id="tecnologia" className="section spacecraft-section">
      <div className="container">
        <div className="section-header dark">
          <span className="section-tag">Tecnologia</span>
          <h2>Foguete e Espaçonave</h2>
          <p>Os veículos que tornaram possível o retorno humano à Lua.</p>
        </div>
        <div className="spacecraft-list">
          {vehicles.map((v, i) => (
            <div key={v.name} className={`spacecraft-item ${i % 2 === 1 ? 'reverse' : ''}`}>
              <div className="spacecraft-img-wrap">
                <img
                  src={v.image}
                  alt={v.name}
                  className="spacecraft-img"
                  onError={e => { e.target.style.display = 'none' }}
                />
              </div>
              <div className="spacecraft-details">
                <h3>{v.name}</h3>
                <p>{v.description}</p>
                <table className="specs-table">
                  <tbody>
                    {v.specs.map(s => (
                      <tr key={s.label}>
                        <td className="spec-label">{s.label}</td>
                        <td className="spec-value">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
