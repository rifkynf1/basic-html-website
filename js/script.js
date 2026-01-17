// js/script.js

// 1. Konfigurasi Tailwind
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
      },
      colors: {
        slate: {
          850: "#1e293b", // Custom color dari kode aslimu
          950: "#020617", // Custom color dari kode aslimu
        },
      },
    },
  },
};

// 2. Logic Toggle Dark Mode
function toggleTheme() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }
}

// 3. Cek Preferensi Awal (Jalankan saat load)
// Kita gunakan IIFE (Immediately Invoked Function Expression) atau logic langsung
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
