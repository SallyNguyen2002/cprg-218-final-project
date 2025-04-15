window.onload = function () {
  const checkinPicker = flatpickr("#checkin", {
    dateFormat: "M d"
  });

  const checkoutPicker = flatpickr("#checkout", {
    dateFormat: "M d"
  });

  const openCheckinBtn = document.getElementById("openCheckin");
  const openCheckoutBtn = document.getElementById("openCheckout");

  if (openCheckinBtn && checkinPicker) {
    openCheckinBtn.addEventListener("click", () => {
      checkinPicker.open();
    });
  }

  if (openCheckoutBtn && checkoutPicker) {
    openCheckoutBtn.addEventListener("click", () => {
      checkoutPicker.open();
    });
  }

  const guestInput = document.getElementById("guests");
  const guestIcon = document.getElementById("openGuest");
  const guestDropdown = document.getElementById("guestDropdown");

  guestIcon.addEventListener("click", () => {
      guestDropdown.classList.toggle("hidden");
  });

  guestDropdown.querySelectorAll("li").forEach(item => {
      item.addEventListener("click", () => {
      guestInput.value = item.dataset.value;
      guestDropdown.classList.add("hidden");
      });
  });

  // Optional: close dropdown if you click outside
  document.addEventListener("click", (e) => {
      if (!guestIcon.contains(e.target) && !guestDropdown.contains(e.target)) {
      guestDropdown.classList.add("hidden");
      }
  });

};
  
document.addEventListener("DOMContentLoaded", function () {
  // Smaller screen navigation
  const toggle = document.getElementById("nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  toggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });


  // Experience toggle
  const options = document.querySelectorAll('.exp-content-option');
  const image = document.querySelector('#exp-img img');

  options.forEach(option => {
    option.addEventListener('click', () => {
      const newImage = option.getAttribute('data-image');

      // Smooth fade effect
      image.style.opacity = 0;

      setTimeout(() => {
        image.src = newImage;
        image.style.opacity = 1;
      }, 300);

      // Update active state
      options.forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');
    });
  });
