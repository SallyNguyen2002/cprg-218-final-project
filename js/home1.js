document.addEventListener("DOMContentLoaded", function () {

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
      image: "/img/photos/hotel-1191726_1920.jpg"
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
      image: "/img/photos/hotel-room-1447201_1920.jpg"
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
      image: "/img/photos/hotel-1191726_1920.jpg"
    }
  };    

  document.querySelectorAll('#room-content .room-option').forEach(option => {
    const link = option.querySelector('a');
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const roomName = option.querySelector('h4').textContent.trim();

      if (rooms[roomName]) {
        const room = rooms[roomName];
        modalTitle.textContent = roomName;
        modalDescription.innerHTML = room.description;
        modalImage.src = room.image;
        modal.style.display = 'block';
      }
    });
  });

  closeButton.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});