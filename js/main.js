/**
 * Shared site behavior: theme persistence + mobile nav + form helper + reveal.
 */
(function () {
  const root = document.documentElement;
  const THEME_KEY = "color-theme";

  function preferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem(THEME_KEY, theme);
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    });
  }

  // Apply early preference (also set in <head> inline script for FOUC)
  applyTheme(preferredTheme());

  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = root.classList.contains("dark") ? "light" : "dark";
      applyTheme(next);
    });
  });

  // Mobile menu
  const menuBtn = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menu.setAttribute("aria-hidden", open ? "false" : "true");
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-hidden", "true");
      });
    });
  }

  // Contact form → mailto (works on pure static GitHub Pages)
  const form = document.querySelector("[data-contact-form]");
  if (form) {
    const status = document.querySelector("[data-form-status]");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const subject = String(data.get("subject") || "Website inquiry").trim();
      const message = String(data.get("message") || "").trim();

      if (!name || !email || !message) {
        if (status) status.textContent = "Please fill in name, email, and message.";
        return;
      }

      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        message,
      ].join("\n");

      const mailto =
        "mailto:lokesh@nitc.ac.in" +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);

      if (status) {
        status.textContent = "Opening your email client…";
      }

      window.location.href = mailto;
      form.reset();
    });
  }

  // Scroll reveal
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const els = document.querySelectorAll(".reveal");
    if (els.length && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      els.forEach((el) => io.observe(el));
    } else {
      els.forEach((el) => el.classList.add("visible"));
    }
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
  }
})();
