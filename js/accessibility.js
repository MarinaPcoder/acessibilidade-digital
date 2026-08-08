(function () {
    "use strict";

    // ======================================================
    // CONFIGURAÇÃO
    // ======================================================
    const STORAGE_KEY = "acessibilidadeDigital.settings.v1";
    const DEFAULTS = {
        fontScale: 1,
        letterSpacing: 0,
        lineSpacing: 1.6,
        dyslexiaFont: false,
        readableMode: false,
        highlightLinks: false,
        highlightButtons: false,
        highlightClickables: false,
        strongFocus: false,
        keyboardMode: false,
        reducedMotion: false
    };

    // ======================================================
    // ESTADO
    // ======================================================
    let accessibilitySettings = { ...DEFAULTS };
    let panel = null;
    let backdrop = null;
    let lastFocusedElement = null;

    // ======================================================
    // LOCALSTORAGE
    // ======================================================
    function loadSettings() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                accessibilitySettings = { ...DEFAULTS, ...parsed };
            } else if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                accessibilitySettings.reducedMotion = true;
            }
        } catch (error) {
            accessibilitySettings = { ...DEFAULTS };
        }
    }

    function saveSettings() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(accessibilitySettings));
        } catch (error) {
            // O site continua funcionando mesmo se o navegador bloquear armazenamento local.
        }
    }

    function announce(message) {
        const live = document.getElementById("siteAnnouncement");
        if (!live) return;
        live.textContent = "";
        window.setTimeout(function () {
            live.textContent = message;
        }, 30);
    }

    // ======================================================
    // FONTE
    // ======================================================
    function changeFontScale(delta) {
        accessibilitySettings.fontScale = clamp(round(accessibilitySettings.fontScale + delta, 2), 0.85, 1.5);
        applySettings();
        persistAndSync("Tamanho da fonte ajustado para " + Math.round(accessibilitySettings.fontScale * 100) + "%.");
    }

    function resetFontScale() {
        accessibilitySettings.fontScale = DEFAULTS.fontScale;
        applySettings();
        persistAndSync("Tamanho da fonte restaurado.");
    }

    // ======================================================
    // ESPAÇAMENTO
    // ======================================================
    function changeLetterSpacing(delta) {
        accessibilitySettings.letterSpacing = clamp(round(accessibilitySettings.letterSpacing + delta, 3), 0, 0.12);
        applySettings();
        persistAndSync("Espaçamento entre letras ajustado.");
    }

    function resetLetterSpacing() {
        accessibilitySettings.letterSpacing = DEFAULTS.letterSpacing;
        applySettings();
        persistAndSync("Espaçamento entre letras restaurado.");
    }

    function changeLineSpacing(delta) {
        accessibilitySettings.lineSpacing = clamp(round(accessibilitySettings.lineSpacing + delta, 2), 1.3, 2.2);
        applySettings();
        persistAndSync("Espaçamento entre linhas ajustado.");
    }

    function resetLineSpacing() {
        accessibilitySettings.lineSpacing = DEFAULTS.lineSpacing;
        applySettings();
        persistAndSync("Espaçamento entre linhas restaurado.");
    }

    // ======================================================
    // MODOS DE LEITURA
    // ======================================================
    function applySettings() {
        const root = document.documentElement;
        root.style.setProperty("--font-scale", String(accessibilitySettings.fontScale));
        root.style.setProperty("--letter-spacing", accessibilitySettings.letterSpacing + "em");
        root.style.setProperty("--line-height", String(accessibilitySettings.lineSpacing));

        toggleRootClass("a11y-dyslexia", accessibilitySettings.dyslexiaFont);
        toggleRootClass("a11y-readable", accessibilitySettings.readableMode);
        toggleRootClass("a11y-highlight-links", accessibilitySettings.highlightLinks);
        toggleRootClass("a11y-highlight-buttons", accessibilitySettings.highlightButtons);
        toggleRootClass("a11y-highlight-clickables", accessibilitySettings.highlightClickables);
        toggleRootClass("a11y-strong-focus", accessibilitySettings.strongFocus);
        toggleRootClass("a11y-keyboard", accessibilitySettings.keyboardMode);
        toggleRootClass("a11y-reduced-motion", accessibilitySettings.reducedMotion);

        const keyboardHelp = document.getElementById("keyboardHelp");
        if (keyboardHelp) keyboardHelp.hidden = !accessibilitySettings.keyboardMode;
    }

    // ======================================================
    // DESTAQUES
    // ======================================================
    function toggleSetting(name, checked) {
        if (!Object.prototype.hasOwnProperty.call(accessibilitySettings, name)) return;
        accessibilitySettings[name] = Boolean(checked);
        applySettings();
        persistAndSync(settingLabel(name) + (checked ? " ativado." : " desativado."));
    }

    // ======================================================
    // FOCO
    // ======================================================
    function getFocusable(container) {
        if (!container) return [];
        return Array.from(container.querySelectorAll(
            'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )).filter(function (element) {
            return !element.hasAttribute("hidden") && element.offsetParent !== null;
        });
    }

    function trapPanelFocus(event) {
        if (!panel || panel.hidden || event.key !== "Tab") return;
        const focusable = getFocusable(panel);
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }

    // ======================================================
    // TECLADO
    // ======================================================
    function handleGlobalKeydown(event) {
        if (event.key === "Escape" && panel && !panel.hidden) {
            closePanel();
            return;
        }
        trapPanelFocus(event);
    }

    // ======================================================
    // REDUÇÃO DE MOVIMENTO
    // ======================================================
    function syncSystemMotionPreference() {
        if (!window.matchMedia) return;
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (localStorage.getItem(STORAGE_KEY)) return;
        accessibilitySettings.reducedMotion = media.matches;
        applySettings();
    }

    // ======================================================
    // PAINEL
    // ======================================================
    function openPanel() {
        if (!panel) return;
        lastFocusedElement = document.activeElement;
        panel.hidden = false;
        if (backdrop) backdrop.hidden = false;
        document.body.classList.add("no-scroll");
        syncControls();
        const focusable = getFocusable(panel);
        if (focusable.length) focusable[0].focus();
        announce("Painel de acessibilidade aberto.");
    }

    function closePanel() {
        if (!panel || panel.hidden) return;
        panel.hidden = true;
        if (backdrop) backdrop.hidden = true;
        document.body.classList.remove("no-scroll");
        if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
            lastFocusedElement.focus();
        }
        announce("Painel de acessibilidade fechado.");
    }

    function resetAll() {
        accessibilitySettings = { ...DEFAULTS };
        if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            accessibilitySettings.reducedMotion = true;
        }
        applySettings();
        saveSettings();
        syncControls();
        announce("Todas as configurações de acessibilidade foram restauradas.");
    }

    function syncControls() {
        document.querySelectorAll("[data-a11y-toggle]").forEach(function (input) {
            const key = input.getAttribute("data-a11y-toggle");
            input.checked = Boolean(accessibilitySettings[key]);
        });

        const keyboardHelp = document.getElementById("keyboardHelp");
        if (keyboardHelp) keyboardHelp.hidden = !accessibilitySettings.keyboardMode;
    }

    function handleAction(action) {
        const actions = {
            "font-decrease": function () { changeFontScale(-0.1); },
            "font-reset": resetFontScale,
            "font-increase": function () { changeFontScale(0.1); },
            "letter-decrease": function () { changeLetterSpacing(-0.01); },
            "letter-reset": resetLetterSpacing,
            "letter-increase": function () { changeLetterSpacing(0.01); },
            "line-decrease": function () { changeLineSpacing(-0.1); },
            "line-reset": resetLineSpacing,
            "line-increase": function () { changeLineSpacing(0.1); }
        };
        if (actions[action]) actions[action]();
    }

    function persistAndSync(message) {
        saveSettings();
        syncControls();
        announce(message);
    }

    function settingLabel(name) {
        const labels = {
            dyslexiaFont: "Fonte amigável para leitura",
            readableMode: "Modo de leitura facilitada",
            highlightLinks: "Destaque de links",
            highlightButtons: "Destaque de botões",
            highlightClickables: "Destaque de elementos clicáveis",
            strongFocus: "Foco visual reforçado",
            keyboardMode: "Modo de navegação por teclado",
            reducedMotion: "Redução de animações"
        };
        return labels[name] || "Configuração";
    }

    function toggleRootClass(className, enabled) {
        document.documentElement.classList.toggle(className, Boolean(enabled));
    }

    function clamp(value, min, max) {
        return Math.min(max, Math.max(min, value));
    }

    function round(value, decimals) {
        const factor = Math.pow(10, decimals);
        return Math.round(value * factor) / factor;
    }

    // ======================================================
    // INICIALIZAÇÃO
    // ======================================================
    function init() {
        panel = document.getElementById("accessibilityPanel");
        backdrop = document.getElementById("accessibilityBackdrop");

        loadSettings();
        syncSystemMotionPreference();
        applySettings();
        syncControls();

        const openButton = document.getElementById("accessibilityOpen");
        const closeButton = document.getElementById("accessibilityClose");
        const resetButton = document.getElementById("accessibilityReset");

        if (openButton) openButton.addEventListener("click", openPanel);
        if (closeButton) closeButton.addEventListener("click", closePanel);
        if (backdrop) backdrop.addEventListener("click", closePanel);
        if (resetButton) resetButton.addEventListener("click", resetAll);

        document.querySelectorAll("[data-a11y-action]").forEach(function (button) {
            button.addEventListener("click", function () {
                handleAction(button.getAttribute("data-a11y-action"));
            });
        });

        document.querySelectorAll("[data-a11y-toggle]").forEach(function (input) {
            input.addEventListener("change", function () {
                toggleSetting(input.getAttribute("data-a11y-toggle"), input.checked);
            });
        });

        document.addEventListener("keydown", handleGlobalKeydown);
    }

    window.AccessibilityManager = {
        init: init,
        openPanel: openPanel,
        closePanel: closePanel,
        reset: resetAll,
        getSettings: function () { return { ...accessibilitySettings }; }
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }
})();
