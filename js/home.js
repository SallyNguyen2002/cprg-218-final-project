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

  if (typeof flatpickr === 'undefined') {
    console.error("Flatpickr is not loaded!");
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


  // Display real-time weather
  const apiKey = '4d9c50289f80ce03434f5bb52255e7c0';
  const city = 'Cancun';
  const weatherElement = document.getElementById('weather');

  async function fetchWeather() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      const temperature = Math.round(data.main.temp);
      const description = data.weather[0].description;

      weatherElement.textContent = `${temperature}°C ${description}`;
    } catch (error) {
      console.error('Weather fetch error:', error);
      weatherElement.textContent = 'Weather unavailable';
    }
  }

  fetchWeather();


  // Check availability option
  document.getElementById("checkAvailabilityBtn").addEventListener("click", () => {
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;
  
    if (!checkin || !checkout || !guests) {
      alert("Please fill in all fields before proceeding.");
      return;
    }
  
    // Store data to use on the next page
    const query = new URLSearchParams({
      checkin,
      checkout,
      guests
    }).toString();
  
    window.location.href = `available.html?${query}`;
  });
  
});
