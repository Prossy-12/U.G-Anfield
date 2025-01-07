// Toggle "Read More" for News Articles
document.addEventListener("DOMContentLoaded", function () {
    const readMoreLinks = document.querySelectorAll(".btn-danger");
  
    readMoreLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const cardText = link.previousElementSibling;
        if (link.textContent === "Read More") {
          cardText.style.height = "auto"; // Expands to show full content
          link.textContent = "Show Less";
        } else {
          cardText.style.height = "150px"; // Collapses back
          link.textContent = "Read More";
        }
      });
    });
  });
  
  // Scroll-to-Top Button
  window.addEventListener("scroll", function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  // Highlight "News & Updates" Navbar Link
  document.addEventListener("DOMContentLoaded", function () {
    const newsLink = document.querySelector(".nav-link[href='news.html']");
    window.addEventListener("scroll", () => {
      newsLink.classList.add("active");
    });
  });
  