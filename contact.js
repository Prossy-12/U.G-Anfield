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
  
  // Highlight Navbar for "Contact" on Scroll
  document.addEventListener("DOMContentLoaded", function () {
    const contactLink = document.querySelector(".nav-link[href='contact.html']");
    window.addEventListener("scroll", () => {
      const section = document.querySelector("section");
      const scrollPosition = window.pageYOffset + 100;
  
      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        contactLink.classList.add("active");
      } else {
        contactLink.classList.remove("active");
      }
    });
  });
  
  // Form Validation and Submission
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    alert("Thank you, " + name + "! Your message has been sent successfully.");
    document.querySelector("form").reset();
  });
  