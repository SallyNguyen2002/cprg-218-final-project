document.addEventListener('DOMContentLoaded', () => {
  const testimonials = document.querySelectorAll('.testimonial');
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((el, i) => {
      el.classList.toggle('active', i === index);
    });
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

  // Initial display
  showTestimonial(currentIndex);

  // Auto-switch every 6 seconds
  setInterval(nextTestimonial, 7000);
});
