// ================= MOBILE MENU =================
const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      menu.classList.remove("active");
    }
  });
});

// ================= HEADER SCROLL EFFECT =================
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.style.background =
    window.scrollY > 50 ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0.9)";
});
