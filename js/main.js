(function () {
    "use strict";

    // ======================================================
    // CONFIGURAÇÃO
    // ======================================================
    const THEME_KEY = "acessibilidadeDigital.theme.v1";
    const VALID_THEMES = ["light", "dark", "contrast", "colorblind"];

    const timelineItems = [
        {
            year: "1989–1991",
            title: "A Web começa a tomar forma",
            text: "Tim Berners-Lee propõe e desenvolve a World Wide Web. A ideia de uma rede baseada em padrões abertos cria uma base que, mais tarde, permitiria discutir acesso universal de forma estruturada.",
            source: "Contexto histórico da World Wide Web"
        },
        {
            year: "1994",
            title: "Criação do W3C",
            text: "O World Wide Web Consortium (W3C) é criado para desenvolver padrões abertos para a Web. A acessibilidade passa a integrar progressivamente esse esforço de padronização.",
            source: "W3C"
        },
        {
            year: "1997",
            title: "Lançamento da Web Accessibility Initiative",
            text: "O W3C lança oficialmente a Web Accessibility Initiative (WAI), reunindo trabalho técnico, diretrizes, educação e pesquisa voltados à acessibilidade na Web.",
            source: "W3C WAI History"
        },
        {
            year: "1999",
            title: "WCAG 1.0",
            text: "A primeira versão das Web Content Accessibility Guidelines organiza recomendações para tornar conteúdo Web mais acessível e ajuda a criar uma linguagem comum para o tema.",
            source: "W3C WAI"
        },
        {
            year: "2008",
            title: "WCAG 2.0",
            text: "A WCAG 2.0 é publicada com uma estrutura baseada nos princípios Perceptível, Operável, Compreensível e Robusto, além de critérios de sucesso testáveis.",
            source: "W3C, 11 de dezembro de 2008"
        },
        {
            year: "2015",
            title: "Lei Brasileira de Inclusão",
            text: "No Brasil, a Lei nº 13.146/2015 reforça direitos de acessibilidade. O artigo 63 trata especificamente da acessibilidade em sites mantidos por órgãos de governo e empresas com sede ou representação comercial no país.",
            source: "Lei nº 13.146/2015"
        },
        {
            year: "2018",
            title: "WCAG 2.1",
            text: "A WCAG 2.1 acrescenta critérios importantes relacionados, entre outros pontos, a dispositivos móveis, baixa visão e algumas necessidades cognitivas e motoras.",
            source: "W3C, 5 de junho de 2018"
        },
        {
            year: "2023",
            title: "WCAG 2.2",
            text: "A WCAG 2.2 torna-se Recomendação W3C em 5 de outubro de 2023 e adiciona nove critérios de sucesso, incluindo foco não encoberto, tamanho mínimo de alvo e autenticação acessível.",
            source: "W3C WCAG 2.2"
        },
        {
            year: "2024–2026",
            title: "Acessibilidade continua evoluindo",
            text: "Ferramentas, navegadores e tecnologias assistivas continuam avançando. A WCAG 2.2 recebe atualização editorial e o W3C mantém trabalho futuro em novas gerações de diretrizes, enquanto a versão 2.2 permanece a referência recomendada da família WCAG 2.",
            source: "W3C WAI"
        },
        {
            year: "Hoje",
            title: "Acessibilidade como parte da qualidade",
            text: "O cenário atual exige mais do que uma checagem automática: semântica, teclado, zoom, contraste, conteúdo, tecnologias assistivas e testes com pessoas precisam fazer parte do ciclo de desenvolvimento.",
            source: "Boas práticas contemporâneas de acessibilidade"
        }
    ];

    const muralItems = [
        { category: "reflexao", symbol: "✦", title: "Acessibilidade não é acabamento", text: "Quando acessibilidade entra só no final, corrigir fica mais caro e algumas decisões estruturais já se tornaram difíceis de mudar.", quote: "Projetar para mais pessoas desde o início é melhor do que remendar exclusões depois." },
        { category: "dica", symbol: "⌨", title: "Faça o teste da tecla Tab", text: "Tente realizar uma tarefa importante sem tocar no mouse. Se você se perder, não enxergar o foco ou ficar preso, existe uma barreira a investigar." },
        { category: "barreira", symbol: "◌", title: "Placeholder não substitui label", text: "O texto dentro do campo pode desaparecer durante a digitação. Um rótulo associado continua identificando o campo e pode ser interpretado por tecnologias assistivas." },
        { category: "curiosidade", symbol: "A+", title: "Acessibilidade beneficia situações temporárias", text: "Uma mão imobilizada, um ambiente barulhento ou uma tela sob sol forte podem transformar recursos de acessibilidade em recursos úteis para qualquer pessoa." },
        { category: "dica", symbol: "CC", title: "Legenda é conteúdo", text: "Legendas precisam representar fala e sons relevantes. Gerar texto automaticamente pode ajudar, mas revisar erros continua importante." },
        { category: "barreira", symbol: "Aa", title: "Texto pequeno não é minimalismo", text: "Uma interface pode ser visualmente limpa sem sacrificar leitura. Fontes minúsculas e baixo contraste trocam clareza por aparência." },
        { category: "reflexao", symbol: "↔", title: "Existem muitas formas de navegar", text: "Mouse é apenas uma delas. Teclado, toque, voz, switches e tecnologias assistivas também precisam conseguir alcançar os mesmos objetivos." },
        { category: "dica", symbol: "🖼", title: "Alt descreve propósito", text: "O melhor texto alternativo depende do contexto. A mesma imagem pode precisar de descrições diferentes conforme a informação que representa naquela página." },
        { category: "curiosidade", symbol: "⠿", title: "Leitor de tela não 'lê a tela' como um humano", text: "Ele depende muito da estrutura programática, nomes, estados e relações que o código disponibiliza. Visual bonito sozinho não informa isso." },
        { category: "barreira", symbol: "🔗", title: "'Clique aqui' perde contexto", text: "Links descritivos ajudam quem navega rapidamente ou usa uma lista de links. Prefira algo como “Consultar a Lei Brasileira de Inclusão”." },
        { category: "dica", symbol: "◐", title: "Cor não deve trabalhar sozinha", text: "Se vermelho significa erro, inclua também texto, ícone ou outro indicador. Assim a informação não depende apenas da percepção de cor." },
        { category: "reflexao", symbol: "∞", title: "Não existe um único usuário padrão", text: "Pessoas usam dispositivos, idiomas, tecnologias, capacidades e estratégias diferentes. Acessibilidade começa quando o projeto aceita essa diversidade." }
    ];

    const quizQuestions = [
        {
            question: "Qual opção descreve melhor acessibilidade digital?",
            options: [
                "Adicionar um botão de aumentar fonte e encerrar o assunto",
                "Projetar conteúdo e interfaces utilizáveis por pessoas com diferentes formas de percepção e interação",
                "Criar uma versão separada do site para cada deficiência",
                "Usar somente textos e remover imagens e vídeos"
            ],
            correct: 1,
            explanation: "Acessibilidade digital envolve estrutura, conteúdo, interação, apresentação e compatibilidade com diferentes formas de uso. Um único recurso isolado não resolve tudo."
        },
        {
            question: "Para uma imagem puramente decorativa, qual alternativa costuma ser adequada?",
            options: ["Remover o atributo alt", "Usar alt=\"imagem\"", "Usar alt=\"\"", "Transformar a imagem em botão"],
            correct: 2,
            explanation: "Imagens decorativas geralmente usam alt vazio para que leitores de tela possam ignorá-las sem perder informação essencial."
        },
        {
            question: "Qual é a função de um label em um formulário?",
            options: ["Mudar a cor do campo", "Identificar programaticamente o propósito do campo", "Enviar o formulário automaticamente", "Substituir qualquer mensagem de erro"],
            correct: 1,
            explanation: "Um label associado ajuda a pessoa a entender o que deve preencher e fornece uma relação programática importante para tecnologias assistivas."
        },
        {
            question: "Qual conjunto contém os quatro princípios das WCAG?",
            options: ["Visual, auditivo, motor e cognitivo", "Perceptível, Operável, Compreensível e Robusto", "HTML, CSS, JavaScript e ARIA", "A, AA, AAA e AAAA"],
            correct: 1,
            explanation: "As WCAG 2 organizam suas diretrizes sob os princípios Perceptível, Operável, Compreensível e Robusto."
        },
        {
            question: "Um site pode ser considerado acessível se todas as ações essenciais exigirem mouse?",
            options: ["Sim, se os botões forem grandes", "Sim, desde que o site tenha alto contraste", "Não, porque a operação por teclado é necessária para muitos usuários", "Somente em computadores"],
            correct: 2,
            explanation: "Interfaces que exigem um apontador excluem pessoas que navegam por teclado ou tecnologias equivalentes."
        },
        {
            question: "Qual alternativa é um problema de acessibilidade em links?",
            options: ["Texto como 'Consultar WCAG 2.2'", "Link com foco visível", "Texto genérico repetido como 'clique aqui'", "Link que pode ser ativado com Enter"],
            correct: 2,
            explanation: "Links genéricos podem perder sentido fora do contexto. Um texto descritivo informa destino ou ação com mais clareza."
        },
        {
            question: "O nível AA das WCAG significa que...",
            options: ["a página atende somente critérios AAA", "a página atende critérios A e AA aplicáveis", "a página está dispensada de testes", "todo conteúdo precisa ser apresentado em Libras"],
            correct: 1,
            explanation: "Conformidade AA exige atender aos critérios de nível A e AA aplicáveis. AAA é um nível adicional e mais exigente."
        },
        {
            question: "Por que HTML semântico ajuda na acessibilidade?",
            options: ["Porque deixa qualquer site automaticamente bonito", "Porque comunica estrutura e função de elementos a navegadores e tecnologias assistivas", "Porque elimina a necessidade de CSS", "Porque impede qualquer erro de JavaScript"],
            correct: 1,
            explanation: "Semântica fornece informação estrutural e funcional. Um button nativo, por exemplo, já carrega comportamento e significado úteis."
        },
        {
            question: "Qual é uma boa prática para animações?",
            options: ["Obrigar animações longas para todos", "Ignorar preferências do sistema", "Oferecer redução de movimento e respeitar prefers-reduced-motion", "Usar movimento para transmitir toda informação importante"],
            correct: 2,
            explanation: "Respeitar prefers-reduced-motion e permitir reduzir animações diminui desconforto e evita dependência desnecessária de movimento."
        },
        {
            question: "Sobre o VLibras, qual afirmação é mais adequada?",
            options: ["É uma suíte de tradução automática para Libras que pode ampliar acesso, mas não substitui intérpretes humanos em todos os contextos", "Substitui automaticamente qualquer estratégia de acessibilidade para pessoas surdas", "É um leitor de tela", "Serve apenas para mudar contraste"],
            correct: 0,
            explanation: "O próprio Governo Digital apresenta o VLibras como tradução automática para Libras e alerta que a ferramenta não deve substituir intérpretes humanos em situações que exigem interpretação adequada."
        }
    ];

    // ======================================================
    // UTILITÁRIOS
    // ======================================================
    function qs(selector, root) {
        return (root || document).querySelector(selector);
    }

    function qsa(selector, root) {
        return Array.from((root || document).querySelectorAll(selector));
    }

    function escapeHTML(value) {
        return String(value).replace(/[&<>'"]/g, function (char) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char];
        });
    }

    function announce(message) {
        const live = qs("#siteAnnouncement");
        if (!live) return;
        live.textContent = "";
        window.setTimeout(function () { live.textContent = message; }, 30);
    }

    function openDialog(dialog) {
        if (!dialog) return;
        if (typeof dialog.showModal === "function") {
            if (!dialog.open) dialog.showModal();
        } else {
            dialog.setAttribute("open", "");
        }
        document.body.classList.add("no-scroll");
    }

    function closeDialog(dialog) {
        if (!dialog) return;
        if (typeof dialog.close === "function" && dialog.open) dialog.close();
        else dialog.removeAttribute("open");
        document.body.classList.remove("no-scroll");
    }

    function showToast(message) {
        const toast = qs("#siteToast");
        if (!toast) return;
        toast.textContent = message;
        toast.hidden = false;
        window.clearTimeout(showToast.timer);
        showToast.timer = window.setTimeout(function () {
            toast.hidden = true;
        }, 2800);
    }

    // ======================================================
    // MENU
    // ======================================================
    function initMenu() {
        const toggle = qs("#menuToggle");
        const nav = qs("#mainNavigation");
        if (!toggle || !nav) return;

        function closeMenu() {
            nav.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Abrir menu de navegação");
        }

        toggle.addEventListener("click", function () {
            const open = !nav.classList.contains("open");
            nav.classList.toggle("open", open);
            toggle.setAttribute("aria-expanded", String(open));
            toggle.setAttribute("aria-label", open ? "Fechar menu de navegação" : "Abrir menu de navegação");
        });

        qsa("a", nav).forEach(function (link) {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") closeMenu();
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 1120) closeMenu();
        });
    }

    function initSectionNavigation() {
        const links = qsa('#mainNavigation a[href^="#"]');
        const targets = links.map(function (link) { return qs(link.getAttribute("href")); }).filter(Boolean);
        if (!("IntersectionObserver" in window) || !targets.length) return;

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                links.forEach(function (link) {
                    const active = link.getAttribute("href") === "#" + entry.target.id;
                    if (active) link.setAttribute("aria-current", "location");
                    else link.removeAttribute("aria-current");
                });
            });
        }, { rootMargin: "-30% 0px -60% 0px", threshold: 0.01 });

        targets.forEach(function (target) { observer.observe(target); });
    }

    // ======================================================
    // TEMA
    // ======================================================
    function getInitialTheme() {
        try {
            const saved = localStorage.getItem(THEME_KEY);
            if (VALID_THEMES.includes(saved)) return saved;
        } catch (error) {
            // Sem armazenamento, usa preferência do sistema.
        }
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
        return "light";
    }

    function applyTheme(theme, persist) {
        const safeTheme = VALID_THEMES.includes(theme) ? theme : "light";
        document.documentElement.setAttribute("data-theme", safeTheme);
        qsa("[data-theme-option]").forEach(function (button) {
            button.setAttribute("aria-checked", String(button.getAttribute("data-theme-option") === safeTheme));
        });
        if (persist) {
            try { localStorage.setItem(THEME_KEY, safeTheme); } catch (error) { /* continua sem persistência */ }
        }
        const names = { light: "claro", dark: "escuro", contrast: "alto contraste", colorblind: "amigável para daltonismo" };
        announce("Tema " + names[safeTheme] + " ativado.");
    }

    function initTheme() {
        const button = qs("#themeButton");
        const menu = qs("#themeMenu");
        if (!button || !menu) return;

        applyTheme(getInitialTheme(), false);

        function closeThemeMenu(returnFocus) {
            menu.hidden = true;
            button.setAttribute("aria-expanded", "false");
            if (returnFocus) button.focus();
        }

        button.addEventListener("click", function () {
            const willOpen = menu.hidden;
            menu.hidden = !willOpen;
            button.setAttribute("aria-expanded", String(willOpen));
            if (willOpen) {
                const selected = qs('[data-theme-option][aria-checked="true"]', menu) || qs("button", menu);
                if (selected) selected.focus();
            }
        });

        qsa("[data-theme-option]", menu).forEach(function (option) {
            option.addEventListener("click", function () {
                applyTheme(option.getAttribute("data-theme-option"), true);
                closeThemeMenu(true);
            });
        });

        document.addEventListener("click", function (event) {
            if (menu.hidden) return;
            if (!menu.contains(event.target) && event.target !== button) closeThemeMenu(false);
        });

        menu.addEventListener("keydown", function (event) {
            const options = qsa("[data-theme-option]", menu);
            const current = options.indexOf(document.activeElement);
            if (event.key === "Escape") {
                event.preventDefault();
                closeThemeMenu(true);
            } else if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                event.preventDefault();
                options[(current + 1 + options.length) % options.length].focus();
            } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                event.preventDefault();
                options[(current - 1 + options.length) % options.length].focus();
            }
        });
    }

    // ======================================================
    // BUSCA
    // ======================================================
    function initSearch() {
        const openButton = qs("#searchOpen");
        const dialog = qs("#searchDialog");
        const form = qs("#searchForm");
        const input = qs("#searchInput");
        const results = qs("#searchResults");
        const status = qs("#searchStatus");
        if (!openButton || !dialog || !form || !input || !results || !status) return;

        const searchableSections = qsa("main section[id]").map(function (section) {
            const heading = qs("h2, h1", section);
            return {
                id: section.id,
                title: heading ? heading.textContent.trim() : section.id,
                text: section.textContent.replace(/\s+/g, " ").trim()
            };
        });

        openButton.addEventListener("click", function () {
            openDialog(dialog);
            window.setTimeout(function () { input.focus(); }, 30);
        });

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const query = input.value.trim();
            performSearch(query);
        });

        function performSearch(query) {
            results.innerHTML = "";
            if (query.length < 2) {
                status.textContent = "Digite pelo menos 2 caracteres para pesquisar.";
                return;
            }

            const normalized = query.toLocaleLowerCase("pt-BR");
            const matches = searchableSections.filter(function (item) {
                return item.text.toLocaleLowerCase("pt-BR").includes(normalized) || item.title.toLocaleLowerCase("pt-BR").includes(normalized);
            });

            status.textContent = matches.length === 1 ? "1 seção encontrada." : matches.length + " seções encontradas.";

            matches.slice(0, 12).forEach(function (item) {
                const position = item.text.toLocaleLowerCase("pt-BR").indexOf(normalized);
                const start = Math.max(0, position - 85);
                const snippet = item.text.slice(start, start + 210);
                const article = document.createElement("article");
                article.className = "search-result";
                article.innerHTML = '<a href="#' + escapeHTML(item.id) + '">' + highlightText(item.title, query) + '</a><p>' + highlightText((start > 0 ? "…" : "") + snippet + (item.text.length > start + 210 ? "…" : ""), query) + "</p>";
                const link = qs("a", article);
                link.addEventListener("click", function () {
                    closeDialog(dialog);
                    const target = document.getElementById(item.id);
                    if (target) {
                        target.classList.add("search-target");
                        window.setTimeout(function () { target.classList.remove("search-target"); }, 1800);
                    }
                });
                results.appendChild(article);
            });
        }
    }

    function highlightText(text, query) {
        const safeText = escapeHTML(text);
        const safeQuery = escapeHTML(query).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        if (!safeQuery) return safeText;
        return safeText.replace(new RegExp("(" + safeQuery + ")", "gi"), "<mark>$1</mark>");
    }

    // ======================================================
    // GALERIA
    // ======================================================
    function initGallery() {
        const items = qsa("[data-gallery-item]");
        const dialog = qs("#galleryDialog");
        const image = qs("#galleryModalImage");
        const caption = qs("#galleryModalCaption");
        const prev = qs("#galleryPrev");
        const next = qs("#galleryNext");
        if (!items.length || !dialog || !image || !caption || !prev || !next) return;

        let currentIndex = 0;

        function show(index) {
            currentIndex = (index + items.length) % items.length;
            const item = items[currentIndex];
            image.src = item.getAttribute("data-src");
            image.alt = item.getAttribute("data-alt") || "";
            caption.textContent = item.getAttribute("data-caption") || "";
            qs("#galleryDialogTitle").textContent = "Imagem " + (currentIndex + 1) + " de " + items.length;
        }

        items.forEach(function (item, index) {
            item.addEventListener("click", function () {
                show(index);
                openDialog(dialog);
            });
        });

        prev.addEventListener("click", function () { show(currentIndex - 1); });
        next.addEventListener("click", function () { show(currentIndex + 1); });

        dialog.addEventListener("keydown", function (event) {
            if (event.key === "ArrowLeft") { event.preventDefault(); show(currentIndex - 1); }
            if (event.key === "ArrowRight") { event.preventDefault(); show(currentIndex + 1); }
        });
    }

    // ======================================================
    // TIMELINE
    // ======================================================
    function initTimeline() {
        const years = qs("#timelineYears");
        const detail = qs("#timelineDetail");
        const progress = qs("#timelineProgress");
        const prev = qs("#timelinePrev");
        const next = qs("#timelineNext");
        if (!years || !detail || !progress || !prev || !next) return;

        let activeIndex = 0;

        timelineItems.forEach(function (item, index) {
            const button = document.createElement("button");
            button.type = "button";
            button.id = "timeline-tab-" + index;
            button.setAttribute("role", "tab");
            button.setAttribute("aria-controls", "timelineDetail");
            button.setAttribute("aria-selected", String(index === 0));
            button.tabIndex = index === 0 ? 0 : -1;
            button.textContent = item.year;
            button.addEventListener("click", function () { setActive(index, true); });
            button.addEventListener("keydown", function (event) {
                if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                    event.preventDefault(); setActive(index + 1, true);
                } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                    event.preventDefault(); setActive(index - 1, true);
                } else if (event.key === "Home") {
                    event.preventDefault(); setActive(0, true);
                } else if (event.key === "End") {
                    event.preventDefault(); setActive(timelineItems.length - 1, true);
                }
            });
            years.appendChild(button);
        });

        function setActive(index, focusTab) {
            activeIndex = (index + timelineItems.length) % timelineItems.length;
            const item = timelineItems[activeIndex];
            const buttons = qsa('[role="tab"]', years);
            buttons.forEach(function (button, buttonIndex) {
                const active = buttonIndex === activeIndex;
                button.setAttribute("aria-selected", String(active));
                button.tabIndex = active ? 0 : -1;
            });
            detail.setAttribute("aria-labelledby", "timeline-tab-" + activeIndex);
            detail.innerHTML = '<span class="timeline-year">' + escapeHTML(item.year) + '</span><h3>' + escapeHTML(item.title) + '</h3><p>' + escapeHTML(item.text) + '</p><p class="timeline-source"><strong>Referência:</strong> ' + escapeHTML(item.source) + "</p>";
            progress.style.width = ((activeIndex + 1) / timelineItems.length * 100) + "%";
            const activeButton = buttons[activeIndex];
            if (activeButton) {
                const desiredLeft = activeButton.offsetLeft - (years.clientWidth / 2) + (activeButton.offsetWidth / 2);
                years.scrollTo({ left: Math.max(0, desiredLeft), behavior: reducedMotionEnabled() ? "auto" : "smooth" });
                if (focusTab) activeButton.focus();
            }
        }

        prev.addEventListener("click", function () { setActive(activeIndex - 1, false); });
        next.addEventListener("click", function () { setActive(activeIndex + 1, false); });
        setActive(0, false);
    }

    // ======================================================
    // MURAL
    // ======================================================
    function initMural() {
        const grid = qs("#muralGrid");
        const filters = qsa("[data-mural-filter]");
        if (!grid || !filters.length) return;

        function render(category) {
            grid.innerHTML = "";
            const items = category === "todos" ? muralItems : muralItems.filter(function (item) { return item.category === category; });
            items.forEach(function (item) {
                const card = document.createElement("article");
                card.className = "mural-card";
                card.dataset.category = item.category;
                card.innerHTML = '<span class="mural-symbol" aria-hidden="true">' + escapeHTML(item.symbol) + '</span><span class="tag">' + escapeHTML(categoryLabel(item.category)) + '</span><h3>' + escapeHTML(item.title) + '</h3><p>' + escapeHTML(item.text) + '</p>' + (item.quote ? "<blockquote>“" + escapeHTML(item.quote) + "”</blockquote>" : "");
                grid.appendChild(card);
            });
            announce(items.length + " cartões exibidos no mural.");
        }

        filters.forEach(function (button) {
            button.addEventListener("click", function () {
                const category = button.getAttribute("data-mural-filter");
                filters.forEach(function (other) {
                    const active = other === button;
                    other.classList.toggle("active", active);
                    other.setAttribute("aria-pressed", String(active));
                });
                render(category);
            });
        });

        render("todos");
    }

    function categoryLabel(category) {
        return { dica: "Dica", reflexao: "Reflexão", barreira: "Barreira", curiosidade: "Curiosidade" }[category] || category;
    }

    // ======================================================
    // QUIZ
    // ======================================================
    function initQuiz() {
        const content = qs("#quizContent");
        const counter = qs("#quizCounter");
        const scoreLabel = qs("#quizScore");
        const progress = qs("#quizProgress");
        if (!content || !counter || !scoreLabel || !progress) return;

        let current = 0;
        let score = 0;
        let answered = false;

        function renderQuestion() {
            answered = false;
            const item = quizQuestions[current];
            counter.textContent = "Pergunta " + (current + 1) + " de " + quizQuestions.length;
            scoreLabel.textContent = score + " pontos";
            progress.style.width = (current / quizQuestions.length * 100) + "%";
            content.innerHTML = "";

            const wrapper = document.createElement("div");
            wrapper.className = "quiz-question";
            const title = document.createElement("h3");
            title.id = "quizQuestionText";
            title.textContent = item.question;
            wrapper.appendChild(title);

            const options = document.createElement("div");
            options.className = "quiz-options";
            options.setAttribute("role", "group");
            options.setAttribute("aria-labelledby", "quizQuestionText");

            item.options.forEach(function (option, index) {
                const button = document.createElement("button");
                button.type = "button";
                button.className = "quiz-option";
                button.innerHTML = '<span class="option-letter" aria-hidden="true">' + String.fromCharCode(65 + index) + '</span><span>' + escapeHTML(option) + "</span>";
                button.addEventListener("click", function () { answer(index); });
                options.appendChild(button);
            });

            wrapper.appendChild(options);
            content.appendChild(wrapper);
            const first = qs(".quiz-option", content);
            if (first && current > 0) first.focus();
        }

        function answer(selected) {
            if (answered) return;
            answered = true;
            const item = quizQuestions[current];
            const correct = selected === item.correct;
            if (correct) score += 100;
            const buttons = qsa(".quiz-option", content);
            buttons.forEach(function (button, index) {
                button.disabled = true;
                if (index === item.correct) button.classList.add("correct");
                if (index === selected && !correct) button.classList.add("incorrect");
            });

            scoreLabel.textContent = score + " pontos";
            const feedback = document.createElement("div");
            feedback.className = "quiz-feedback";
            feedback.setAttribute("role", "status");
            feedback.innerHTML = '<h4>' + (correct ? "✅ Resposta correta" : "❌ Resposta incorreta") + '</h4><p>' + escapeHTML(item.explanation) + "</p>";
            content.appendChild(feedback);

            const next = document.createElement("button");
            next.type = "button";
            next.className = "button button-primary quiz-next";
            next.textContent = current === quizQuestions.length - 1 ? "Ver resultado" : "Próxima pergunta";
            next.addEventListener("click", function () {
                current += 1;
                if (current >= quizQuestions.length) renderResult();
                else renderQuestion();
            });
            content.appendChild(next);
            progress.style.width = ((current + 1) / quizQuestions.length * 100) + "%";
            next.focus();
        }

        function renderResult() {
            counter.textContent = "Quiz concluído";
            scoreLabel.textContent = score + " pontos";
            progress.style.width = "100%";
            const percentage = Math.round((score / (quizQuestions.length * 100)) * 100);
            let message = "Você já encontrou bons pontos para revisar.";
            if (percentage >= 90) message = "Excelente domínio dos conceitos apresentados.";
            else if (percentage >= 70) message = "Bom resultado. Alguns detalhes ainda podem ser revisados.";
            else if (percentage >= 50) message = "Você entendeu a base, mas vale revisar as boas práticas e as WCAG.";

            content.innerHTML = '<div class="quiz-result"><span class="tag">Resultado final</span><div class="result-score">' + percentage + '%</div><h3>' + escapeHTML(message) + '</h3><p>Você marcou ' + score + " de " + (quizQuestions.length * 100) + ' pontos.</p><button class="button button-primary" id="quizRestart" type="button">Reiniciar quiz</button></div>';
            const restart = qs("#quizRestart");
            restart.addEventListener("click", function () {
                current = 0;
                score = 0;
                renderQuestion();
            });
            restart.focus();
        }

        renderQuestion();
    }

    // ======================================================
    // INTERAÇÕES
    // ======================================================
    function initMindmap() {
        const detail = qs("#mindmapDetail");
        const nodes = qsa(".mind-node");
        if (!detail || !nodes.length) return;

        nodes.forEach(function (node) {
            node.setAttribute("aria-pressed", "false");
            node.addEventListener("click", function () {
                nodes.forEach(function (other) { other.setAttribute("aria-pressed", String(other === node)); });
                detail.innerHTML = '<span class="tag">Conceito selecionado</span><h3>' + escapeHTML(node.getAttribute("data-mind-title")) + '</h3><p>' + escapeHTML(node.getAttribute("data-mind-description")) + "</p>";
            });
        });
    }

    function initDialogControls() {
        qsa("[data-close-dialog]").forEach(function (button) {
            button.addEventListener("click", function () {
                closeDialog(qs("#" + button.getAttribute("data-close-dialog")));
            });
        });

        qsa("dialog").forEach(function (dialog) {
            dialog.addEventListener("close", function () {
                document.body.classList.remove("no-scroll");
            });
            dialog.addEventListener("click", function (event) {
                if (event.target === dialog) closeDialog(dialog);
            });
        });
    }

    function initAnimations() {
        const items = qsa(".reveal");
        if (!items.length) return;
        if (reducedMotionEnabled() || !("IntersectionObserver" in window)) {
            items.forEach(function (item) { item.classList.add("visible"); });
            return;
        }
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
        items.forEach(function (item) { observer.observe(item); });
    }

    function reducedMotionEnabled() {
        const settings = window.AccessibilityManager && typeof window.AccessibilityManager.getSettings === "function" ? window.AccessibilityManager.getSettings() : null;
        if (settings && settings.reducedMotion) return true;
        return Boolean(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    }

    function initExternalLinkHints() {
        qsa('a[target="_blank"]').forEach(function (link) {
            if (!link.getAttribute("rel")) link.setAttribute("rel", "noopener noreferrer");
        });
    }

    function initSearchTargetStyle() {
        const style = document.createElement("style");
        style.textContent = ".search-target{outline:4px solid var(--focus-color);outline-offset:-4px;animation:searchPulse .7s ease 2}@keyframes searchPulse{50%{box-shadow:inset 0 0 0 999px color-mix(in srgb,var(--focus-color) 7%,transparent)}}@media(prefers-reduced-motion:reduce){.search-target{animation:none}}";
        document.head.appendChild(style);
    }

    // ======================================================
    // INICIALIZAÇÃO
    // ======================================================
    function init() {
        initMenu();
        initSectionNavigation();
        initTheme();
        initSearch();
        initGallery();
        initTimeline();
        initMural();
        initQuiz();
        initMindmap();
        initDialogControls();
        initExternalLinkHints();
        initSearchTargetStyle();
        initAnimations();

        window.SiteApp = {
            showToast: showToast,
            timelineItems: timelineItems,
            muralItems: muralItems,
            quizQuestions: quizQuestions
        };
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }
})();
