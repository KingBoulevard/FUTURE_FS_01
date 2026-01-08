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

  const toggles = document.querySelectorAll(".theme-toggle-button, .menu-theme-toggle");
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", toggleTheme);
  });

  // Close menu when clicking on the blurred backdrop (left half of screen)
  document.addEventListener("click", (e) => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    if (menu && menu.classList.contains("open")) {
      // Check if click is on the left half of the screen (backdrop area)
      const clickX = e.clientX;
      const screenWidth = window.innerWidth;
      if (clickX < screenWidth / 2 && !menu.contains(e.target) && !icon.contains(e.target)) {
        toggleMenu();
      }
    }
  });
});