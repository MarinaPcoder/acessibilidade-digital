# Acessibilidade Digital e Web para Todos

Projeto escolar completo, responsivo e interativo sobre acessibilidade digital.

## Estrutura

```text
/
├── index.html
├── README.md
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── accessibility.js
│   ├── main.js
│   └── game.js
└── assets/
    ├── images/
    └── charges/
```

## Como executar

Não é necessário instalar nada.

1. Abra `index.html` em um navegador moderno; ou
2. publique a pasta no GitHub Pages.

Todos os caminhos locais são relativos, portanto o projeto funciona em repositórios publicados em subpastas do GitHub Pages.

## Onde editar o conteúdo interativo

- `js/main.js`
  - `timelineItems`: acontecimentos da timeline.
  - `muralItems`: cartões do mural.
  - `quizQuestions`: perguntas do quiz.
- `js/game.js`
  - `gamePhases`: fases, problemas, explicações, correções e dicas do jogo.
- `index.html`
  - textos educativos, legislação, vídeos, referências e estrutura das seções.

## Imagens e charges

- Imagens gerais: `assets/images/`
- Charges: `assets/charges/`

No `index.html` existem comentários marcando os pontos exatos para inserir novos arquivos. Sempre preencha `alt` quando a imagem for informativa. Para imagens puramente decorativas, use `alt=""`.

## JavaScript

O projeto não usa ES Modules. Não há `import` ou `export`.

A ordem de carregamento é:

```html
<script src="js/accessibility.js"></script>
<script src="js/main.js"></script>
<script src="js/game.js"></script>
```

O `game.js` foi separado porque o jogo Conserte o Site possui três fases, estado, pontuação, cronômetro, dicas e feedback próprio. As demais funcionalidades gerais permanecem em `main.js`.

## Temas

O site possui quatro temas:

- Claro
- Escuro
- Alto contraste
- Amigável para daltonismo

A preferência escolhida é salva em `localStorage`. Antes da primeira escolha manual, o site considera `prefers-color-scheme`.

## Painel de acessibilidade

As preferências também são salvas em `localStorage` e incluem:

- tamanho da fonte;
- espaçamento entre letras;
- espaçamento entre linhas;
- fonte amigável para leitura;
- modo de leitura facilitada;
- destaque de links, botões e elementos clicáveis;
- foco reforçado;
- modo de navegação por teclado;
- redução de animações;
- restauração das configurações.

## VLibras

O widget oficial é carregado diretamente de `https://vlibras.gov.br/app/vlibras-plugin.js` no final de `index.html`.

Como esse recurso é externo, ele precisa de conexão com a internet. O restante do conteúdo principal do site continua disponível mesmo se o serviço externo não carregar.

## Vídeos

Os vídeos utilizam `youtube-nocookie.com` para incorporação e links reais do YouTube. Eles também precisam de conexão com a internet. Os cards continuam exibindo título e descrição mesmo quando o vídeo não puder ser carregado.

## Referências principais

- W3C Web Accessibility Initiative (WAI)
- WCAG 2.2
- Lei nº 13.146/2015, Lei Brasileira de Inclusão
- Governo Digital / VLibras

## Observação importante sobre o jogo

Os “erros” do jogo são simulações visuais dentro de controles que permanecem acessíveis por teclado. Isso é intencional: ensinar uma barreira não exige tornar o próprio projeto inacessível para quem está tentando jogar.
