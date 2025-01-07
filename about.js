// Scroll-to-Top Button
window.addEventListener("scroll", function () {
    const scrollToTopButton = document.getElementById("scrollToTopBtn");
    if (window.pageYOffset > 300) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  // Highlight Navbar on Scroll
  document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.querySelector(".nav-link[href='about.html']");
    window.addEventListener("scroll", () => {
      const section = document.querySelector("section");
      const scrollPosition = window.pageYOffset + 100;
  
      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        aboutLink.classList.add("active");
      } else {
        aboutLink.classList.remove("active");
      }
    });
  });
  
  // Welcome Popup
  window.onload = function () {
    setTimeout(() => {
      alert("Welcome to UG Anfield's About Us page! Learn more about our vision, mission, and core values.");
    }, 800);
  };
  