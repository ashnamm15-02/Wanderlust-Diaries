// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {
  mainNav.classList.toggle("open");
  const isOpen = mainNav.classList.contains("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after selecting a section (useful on phones)
const navLinks = document.querySelectorAll(".nav a");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Update the embedded Google Map when a destination is selected
const mapFrame = document.getElementById("mapFrame");
const directionsLink = document.getElementById("directionsLink");
const placeButtons = document.querySelectorAll(".place-button");
const mapLinks = document.querySelectorAll(".map-link");

function showPlace(place) {
  const encodedPlace = encodeURIComponent(place);
  mapFrame.src = "https://maps.google.com/maps?q=" + encodedPlace + "&output=embed";
  mapFrame.title = "Map showing " + place;
  directionsLink.href = "https://www.google.com/maps/search/?api=1&query=" + encodedPlace;

  placeButtons.forEach(function (button) {
    button.classList.toggle("active", button.dataset.place === place);
  });
}

placeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    showPlace(button.dataset.place);
  });
});

mapLinks.forEach(function (button) {
  button.addEventListener("click", function () {
    showPlace(button.dataset.place);
    document.getElementById("map").scrollIntoView({ behavior: "smooth" });
  });
});

// Set the current year automatically
document.getElementById("year").textContent = new Date().getFullYear();
