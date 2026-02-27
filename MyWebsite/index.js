document.getElementById('view-work-btn')
  .addEventListener('click', () => {
    document.getElementById('projects')
      .scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.secondary-button')
  .addEventListener('click', () => {
    window.location.href = "mailto:Kostya2005igg@gmail.com";
});


/*const toggle = document.getElementById("theme-toggle");

*toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
}); */