function toggleMenu() {
  const menu = document.getElementById("fullscreenMenu");
  const toggleIcon = document.querySelector(".menu-toggle");
  if (menu.style.left === "0%") {
    menu.style.left = "-100%";
    toggleIcon.classList.remove("active");
  } else {
    menu.style.left = "0%";
    toggleIcon.classList.add("active");
  }
}

const container = document.querySelector(".starry-container");
const numStars = 100;

for (let i = 0; i < numStars; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  const size = Math.random() * 2 + 1 + "px";
  star.style.width = size;
  star.style.height = size;

  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";

  const twinkleDuration = Math.random() * 3 + 2 + "s";
  const floatDuration = Math.random() * 5 + 3 + "s";

  star.style.animationDuration = `${twinkleDuration}, ${floatDuration}`;
  container.appendChild(star);
}

function createShootingStar() {
  const shootingStar = document.createElement("div");
  shootingStar.classList.add("shooting-star");

  shootingStar.style.top = Math.random() * 50 + "vh";
  shootingStar.style.left = Math.random() * 100 + "vw";

  container.appendChild(shootingStar);

  shootingStar.style.animation = `shoot 1.5s ease-out forwards`;

  setTimeout(() => {
    shootingStar.remove();
  }, 1500);
}

function startShootingStars() {
  setInterval(createShootingStar, Math.random() * 10000);
}

startShootingStars();

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const moon = document.querySelector(".moon");

  container.addEventListener("scroll", function () {
    let scrollPos = container.scrollTop;
    moon.style.transform = `translateX(${scrollPos * 0.3}px) translateY(10px)`;
  });
});

window.addEventListener("load", () => {
  const loadingCircle = document.getElementById("loading-circle");
  const content = document.querySelector(".container");

  loadingCircle.style.display = "none";
  content.style.display = "block";
});
