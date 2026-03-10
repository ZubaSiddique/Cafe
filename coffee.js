function animateCount(id, target, duration) {
    const element = document.getElementById(id);
    let count = 0;
    const increment = target / (duration / 50); // update every 50ms
    const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(interval);
        }
        element.innerText = Math.floor(count);
    }, 50);
}

// When page loads
window.addEventListener('DOMContentLoaded', () => {
    animateCount('coffeeCount', 60 , 4000);   // counts to 120 in 10s
    animateCount('orderCount', 150 , 2000);     // counts to 85 in 12s
    animateCount('customerCount', 300, 2000); // counts to 250 in 15s
});
// Slider

const track = document.getElementById("sliderTrack");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;

function getCardWidth() {
  const card = track.children[0];
  const gap = parseInt(window.getComputedStyle(track).gap);
  return card.offsetWidth + gap;
}

function getVisibleCards() {
  const container = track.parentElement;
  const cardWidth = getCardWidth();
  return Math.floor(container.offsetWidth / cardWidth);
}

nextBtn.addEventListener("click", () => {
  const totalCards = track.children.length;
  const visibleCards = getVisibleCards();
  const move = getCardWidth();

  if (currentIndex < totalCards - visibleCards) {
    currentIndex++;
    track.style.transform = `translateX(-${currentIndex * move}px)`;
  }
});

prevBtn.addEventListener("click", () => {
  const move = getCardWidth();

  if (currentIndex > 0) {
    currentIndex--;
    track.style.transform = `translateX(-${currentIndex * move}px)`;
  }
});

window.addEventListener("resize", () => {
  currentIndex = 0;
  track.style.transform = `translateX(0px)`;
});
// Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");
const mainNav = document.getElementById("mainNav");

// Open Menu
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  mainNav.classList.add("hidden");
});

// Close Menu (X button)
closeBtn.addEventListener("click", closeMenu);

// Close Menu Function
function closeMenu() {
  mobileMenu.classList.add("hidden");
  mainNav.classList.remove("hidden");
}

// 👇 Close menu when any link is clicked
const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});





