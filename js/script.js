// ===== Helpers =====
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  const toggleBtn = document.getElementById("themeToggle");
  toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning 👋";
  if (hour < 18) return "Good afternoon 👋";
  return "Good evening 👋";
}

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  // Set year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Greeting message (JS interactivity feature)
  document.getElementById("greeting").textContent = getGreeting();

  // Theme toggle (JS feature)
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    setTheme(savedTheme);
  } else {
    // default to light
    setTheme("light");
  }

  document.getElementById("themeToggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "light" ? "dark" : "light");
  });

  // Smooth scrolling (JS feature)
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const targetId = a.getAttribute("href");
      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      // Close mobile menu
      navList.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");
  navToggle.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Contact form interaction (JS feature)
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      status.textContent = "Please fill all fields.";
      return;
    }

    // Basic email check (simple)
    if (!email.includes("@") || !email.includes(".")) {
      status.textContent = "Please enter a valid email.";
      return;
    }

    status.textContent = `Thanks, ${name}! Your message is ready (no backend in this assignment). ✅`;
    form.reset();
  });
});
