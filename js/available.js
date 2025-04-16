document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const checkin = params.get("checkin");
  const checkout = params.get("checkout");
  const guests = parseInt(params.get("guests"), 10);

  const dateRange = document.getElementById("date-range");
  if (dateRange && checkin && checkout && !isNaN(guests)) {
    dateRange.textContent = `From ${checkin} to ${checkout} for ${guests} guest(s)`;
  }

  const rooms = [
    {
      name: "Ocean View Deluxe Room",
      image: "img/photos/single.jpg",
      desc: "Stunning ocean views from your private balcony.",
      weekday: 110,
      weekend: 130,
      minGuests: 1,
      maxGuests: 2
    },
    {
      name: "Beachfront Suite",
      image: "img/photos/king.jpg",
      desc: "Step directly onto the sand from your spacious suite.",
      weekday: 160,
      weekend: 190,
      minGuests: 1,
      maxGuests: 2
    },
    {
      name: "Garden View Family Room",
      image: "img/photos/hotel-1191726_1920.jpg",
      desc: "Perfect for families with garden views and extra space.",
      weekday: 160,
      weekend: 190,
      minGuests: 3,
      maxGuests: 5
    },
    {
      name: "Premium Oceanfront Suite with Plunge Pool",
      image: "img/photos/hotel-room-1447201_1920.jpg",
      desc: "Luxury suite with private plunge pool and ocean view.",
      weekday: 200,
      weekend: 250,
      minGuests: 1,
      maxGuests: 2
    },
    {
      name: "Accessible Room",
      image: "img/photos/single.jpg",
      desc: "Comfortable and accessible for all guests.",
      weekday: 180,
      weekend: 210,
      minGuests: 1,
      maxGuests: 2
    }
  ];

  function getPriceBreakdown(checkin, checkout) {
    const start = new Date(`${checkin} 2024`);
    const end = new Date(`${checkout} 2024`);
    let breakdown = [];

    let current = new Date(start);
    while (current < end) {
      const day = current.getDay();
      breakdown.push(day === 0 || day === 6 ? "weekend" : "weekday");
      current.setDate(current.getDate() + 1);
    }

    return breakdown;
  }

  function displayRooms() {
    const container = document.getElementById("room-container");
    if (!container || isNaN(guests)) return;
    const days = getPriceBreakdown(checkin, checkout);

    const eligibleRooms = rooms.filter(
      room => guests >= room.minGuests && guests <= room.maxGuests
    );

    eligibleRooms.forEach(room => {
      const total = days.reduce((sum, type) => {
        return sum + (type === "weekday" ? room.weekday : room.weekend);
      }, 0);

      const card = document.createElement("div");
      card.className = "room-card";
      card.innerHTML = `
        <img src="${room.image}" alt="${room.name}">
        <div class="room-card-content">
          <h2>${room.name}</h2>
          <p>${room.desc}</p>
          <p class="room-price">Weekday: $${room.weekday}, Weekend: $${room.weekend}</p>
          <p class="room-price"><strong>Total: $${total}</strong></p>
        </div>
      `;
      container.appendChild(card);
    });
  }

  displayRooms();
});
