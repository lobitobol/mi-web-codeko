// Espera que todo el contenido de la página se cargue
// script.js
window.addEventListener("load", () => {
  // animación del logo y hero
  const heroContent = document.querySelector(".hero-content");
  heroContent.classList.add("visible");

  // animación del nav
  const navItems = document.querySelectorAll(".nav-links li");
  navItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("visible");
    }, 200 * index); // retraso incremental de 0.2s
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const headerHeight = document.querySelector("#header").offsetHeight;

  if (window.scrollY > headerHeight -400) { 
    // cuando baja más allá del header
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
  const wrapper = document.getElementById('sn-parallax-wrapper');
  const bg      = document.getElementById('sn-bg-parallax');
  let tx = 0, ty = 0, cx = 0, cy = 0;
 
  wrapper.addEventListener('mousemove', e => {
    const r = wrapper.getBoundingClientRect();
    tx = (e.clientX - r.left) / r.width  - 0.5;
    ty = (e.clientY - r.top)  / r.height - 0.5;
  });
 
  wrapper.addEventListener('mouseleave', () => { tx = 0; ty = 0; });
 
  (function loop() {
    cx += (tx - cx) * 0.055;
    cy += (ty - cy) * 0.055;
    bg.style.transform = `translate(${cx * 32}px, ${cy * 22}px) scale(1.1)`;
    requestAnimationFrame(loop);
  })();

  