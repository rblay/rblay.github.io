const ORDER = ["wim", "rg", "uso", "ao"];
const STORAGE_KEY = "theme";
const THEME_HINT_KEY = "theme-hint-seen";
const DEFAULT_THEME = "wim";

const root = document.documentElement;
const toggle = document.querySelector(".theme-ball");
const toggleWrap = document.querySelector(".theme-ball-wrap");
const hint = document.querySelector(".theme-ball-hint");

function applyTheme(theme) {
  const next = ORDER.includes(theme) ? theme : DEFAULT_THEME;
  root.setAttribute("data-theme", next);
}

function nextTheme(current) {
  const index = ORDER.indexOf(current);
  if (index === -1) return DEFAULT_THEME;
  return ORDER[(index + 1) % ORDER.length];
}

const saved = localStorage.getItem(STORAGE_KEY);
applyTheme(saved || DEFAULT_THEME);

function dismissThemeHint() {
  if (toggleWrap) {
    toggleWrap.classList.remove("show-theme-hint");
  }

  if (hint) {
    hint.hidden = true;
  }
}

if (toggle) {
  if (!localStorage.getItem(THEME_HINT_KEY)) {
    localStorage.setItem(THEME_HINT_KEY, "true");

    if (toggleWrap) {
      toggleWrap.classList.add("show-theme-hint");
    }

    if (hint) {
      hint.hidden = false;
    }

    window.setTimeout(dismissThemeHint, 4800);
  }

  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || DEFAULT_THEME;
    const updated = nextTheme(current);
    applyTheme(updated);
    localStorage.setItem(STORAGE_KEY, updated);
    dismissThemeHint();
  });

  toggle.addEventListener("blur", () => {
    if (!toggleWrap?.classList.contains("show-theme-hint")) {
      return;
    }

    window.setTimeout(() => {
      if (document.activeElement !== toggle) {
        dismissThemeHint();
      }
    }, 120);
  });
}
