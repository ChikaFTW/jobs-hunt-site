document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".philippines-tabs li");
  const tabArticles = document.querySelectorAll(".philippines-content article");

  tabLinks.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active
      tabLinks.forEach((t) => t.classList.remove("active"));
      tabArticles.forEach((content) => content.classList.remove("active"));

      // Add active
      this.classList.add("active");
      const targetId = this.querySelector("a").getAttribute("href");
      document.querySelector(targetId).classList.add("active");
    });
  });

  // Optional: Trigger the first tab on load
  if (tabLinks.length) {
    tabLinks[0].click();
  }
});
