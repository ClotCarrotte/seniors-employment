document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".lang-switch button");
  const elements = document.querySelectorAll("[data-lang]");

  if (buttons.length === 0) return;

  const savedLang = localStorage.getItem("lang") || "fr";

  function setLanguage(lang) {
    elements.forEach((el) => {
      el.hidden = el.dataset.lang !== lang;
    });

    buttons.forEach((b) =>
      b.classList.toggle("active", b.dataset.lang === lang)
    );

    localStorage.setItem("lang", lang);
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });

  setLanguage(savedLang);
});
