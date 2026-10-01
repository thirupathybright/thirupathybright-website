function initNav() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const navPrimary = document.querySelector(".nav-primary");

  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (toggle && navPrimary) {
    toggle.addEventListener("click", () => {
      const isOpen = navPrimary.classList.toggle("is-open");
      toggle.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    navPrimary.querySelectorAll(".has-dropdown > .nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) return;
        e.preventDefault();
        link.closest(".has-dropdown").classList.toggle("is-open");
      });
    });
  }

  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link[data-page]").forEach((link) => {
    if (link.getAttribute("data-page") === path) link.classList.add("is-active");
  });
}

if (document.querySelector("[data-include]")) {
  document.addEventListener("partials:loaded", initNav);
} else if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNav);
} else {
  initNav();
}
