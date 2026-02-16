const ORDER = ["wim", "rg", "uso", "ao"];
const STORAGE_KEY = "theme";
const DEFAULT_THEME = "wim";

const root = document.documentElement;
const toggle = document.querySelector(".theme-ball");

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

if (toggle) {
  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || DEFAULT_THEME;
    const updated = nextTheme(current);
    applyTheme(updated);
    localStorage.setItem(STORAGE_KEY, updated);
  });
}
