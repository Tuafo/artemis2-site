export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">🌙 ARTEMIS II</div>
            <p>Site multimídia educacional sobre a missão Artemis II da NASA — o retorno da humanidade à Lua.</p>
          </div>
          <div className="footer-links">
            <h4>Fontes e Referências</h4>
            <ul>
              <li><a href="https://www.nasa.gov/artemis" target="_blank" rel="noreferrer">NASA — Programa Artemis</a></li>
              <li><a href="https://www.nasa.gov/feature/our-artemis-crew" target="_blank" rel="noreferrer">NASA — Nossa Tripulação Artemis</a></li>
              <li><a href="https://artemistracker.io" target="_blank" rel="noreferrer">Artemis II Live Tracker</a></li>
              <li><a href="https://www.space.com" target="_blank" rel="noreferrer">Space.com — Cobertura da Missão</a></li>
              <li><a href="https://spaceflightnow.com" target="_blank" rel="noreferrer">Spaceflight Now</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Conteúdo produzido para fins acadêmicos — Estudo Dirigido 01 · Sistemas Multimídia · 2026
          </p>
          <p>Imagens e informações: NASA / ESA / Agência Espacial Canadense (domínio público)</p>
        </div>
      </div>
    </footer>
  )
}
