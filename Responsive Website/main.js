/*================== scroll reveal ========================*/
ScrollReveal({
  distance: "70px",
  duration: 3000,
  delay: 20,
});

ScrollReveal().reveal(".home-content, heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .services-container, .contact form", {
  origin: "buttom",
});
ScrollReveal().reveal(".home-content h1, .education", { origin: "left" });
ScrollReveal().reveal(".home-content p", { origin: "right" });
