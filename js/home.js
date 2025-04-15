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

