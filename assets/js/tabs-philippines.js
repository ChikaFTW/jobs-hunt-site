document.addEventListener("DOMContentLoaded", function () {
  // PHILIPPINES TABS WITH <li> LINKS
  const tabLinks = document.querySelectorAll(".philippines-tabs li");
  const tabArticles = document.querySelectorAll(".philippines-content article");

  if (tabLinks.length && tabArticles.length) {
    tabLinks.forEach((tab) => {
      tab.addEventListener("click", function (e) {
        e.preventDefault();

        tabLinks.forEach((t) => t.classList.remove("active"));
        tabArticles.forEach((content) => content.classList.remove("active"));

        this.classList.add("active");
        const targetId = this.querySelector("a").getAttribute("href");
        const targetEl = document.querySelector(targetId);
        if (targetEl) targetEl.classList.add("active");
      });
    });

    // Trigger the first tab on load
    tabLinks[0].click();
  }
  document.addEventListener("DOMContentLoaded", function () {
  const savedLang = localStorage.getItem("lang") || "en";
  document.documentElement.lang = savedLang;
  document.documentElement.dir = (savedLang === "ar") ? "rtl" : "ltr";
});

  // SERVICE TABS WITH .tab-button AND .tab-pane
  const buttons = document.querySelectorAll('.tab-button');
  const panes = document.querySelectorAll('.tab-pane');

  if (buttons.length && panes.length) {
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const target = button.getAttribute('data-tab');

        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        panes.forEach(pane => {
          pane.classList.remove('active');
          if (pane.id === target) {
            pane.classList.add('active');
          }
        });
      });
    });
  }
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add("background-header");
  } else {
    header.classList.remove("background-header");
  }
});

// top button
window.addEventListener("scroll", function () {
    const btn = document.querySelector(".back-to-top");
    if (window.scrollY > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  // Smooth scroll to top
  document.querySelector(".back-to-top").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
