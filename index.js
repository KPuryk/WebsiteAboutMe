const viewBtn = document.getElementById('view-work-btn');
if (viewBtn) {
  viewBtn.addEventListener('click', () => {
    document.getElementById('projects')
      .scrollIntoView({ behavior: 'smooth' });
  });
}

const emailBtn = document.querySelector('.secondary-button');
if (emailBtn) {
  emailBtn.addEventListener('click', () => {
    window.location.href = "mailto:Kostya2005igg@gmail.com";
  });
}

const toggle = document.getElementById("theme-toggle");
if (toggle) {
  toggle.addEventListener("change", () => {
    document.documentElement.classList.toggle("dark-mode");
  });
}


const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector(".header-navigation");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});