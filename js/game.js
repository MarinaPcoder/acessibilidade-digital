(function () {
    "use strict";

    // ======================================================
    // CONFIGURAÇÃO DO JOGO
    // ======================================================
    const gamePhases = [
        {
            id: 1,
            label: "Fase 1",
            title: "Problemas básicos",
            intro: "Observe aspectos visuais e conteúdo não textual.",
            problems: [
                {
                    id: "missing-alt",
                    title: "Imagem sem texto alternativo",
                    explanation: "Uma imagem informativa sem descrição alternativa pode perder completamente seu significado para quem utiliza leitor de tela.",
                    fix: "Adicione um alt que comunique o propósito da imagem, por exemplo: alt=\"Estudante usando notebook com leitor de tela\".",
                    hint: "Observe o grande conteúdo visual. Se você não pudesse enxergá-lo, ainda receberia a mesma informação?"
                },
                {
                    id: "low-contrast",
                    title: "Contraste insuficiente",
                    explanation: "Texto com pouca diferença de luminosidade em relação ao fundo pode ser difícil de perceber, especialmente para pessoas com baixa visão.",
                    fix: "Escolha combinações de cores com contraste suficiente e teste texto, ícones e componentes importantes.",
                    hint: "Existe um trecho que parece quase desaparecer no fundo."
                },
                {
                    id: "tiny-text",
                    title: "Texto muito pequeno",
                    explanation: "Texto excessivamente pequeno reduz legibilidade e pode exigir esforço desnecessário, especialmente em telas menores ou para pessoas com baixa visão.",
                    fix: "Use tamanhos legíveis e garanta que zoom ou aumento de texto não cause perda de conteúdo ou funcionalidade.",
                    hint: "Nem todo minimalismo é amigável. Procure algo que exija apertar os olhos."
                }
            ],
            markup: function () {
                return `
                    <div class="sim-site-header">
                        <div class="sim-logo">PORTAL ESTUDANTE</div>
                        <span>Início • Notícias • Contato</span>
                    </div>
                    <div class="sim-content">
                        <button type="button" class="problem-zone" data-problem-id="missing-alt" aria-label="Investigar a imagem principal desta página simulada">
                            <div class="sim-image" aria-hidden="true">▧</div>
                        </button>
                        <button type="button" class="problem-zone" data-problem-id="low-contrast" aria-label="Investigar o bloco de texto cinza desta página simulada">
                            <div class="sim-low-contrast">Inscrições abertas para a oficina de tecnologia. Confira as datas e participe.</div>
                        </button>
                        <button type="button" class="problem-zone" data-problem-id="tiny-text" aria-label="Investigar a nota em texto pequeno desta página simulada">
                            <div class="sim-tiny-text">Aviso importante: alterações de horário serão comunicadas nesta área. Verifique antes de comparecer.</div>
                        </button>
                        <div style="padding:.9rem;border:1px solid #ddd;border-radius:8px">
                            <strong>Próxima atividade</strong>
                            <p style="margin-top:.35rem;color:#555">Oficina de introdução à programação, sexta-feira às 14h.</p>
                        </div>
                    </div>`;
            }
        },
        {
            id: 2,
            label: "Fase 2",
            title: "Estrutura e formulários",
            intro: "Agora os problemas estão na forma como a interface comunica função e estrutura.",
            problems: [
                {
                    id: "missing-label",
                    title: "Campo de formulário sem label",
                    explanation: "Um campo sem rótulo associado pode não ter seu propósito comunicado corretamente a tecnologias assistivas. Placeholder não é substituto confiável para label.",
                    fix: "Associe um <label for=\"email\">E-mail</label> a um input com id=\"email\".",
                    hint: "Observe o formulário. Se o texto interno do campo desaparecesse, ainda daria para saber o que preencher?"
                },
                {
                    id: "unnamed-button",
                    title: "Botão sem nome acessível",
                    explanation: "Um botão representado apenas por ícone pode ser anunciado sem propósito claro quando não possui texto visível ou nome acessível.",
                    fix: "Use texto visível quando possível ou forneça um nome acessível, como aria-label=\"Abrir configurações\".",
                    hint: "Há um controle composto só por um símbolo. O símbolo sozinho explica sua função para todos?"
                },
                {
                    id: "heading-order",
                    title: "Estrutura incorreta de títulos",
                    explanation: "Títulos devem representar a hierarquia do conteúdo. Pular ou escolher níveis apenas pelo tamanho visual pode tornar a estrutura confusa.",
                    fix: "Organize h1, h2, h3 e demais níveis conforme a estrutura lógica do conteúdo, estilizando aparência com CSS.",
                    hint: "Observe os títulos. O maior visualmente é realmente o principal na estrutura?"
                },
                {
                    id: "generic-link",
                    title: "Link com texto genérico",
                    explanation: "Links como “clique aqui” podem perder significado quando lidos fora do parágrafo ou em listas de links de um leitor de tela.",
                    fix: "Use texto que indique destino ou ação, como “Consultar calendário de inscrições”.",
                    hint: "Procure uma ação cujo texto não diz para onde ela leva."
                }
            ],
            markup: function () {
                return `
                    <div class="sim-site-header">
                        <div class="sim-logo">ÁREA DO ALUNO</div>
                        <button type="button" class="problem-zone sim-icon-button" data-problem-id="unnamed-button" aria-label="Investigar o botão de ícone desta página simulada">⚙</button>
                    </div>
                    <div class="sim-content">
                        <button type="button" class="problem-zone" data-problem-id="heading-order" aria-label="Investigar a estrutura de títulos desta página simulada">
                            <div class="sim-headings">
                                <div class="fake-h4">Portal acadêmico</div>
                                <div class="fake-h2">Atualizações da semana</div>
                                <p style="margin-top:.4rem;color:#555">Informações importantes para estudantes.</p>
                            </div>
                        </button>
                        <button type="button" class="problem-zone" data-problem-id="missing-label" aria-label="Investigar o campo de formulário desta página simulada">
                            <div class="sim-form">
                                <div class="sim-fake-input" aria-hidden="true">Digite seu e-mail</div>
                                <span style="font-size:.8rem;color:#666">Receba novidades por e-mail.</span>
                            </div>
                        </button>
                        <button type="button" class="problem-zone" data-problem-id="generic-link" aria-label="Investigar o link genérico desta página simulada">
                            <span class="sim-generic-link">Clique aqui</span>
                        </button>
                        <div style="padding:.9rem;border:1px solid #ddd;border-radius:8px">
                            <strong>Atendimento</strong>
                            <p style="margin-top:.35rem;color:#555">Segunda a sexta, das 8h às 17h.</p>
                        </div>
                    </div>`;
            }
        },
        {
            id: 3,
            label: "Fase 3",
            title: "Especialista",
            intro: "Os últimos problemas envolvem interação, foco e conteúdo multimídia.",
            problems: [
                {
                    id: "mouse-only",
                    title: "Interação que só funciona com mouse",
                    explanation: "Funcionalidades acionadas apenas por clique ou hover podem impedir a participação de pessoas que usam teclado, switches ou outras tecnologias de entrada.",
                    fix: "Use elementos interativos nativos, eventos compatíveis com teclado e comportamento equivalente para diferentes formas de entrada.",
                    hint: "Existe uma área que parece pedir uma ação física específica em vez de oferecer um controle claro."
                },
                {
                    id: "video-no-captions",
                    title: "Vídeo sem legenda",
                    explanation: "Quando informações faladas ou sonoras importantes não possuem legenda, pessoas surdas ou em ambientes onde não podem ouvir perdem conteúdo.",
                    fix: "Forneça legendas sincronizadas e revise a qualidade. Conforme o conteúdo, transcrição, audiodescrição e Libras também podem ser importantes.",
                    hint: "Procure conteúdo multimídia. Toda informação sonora também está disponível de outra forma?"
                },
                {
                    id: "poor-focus",
                    title: "Foco de teclado inadequado",
                    explanation: "Quem navega por teclado precisa identificar claramente qual elemento está ativo. Remover ou esconder o indicador de foco causa perda de orientação.",
                    fix: "Mantenha :focus-visible evidente, com contraste e espessura suficientes, sem encobrir o componente.",
                    hint: "Pense em alguém pressionando Tab. Como essa pessoa saberia em qual controle está?"
                }
            ],
            markup: function () {
                return `
                    <div class="sim-site-header">
                        <div class="sim-logo">CENTRAL DE CONTEÚDO</div>
                        <span>Recursos avançados</span>
                    </div>
                    <div class="sim-content">
                        <button type="button" class="problem-zone" data-problem-id="mouse-only" aria-label="Investigar a área de interação dependente de mouse desta página simulada">
                            <div class="sim-mouse-only">Passe o mouse aqui para revelar a resposta secreta</div>
                        </button>
                        <button type="button" class="problem-zone" data-problem-id="video-no-captions" aria-label="Investigar o player de vídeo desta página simulada">
                            <div class="sim-video"><div><span aria-hidden="true">▶</span><br>Vídeo da aula<br><small>Áudio disponível</small></div></div>
                        </button>
                        <button type="button" class="problem-zone" data-problem-id="poor-focus" aria-label="Investigar os controles com foco pouco visível desta página simulada">
                            <div class="sim-focus-row">
                                <span class="fake-control">Anterior</span>
                                <span class="fake-control">Salvar</span>
                                <span class="fake-control">Próximo</span>
                            </div>
                        </button>
                        <div class="sim-live-status">
                            <strong>Status do sistema</strong>
                            <p style="margin-top:.35rem;color:#555">Todos os serviços disponíveis.</p>
                        </div>
                    </div>`;
            }
        }
    ];

    const totalProblems = gamePhases.reduce(function (total, phase) {
        return total + phase.problems.length;
    }, 0);

    // ======================================================
    // ESTADO
    // ======================================================
    let phaseIndex = 0;
    let score = 0;
    let foundTotal = 0;
    let hintsUsed = 0;
    let streak = 0;
    let resolvedInPhase = new Set();
    let startTimestamp = 0;
    let lastFoundTimestamp = 0;
    let timerId = null;
    let gameRunning = false;

    // ======================================================
    // UTILITÁRIOS
    // ======================================================
    function qs(selector) { return document.querySelector(selector); }
    function qsa(selector, root) { return Array.from((root || document).querySelectorAll(selector)); }

    function formatTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
        const seconds = Math.floor(totalSeconds % 60).toString().padStart(2, "0");
        return minutes + ":" + seconds;
    }

    function elapsedSeconds() {
        if (!startTimestamp) return 0;
        return Math.max(0, Math.floor((Date.now() - startTimestamp) / 1000));
    }

    function announce(message) {
        const live = qs("#siteAnnouncement");
        if (!live) return;
        live.textContent = "";
        window.setTimeout(function () { live.textContent = message; }, 30);
    }

    function findProblem(phase, id) {
        return phase.problems.find(function (problem) { return problem.id === id; });
    }

    // ======================================================
    // INTERFACE
    // ======================================================
    function updateDashboard() {
        const phase = gamePhases[phaseIndex];
        qs("#gamePhase").textContent = (phaseIndex + 1) + " / " + gamePhases.length;
        qs("#gameScore").textContent = String(score);
        qs("#gameFound").textContent = foundTotal + " / " + totalProblems;
        qs("#gameTime").textContent = formatTime(elapsedSeconds());
        qs("#gameProgress").style.width = (foundTotal / totalProblems * 100) + "%";
        qs("#gamePhaseLabel").textContent = phase.label;
        qs("#gamePhaseTitle").textContent = phase.title;
    }

    function renderPhase() {
        const phase = gamePhases[phaseIndex];
        const stage = qs("#gameStage");
        resolvedInPhase = new Set();
        streak = 0;
        stage.innerHTML = phase.markup();
        updateDashboard();
        setFeedback("🔎", phase.title, "<p>" + phase.intro + " Clique ou pressione Enter nos elementos que parecem apresentar problemas.</p>");

        qsa("[data-problem-id]", stage).forEach(function (element) {
            element.addEventListener("click", function () {
                resolveProblem(element.getAttribute("data-problem-id"), element);
            });
        });

        const firstProblem = qs("[data-problem-id]", stage);
        if (firstProblem && phaseIndex > 0) firstProblem.focus();
    }

    function setFeedback(icon, title, html) {
        qs("#gameFeedbackIcon").textContent = icon;
        qs("#gameFeedbackTitle").textContent = title;
        qs("#gameFeedbackText").innerHTML = html;
    }

    function resolveProblem(problemId, element) {
        if (!gameRunning || resolvedInPhase.has(problemId)) return;
        const phase = gamePhases[phaseIndex];
        const problem = findProblem(phase, problemId);
        if (!problem) return;

        resolvedInPhase.add(problemId);
        foundTotal += 1;
        streak += 1;

        const now = Date.now();
        const secondsSinceLast = lastFoundTimestamp ? (now - lastFoundTimestamp) / 1000 : (now - startTimestamp) / 1000;
        const speedBonus = secondsSinceLast <= 12 ? 20 : 0;
        const streakBonus = Math.min(40, Math.max(0, streak - 1) * 10);
        const gained = 100 + speedBonus + streakBonus;
        score += gained;
        lastFoundTimestamp = now;

        element.classList.add("resolved");
        element.setAttribute("data-resolved", "true");
        element.setAttribute("aria-label", "Problema resolvido: " + problem.title);

        setFeedback(
            "✅",
            "Erro encontrado: " + problem.title,
            "<p>" + problem.explanation + "</p>" +
            '<div class="fix-box"><strong>Como corrigir:</strong><br>' + problem.fix + "</div>" +
            '<p style="margin-top:.7rem"><strong>+' + gained + " pontos</strong>" +
            (speedBonus ? " • bônus de velocidade" : "") +
            (streakBonus ? " • bônus de sequência" : "") +
            "</p>"
        );

        updateDashboard();
        announce("Problema encontrado: " + problem.title + ". Você ganhou " + gained + " pontos.");

        if (resolvedInPhase.size === phase.problems.length) {
            window.setTimeout(completePhase, 450);
        }
    }

    function completePhase() {
        const stage = qs("#gameStage");
        const isLast = phaseIndex === gamePhases.length - 1;

        if (isLast) {
            finishGame();
            return;
        }

        const nextPhase = gamePhases[phaseIndex + 1];
        stage.innerHTML = `
            <div class="phase-complete">
                <span aria-hidden="true">✓</span>
                <h3>Fase ${phaseIndex + 1} concluída!</h3>
                <p>Você encontrou todos os problemas desta etapa. A próxima fase aumenta a dificuldade.</p>
                <button class="button button-primary" id="gameNextPhase" type="button">Ir para ${nextPhase.label}: ${nextPhase.title}</button>
            </div>`;
        setFeedback("🎯", "Fase concluída", "<p>Boa investigação. Na próxima etapa, observe não apenas aparência, mas também estrutura e comportamento.</p>");
        const button = qs("#gameNextPhase");
        button.addEventListener("click", function () {
            phaseIndex += 1;
            renderPhase();
        });
        button.focus();
    }

    // ======================================================
    // PONTUAÇÃO E DICAS
    // ======================================================
    function useHint() {
        if (!gameRunning) return;
        const phase = gamePhases[phaseIndex];
        const unresolved = phase.problems.filter(function (problem) { return !resolvedInPhase.has(problem.id); });
        if (!unresolved.length) return;

        const problem = unresolved[hintsUsed % unresolved.length];
        hintsUsed += 1;
        score = Math.max(0, score - 25);
        streak = 0;
        updateDashboard();
        setFeedback("💡", "Dica", '<div class="hint-box">' + problem.hint + '</div><p style="margin-top:.7rem">Usar uma dica custa <strong>25 pontos</strong>.</p>');
        announce("Dica usada. Vinte e cinco pontos foram descontados.");
    }

    function classification(finalScore) {
        if (finalScore <= 300) return "Aprendiz";
        if (finalScore <= 600) return "Explorador";
        if (finalScore <= 800) return "Especialista";
        return "Mestre da Acessibilidade 🏆";
    }

    // ======================================================
    // CICLO DO JOGO
    // ======================================================
    function startGame() {
        phaseIndex = 0;
        score = 0;
        foundTotal = 0;
        hintsUsed = 0;
        streak = 0;
        resolvedInPhase = new Set();
        startTimestamp = Date.now();
        lastFoundTimestamp = 0;
        gameRunning = true;

        qs("#gameStart").hidden = true;
        qs("#gameFinish").hidden = true;
        qs("#gamePlay").hidden = false;

        window.clearInterval(timerId);
        timerId = window.setInterval(updateDashboard, 1000);
        renderPhase();
        announce("Jogo iniciado. Fase 1: problemas básicos.");
    }

    function finishGame() {
        gameRunning = false;
        window.clearInterval(timerId);
        timerId = null;
        const finalTime = elapsedSeconds();

        qs("#gamePlay").hidden = true;
        qs("#gameFinish").hidden = false;
        qs("#gameFinalScore").textContent = String(score);
        qs("#gameFinalTime").textContent = formatTime(finalTime);
        qs("#gameFinalHints").textContent = String(hintsUsed);
        qs("#gameFinalLevel").textContent = classification(score);
        qs("#gamePlayAgainButton").focus();
        announce("Parabéns. Você encontrou todos os " + totalProblems + " problemas. Pontuação final: " + score + ".");
    }

    function restartGame() {
        const confirmed = window.confirm("Reiniciar o jogo e zerar a pontuação atual?");
        if (confirmed) startGame();
    }

    // ======================================================
    // INICIALIZAÇÃO
    // ======================================================
    function init() {
        const app = qs("#gameApp");
        if (!app) return;

        qs("#gameStartButton").addEventListener("click", startGame);
        qs("#gameHintButton").addEventListener("click", useHint);
        qs("#gameRestartButton").addEventListener("click", restartGame);
        qs("#gamePlayAgainButton").addEventListener("click", startGame);

        window.GameApp = {
            phases: gamePhases,
            start: startGame,
            getState: function () {
                return {
                    phase: phaseIndex + 1,
                    score: score,
                    found: foundTotal,
                    total: totalProblems,
                    hints: hintsUsed,
                    time: elapsedSeconds()
                };
            }
        };
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }
})();
