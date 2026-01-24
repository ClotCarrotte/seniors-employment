document.addEventListener("DOMContentLoaded", () => {
  // --- Language switch setup ---
  const buttons = document.querySelectorAll(".lang-switch button");
  const elements = document.querySelectorAll("[data-lang]");

  if (buttons.length === 0) return;

  const savedLang = localStorage.getItem("lang") || "fr";

  // --- Language switching logic ---
  function setLanguage(lang) {
    elements.forEach((el) => {
      el.hidden = el.dataset.lang !== lang;
    });

    buttons.forEach((b) =>
      b.classList.toggle("active", b.dataset.lang === lang),
    );

    localStorage.setItem("lang", lang);
  }

  // --- Language button events ---
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });

  setLanguage(savedLang);

  // --- Language switch visibility on scroll ---
  const langSwitch = document.querySelector(".lang-switch");

  function updateLangSwitchOnScroll() {
    if (!langSwitch) return;

    const maxScroll = 50;
    const scroll = Math.min(window.scrollY, maxScroll);
    const progress = scroll / maxScroll;

    langSwitch.style.opacity = `${1 - progress}`;
    langSwitch.style.transform = `translateY(${-10 * progress}px)`;
    langSwitch.style.pointerEvents = progress > 0.9 ? "none" : "auto";
  }

  updateLangSwitchOnScroll();
  window.addEventListener("scroll", updateLangSwitchOnScroll);
});
