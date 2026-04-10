# Artemis II — Site Multimídia

Site sobre a missão Artemis II da NASA, desenvolvido em React + Vite e publicado no GitHub Pages.

---

## Setup

**Pré-requisitos:** Node.js 18+ e npm instalados.

### Instalar dependências

```bash
npm install
```

### Rodar localmente

```bash
npm run dev
```

Acesse `http://localhost:5173` no navegador.

### Gerar build de produção

```bash
npm run build
```

### Deploy no GitHub Pages

1. Crie um repositório chamado `artemis2-site` no GitHub
2. No arquivo `package.json`, substitua `SEU-USUARIO` pelo seu usuário do GitHub no campo `homepage`
3. Execute:

```bash
git init
git add .
git commit -m "Artemis II site"
git remote add origin https://github.com/SEU-USUARIO/artemis2-site.git
git push -u origin main
npm run deploy
```

4. O site ficará disponível em: `https://SEU-USUARIO.github.io/artemis2-site`

---

## Stack

- React 19 + Vite 8
- CSS puro (sem bibliotecas de UI)
- gh-pages para deploy

---

---

# Relatório de Trabalho — Estudo Dirigido 01
**Disciplina:** Sistemas Multimídia  
**Tema:** Missão Artemis II — O Retorno da Humanidade à Lua

---

## 1. Introdução

O tema escolhido para este trabalho foi a missão Artemis II da NASA, o primeiro voo tripulado do programa Artemis, realizado em abril de 2026. A missão levou quatro astronautas ao redor da Lua pela primeira vez desde o programa Apollo, em 1972. O objetivo do conteúdo produzido foi apresentar a missão de forma visual, informativa e acessível, usando um site multimídia com imagens, textos e animações.

---

## 2. Planejamento do Conteúdo

**Público-alvo:**  
Estudantes, entusiastas do espaço e qualquer pessoa interessada em exploração espacial humana.

**Objetivo do conteúdo:**  
Apresentar a missão Artemis II de forma completa: o que foi a missão, quem foram os astronautas, como aconteceu o voo, quais foram os marcos históricos e registros fotográficos oficiais da NASA.

**Formato escolhido:**  
Site multimídia em React, publicado no GitHub Pages. O site é de página única (scroll contínuo), dividido em seções: Hero, Missão, Tripulação, Linha do Tempo, Tecnologia (foguete e espaçonave), Galeria de Fotos e Marcos Históricos.

---

## 3. Produção das Mídias

### 3.1 Produção do Texto

Ferramenta: escrita manual baseada em pesquisa nas fontes oficiais da NASA.  
Fontes: site oficial nasa.gov/mission/artemis-ii, páginas de cada astronauta no site da NASA, e artigos publicados pela NASA sobre a missão.

O texto foi adaptado para o português e organizado nas seções do site. O nível de linguagem foi pensado para ser claro e direto, sem termos técnicos excessivos.

Processo: levantamento de informações sobre datas (lançamento em 01/04/2026, amerissagem em 10/04/2026), detalhes técnicos do foguete SLS e cápsula Orion, biografias dos quatro astronautas e marcos históricos da missão.

### 3.2 Produção das Imagens

Ferramenta: as imagens são todas fotografias oficiais da NASA e da Agência Espacial Canadense, obtidas via scraping do site nasa.gov e da API de imagens da NASA (images-assets.nasa.gov).

Processo: navegação e inspeção do HTML do site nasa.gov/mission/artemis-ii para identificar as URLs diretas das imagens. As imagens foram selecionadas por relevância: retrato dos astronautas, lançamento do SLS, rollout do foguete, fotos tiradas de dentro da cápsula Orion durante a missão (série art002e), e o patch oficial da missão Artemis II.

Formatos: JPEG (fotos da missão), SVG/PNG (patch da missão).  
Hospedagem: as imagens ficam nos servidores da NASA e da Wikimedia Commons, sendo carregadas diretamente no site sem necessidade de upload.

### 3.3 Produção da Animação

Ferramenta: JavaScript puro com a API Canvas do navegador, implementado em React (useRef + useEffect).

Processo: foi criado um canvas animado que ocupa todo o fundo da seção Hero. Nele, 200 estrelas com brilho variável (efeito de piscar) são renderizadas e animadas em loop contínuo usando requestAnimationFrame. Cada estrela tem posição, raio e velocidade de variação de opacidade aleatórios.

Além disso, foi incluído um círculo que simula a Lua ao canto inferior direito do Hero, usando gradiente radial do CSS.

### 3.4 Produção do Site (Desenvolvimento Web)

Ferramenta: React 19 + Vite 8, com CSS puro (sem bibliotecas externas).  
Deploy: GitHub Pages via pacote gh-pages.

Processo: estruturação do projeto com create-vite (template React), criação de componentes separados para cada seção (Navbar, Hero, Mission, Crew, Timeline, Spacecraft, Gallery, Milestones, Footer). Estilo visual com tema escuro inspirado nas cores da Lua: preto profundo, cinza prata lunar e dourado ocre.

---

## 4. Integração das Mídias

O site une todos os tipos de mídia em uma única página:

- **Texto informativo:** cada seção apresenta textos descritivos sobre a missão.
- **Imagens:** fotos reais da NASA aparecem nas seções de tripulação, tecnologia e galeria; o patch da missão aparece no Hero e na navbar.
- **Animação:** o fundo estrelado com canvas JavaScript cria imersão visual na entrada do site.
- **Layout responsivo:** o CSS usa grid e media queries para adaptar o site a diferentes tamanhos de tela.

Os elementos foram combinados de forma a criar uma experiência de "deslocamento" pelo espaço conforme o usuário rola a página. O tema visual escuro com acentos em prata lunar e dourado reforça a identidade da missão.

---

## 5. Formato e Publicação

**Formato final:** site de página única (SPA — Single Page Application).  
**Plataforma:** GitHub Pages (hospedagem gratuita para repositórios públicos).  
**Tecnologia:** React + Vite, compilado para HTML/CSS/JS estático.

Formatos dos arquivos:
- Código-fonte: `.jsx`, `.css`, `.html`, `.js`
- Imagens: carregadas externamente via URL (JPEG, PNG, SVG)
- Build final: arquivos estáticos em `/dist` (index.html + assets)

**Link do site:** `https://SEU-USUARIO.github.io/artemis2-site`

---

## 6. Conclusão

**Dificuldades encontradas:**  
A maior dificuldade foi encontrar URLs de imagens confiáveis e de alta qualidade diretamente nos servidores da NASA. Muitas URLs antigas de fotos dos astronautas retornavam erro 404, sendo necessário identificar os IDs corretos das imagens na API da NASA (images-assets.nasa.gov). Outro desafio foi garantir que o site fosse responsivo e visualmente coerente em diferentes dispositivos.

**Aprendizados obtidos:**  
O trabalho permitiu entender na prática como diferentes tipos de mídia se complementam em um produto digital. A animação canvas, por exemplo, adiciona vida ao site sem depender de arquivos externos. O uso de imagens oficiais da NASA em vez de banco de imagens genérico tornou o conteúdo autêntico e educativo.

**Experiência com produção multimídia:**  
A produção de um site multimídia exige planejar com antecedência quais mídias serão usadas e como elas se integram. Aprender a usar React para componentizar o conteúdo facilitou muito a organização e manutenção do código. A publicação no GitHub Pages é um processo simples mas que ensina conceitos importantes de deploy e hospedagem de conteúdo web.

---

## Fontes

- NASA Artemis II Mission Page: https://www.nasa.gov/mission/artemis-ii/
- NASA Image and Video Library: https://images.nasa.gov/
- NASA Astronaut Bios: https://www.nasa.gov/astronauts/
- Artemis II Multimedia: https://www.nasa.gov/artemis-ii-multimedia/
- Wikipedia — Artemis 2: https://en.wikipedia.org/wiki/Artemis_2
- Canadian Space Agency: https://www.asc-csa.gc.ca/

