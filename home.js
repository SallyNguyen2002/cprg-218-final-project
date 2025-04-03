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
  