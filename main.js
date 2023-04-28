const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  autoplay: {
    delay: 3000, // time in milliseconds between each slide transition
  },

  pagination: {
    el: ".swiper-pagination",
  },
});
