import { images } from "./ImagesData.js";

let currentIndex = 0; 

// Dynamically create thumbnail elements
function createThumbnails() {
  const galleryContainer = document.querySelector(".gallery-container");
  images.map((image, index) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.thumbnail;
    imgElement.alt = image.caption;
    imgElement.loading = "lazy";
    imgElement.classList.add("thumbnail");
    imgElement.addEventListener("click", () => openLightbox(index));
    galleryContainer.appendChild(imgElement);
  });
}

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const closeBtn = document.getElementById("close-btn");

// Function to open the lightbox
function openLightbox(index) {
  currentIndex = index;
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  console.log(currentIndex);

  lightbox.style.display = "flex"; 
  lightboxImg.src = images[currentIndex].full; 
  lightboxImg.alt = images[currentIndex].caption;
  lightboxCaption.textContent = images[currentIndex].caption; 

  // Enable/disable navigation buttons based on current index
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === images.length - 1;
}

// Function to close the lightbox
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Function to navigate to the next image
function nextImage() {
  if (currentIndex < images.length - 1) {
    openLightbox(currentIndex + 1);
  }
}

// Function to navigate to the previous image
function prevImage() {
  if (currentIndex > 0) {
    openLightbox(currentIndex - 1);
  }
}

// Add event listeners to the navigation and close buttons
closeBtn.addEventListener("click", closeLightbox);
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

// Initialize the gallery on page load
window.onload = createThumbnails;
