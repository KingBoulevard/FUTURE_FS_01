function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// THEME TOGGLE

const THEME_KEY = "mbm-theme";

function applyStoredTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "dark") {
    document.body.classList.add("dark-theme");
  } else if (stored === "light") {
    document.body.classList.remove("dark-theme");
  }
}

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-theme");
  localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
}

document.addEventListener("DOMContentLoaded", () => {
  applyStoredTheme();

  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", toggleTheme);
  }
});