let currentIndex =
  localStorage.getItem("currentIndex") ||
  document.currentScript.getAttribute("currentIndex");
currentIndex = parseInt(currentIndex);

const images = [
  "himeno.png",
  "komaeda.png",
  "makima.png",
  "task_failed_successfully.webp",
  "zzz_untitled1.png",
];
const colorSets = [
  {
    "--text-color": "#e9dbd9",
    "--hover-color": "#4c9da1",
    "--accent-color": "#52a05b",
    "--accent-color-2": "#b7d5ad",
    "--background-color": "#03030e",
  },

  {
    "--text-color": "#fcfbfb",
    "--hover-color": "#92a359",
    "--accent-color": "#9c3109",
    "--accent-color-2": "#fdc1fd",
    "--background-color": "#041514",
  },
  {
    "--text-color": "#e6d6cb",
    "--hover-color": "#2b6767",
    "--accent-color": "#d57811",
    "--accent-color-2": "#9b380b",
    "--background-color": "#130e0d",
  },
  {
    "--text-color": "#f9fffe",
    "--hover-color": "#b5ffef",
    "--accent-color": "#4a9454",
    "--accent-color-2": "#8cd4fc",
    "--background-color": "#010c0e",
  },
  {
    "--text-color": "#d8bdc5",
    "--hover-color": "#e5a7b0",
    "--accent-color": "#c66873",
    "--accent-color-2": "#8eacaf",
    "--background-color": "#141319",
  },
];

function preloadImages() {
  for (let i = 0; i < images.length; i++) {
    const img = new Image();
    img.src = "./images/" + images[i];
  }
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  localStorage.setItem("currentIndex", currentIndex); // Update currentIndex in localStorage
  const imageElement = document.getElementById("carouselImage");
  imageElement.style.opacity = 0;
  updateColors(currentIndex);

  setTimeout(() => {
    imageElement.src = "./images/" + images[currentIndex];
    imageElement.style.opacity = 1;
  }, 200); // Match the transition duration in style.css
}

function updateColors() {
  const colorSet = colorSets[currentIndex];
  // Iterate through the colorSet and set the CSS variables
  for (const [property, value] of Object.entries(colorSet)) {
    document.documentElement.style.setProperty(property, value);
  }
}

// Set colors with current index first
updateColors(currentIndex);

// Set the initial image
document.getElementById("carouselImage").src =
  "./images/" + images[currentIndex];

// Image is opacity 0 and text is translated off screen by default
// Add the loaded class to the image and text to animate them in
window.onload = function () {
  document.getElementById("image").classList.add("loaded");
  document.getElementById("text").classList.add("loaded");
  document.getElementsByTagName("html")[0].classList.add("loaded");
  // Preload the remaining images
  preloadImages();
};
