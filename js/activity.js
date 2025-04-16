document.addEventListener("DOMContentLoaded", function () {
  // Buttons
  const relaxationBtn = document.getElementById('btn-relaxation');
  const adventureBtn = document.getElementById('btn-adventure');
  const natureBtn = document.getElementById('btn-nature');
  const cultureBtn = document.getElementById('btn-culture');
  const wildlifeBtn = document.getElementById('btn-wildlife');

  // Sections
  const relaxationSection = document.getElementById('relaxation');
  const adventureSection = document.getElementById('adventure');
  const natureSection = document.getElementById('nature');
  const cultureSection = document.getElementById('culture');
  const wildlifeSection = document.getElementById('wildlife');

  // Function to toggle active class
  function toggleButtons(buttonGroup, activeButton) {
    buttonGroup.forEach(btn => btn.classList.remove('active'));
    activeButton.classList.add('active');
  }

  // Grouping buttons for toggle logic
  const activityBtns = [relaxationBtn, adventureBtn];
  const excursionBtns = [natureBtn, cultureBtn, wildlifeBtn];

  // Default view
  relaxationSection.style.display = 'grid';
  adventureSection.style.display = 'none';
  toggleButtons(activityBtns, relaxationBtn);

  natureSection.style.display = 'grid';
  cultureSection.style.display = 'none';
  wildlifeSection.style.display = 'none';
  toggleButtons(excursionBtns, natureBtn);

  // Activity toggle
  relaxationBtn.addEventListener('click', function () {
    relaxationSection.style.display = 'grid';
    adventureSection.style.display = 'none';
    toggleButtons(activityBtns, relaxationBtn);
  });

  adventureBtn.addEventListener('click', function () {
    relaxationSection.style.display = 'none';
    adventureSection.style.display = 'grid';
    toggleButtons(activityBtns, adventureBtn);
  });

  // Excursion toggle
  natureBtn.addEventListener('click', function () {
    natureSection.style.display = 'grid';
    cultureSection.style.display = 'none';
    wildlifeSection.style.display = 'none';
    toggleButtons(excursionBtns, natureBtn);
  });

  cultureBtn.addEventListener('click', function () {
    natureSection.style.display = 'none';
    cultureSection.style.display = 'grid';
    wildlifeSection.style.display = 'none';
    toggleButtons(excursionBtns, cultureBtn);
  });

  wildlifeBtn.addEventListener('click', function () {
    natureSection.style.display = 'none';
    cultureSection.style.display = 'none';
    wildlifeSection.style.display = 'grid';
    toggleButtons(excursionBtns, wildlifeBtn);
  });
});
