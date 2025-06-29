const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const searchIcon = document.getElementById("searchIcon");
const links = document.querySelectorAll("nav a");
const searchInput = document.getElementById("searchInput");
const closeSearch = document.getElementById("clearIcon");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

searchIcon.addEventListener("click", () => {
  if (searchInput.style.display === "block") {
    searchInput.style.display = "none";
    closeSearch.style.display = "none";
  } else {
    searchInput.style.display = "block";
    closeSearch.style.display = "block";
    searchInput.focus();
  }
});

closeSearch.addEventListener("click", () => {
  searchInput.value = "";
  closeSearch.style.display = "none";
  searchInput.style.display = "none";
  searchInput.focus();
});

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((l) => l.classList.remove("active"));

    this.classList.add("active");
  });
});

function scrollToLeftProduct() {
  document.getElementById("productScroll").scrollBy({
    left: -300,
    behavior: "smooth",
  });
}

function scrollToRightProduct() {
  document.getElementById("productScroll").scrollBy({
    left: 300,
    behavior: "smooth",
  });
}

function scrollToLeftCategory() {
  document.getElementById("categoriesScroll").scrollBy({
    left: -300,
    behavior: "smooth",
  });
}

function scrollToRightCategory() {
  document.getElementById("categoriesScroll").scrollBy({
    left: 300,
    behavior: "smooth",
  });
}

function scrollToLeftBestProduct() {
  document.getElementById("bestProductScroll").scrollBy({
    left: -300,
    behavior: "smooth",
  });
}

function scrollToRightBestProduct() {
  document.getElementById("bestProductScroll").scrollBy({
    left: 300,
    behavior: "smooth",
  });
}

function scrollToLeftExProduct() {
  document.getElementById("exProductScroll").scrollBy({
    left: -300,
    behavior: "smooth",
  });
}

function scrollToRightExProduct() {
  document.getElementById("exProductScroll").scrollBy({
    left: 300,
    behavior: "smooth",
  });
}

// Optional: countdown timer
let countdownDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // 3 hari ke depan

const timerInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    clearInterval(timerInterval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );
}, 1000);
