// scriipt.js (or correct name if typo)
document.addEventListener("DOMContentLoaded", () => {
  const allButtons = document.querySelectorAll(".btn, .btn-1, .btn-2, .btn-3, .btn-4");

  const urls = [
    "https://www.spacex.com/mars", // btn 1
    "https://www.spacex.com/launches/", // btn-1 (2nd section)
    "https://www.spacex.com/starlink/", // 3rd section
    "https://www.spacex.com/vehicles/falcon-9/", // 4th
    "https://www.spacex.com/humanspaceflight/" // 5th
  ];

  allButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      window.open(urls[index], "_blank"); // open in new tab
    });
  });
});

