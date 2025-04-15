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


  // Display room modal
  const modal = document.getElementById('room-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalImage = document.getElementById('modal-image');
  const closeButton = document.querySelector('.close-button');

  const rooms = {
    "Ocean View Deluxe Room": {
      description: `
        <p><strong>Indulge in stunning panoramic views of the ocean from your private balcony.</strong> These rooms offer a perfect blend of comfort and style.</p>
        <ul>
          <li>King-sized bed</li>
          <li>Private balcony with ocean view</li>
          <li>En-suite bathroom with rain shower</li>
          <li>Seating area</li>
          <li>Complimentary Wi-Fi</li>
          <li>Flat-screen TV</li>
          <li>Mini-bar</li>
        </ul>
      `,
      image: "../img/photos/hotel-1191726_1920.jpg"
    },
    "Beachfront Suite": {
      description: `
        <p><strong>Step directly onto the sand from your spacious suite.</strong> Enjoy the ultimate beachfront experience with added luxury and privacy.</p>
        <ul>
          <li>King-sized bed</li>
          <li>Separate living area</li>
          <li>Private terrace with direct beach access</li>
          <li>En-suite bathroom with soaking tub and separate shower</li>
          <li>Dining area</li>
          <li>Complimentary Wi-Fi</li>
          <li>Multiple flat-screen TVs</li>
          <li>Mini-bar</li>
        </ul>
      `,
      image: "../img/photos/hotel-room-1447201_1920.jpg"
    },
    "Garden View Family Room": {
      description: `
        <p><strong>Perfect for families, these rooms offer ample space and a tranquil view of our lush gardens.</strong></p>
        <ul>
          <li>Two double beds</li>
          <li>Private balcony with garden view</li>
          <li>En-suite bathroom</li>
          <li>Seating area</li>
          <li>Complimentary Wi-Fi</li>
          <li>Flat-screen TV</li>
          <li>Mini-bar</li>
        </ul>
      `,
      image: "../img/photos/hotel-1191726_1920.jpg"
    }
  };    

