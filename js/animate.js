function initReveal() {
  const els = document.querySelectorAll("[data-reveal]");
  if (!els.length) return;

  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.01, rootMargin: "0px 0px 80px 0px" }
  );

  els.forEach((el) => observer.observe(el));

  // Safety net: never leave content permanently hidden if the observer
  // is slow/unsupported in a given environment.
  window.setTimeout(() => {
    els.forEach((el) => el.classList.add("is-visible"));
    observer.disconnect();
  }, 2500);
}

function initFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!question || !answer) return;

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      document.querySelectorAll(".faq-item.is-open").forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove("is-open");
          openItem.querySelector(".faq-answer").style.maxHeight = null;
        }
      });
      item.classList.toggle("is-open", !isOpen);
      answer.style.maxHeight = !isOpen ? `${answer.scrollHeight}px` : null;
    });
  });
}

function initProductGallery() {
  const main = document.getElementById("galleryMain");
  const thumbs = document.querySelectorAll(".gallery-thumbs button");
  if (!main || !thumbs.length) return;

  thumbs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const src = btn.getAttribute("data-src");
      if (!src) return;
      main.src = src;
      thumbs.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
    });
  });
}

function initProductTabs() {
  const tabs = document.querySelectorAll(".product-tabs a");
  if (!tabs.length) return;

  const sections = Array.from(tabs)
    .map((tab) => document.querySelector(tab.getAttribute("href")))
    .filter(Boolean);
  if (!sections.length) return;

  const setActive = (id) => {
    tabs.forEach((tab) => tab.classList.toggle("is-active", tab.getAttribute("href") === `#${id}`));
  };

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-120px 0px -70% 0px", threshold: 0 }
  );
  sections.forEach((section) => observer.observe(section));
}

function initHeroSlider() {
  const slider = document.getElementById("heroSlider");
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll(".hero-slide"));
  const dots = Array.from(slider.querySelectorAll(".hero-dot"));
  const prevBtn = slider.querySelector(".hero-arrow-prev");
  const nextBtn = slider.querySelector(".hero-arrow-next");
  if (slides.length < 2) return;

  let current = slides.findIndex((s) => s.classList.contains("is-active"));
  if (current < 0) current = 0;
  let timer = null;

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("is-active", i === current));
    dots.forEach((d, i) => d.classList.toggle("is-active", i === current));
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(next, 6000);
  }
  function stopAutoplay() {
    if (timer) clearInterval(timer);
  }

  if (nextBtn) nextBtn.addEventListener("click", () => { next(); startAutoplay(); });
  if (prevBtn) prevBtn.addEventListener("click", () => { prev(); startAutoplay(); });
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => { goTo(i); startAutoplay(); });
  });

  slider.addEventListener("mouseenter", stopAutoplay);
  slider.addEventListener("mouseleave", startAutoplay);

  startAutoplay();
}

document.addEventListener("DOMContentLoaded", () => {
  initReveal();
  initFaq();
  initProductGallery();
  initProductTabs();
  initHeroSlider();
});
