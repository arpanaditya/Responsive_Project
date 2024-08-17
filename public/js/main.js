document.addEventListener("DOMContentLoaded", function () {
  // Get the header element
  const header = document.getElementById("main-header");

  // Function to handle scroll event
  function handleScroll() {
    // Add shadow class to header if page is scrolled down, remove otherwise
    if (window.scrollY > 0) {
      header.classList.add("shadow");
    } else {
      header.classList.remove("shadow");
    }
  }

  // Listen to the scroll event
  window.addEventListener("scroll", handleScroll);
});

function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle("show");
}
function faqToggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle("active");
}

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  // centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 0,
    // slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 2500,
  },
});

var swiper = new Swiper(".mySwiper2", {
  effect: "coverflow",
  grabCursor: true,
  // centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 0,
    // slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 2500,
  },
});
var swiper = new Swiper(".mySwiperAlumini1", {
  effect: "coverflow",
  grabCursor: true,
  // centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 0,
    // slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
});
var swiper = new Swiper(".mySwiperAlumini2", {
  effect: "coverflow",
  grabCursor: true,
  // centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 0,
    // slideShadows: true,
  },

  loop: true,
  autoplay: {
    delay: 4000,
    reverseDirection: true,
  },
});

function toggleContent(contentType) {
  const fullStackTrigger = document.querySelector(".trigger-left");
  const backendTrigger = document.querySelector(".trigger-right");
  const fullStackContent = document.querySelector(".trigger-left-part");
  const backendContent = document.querySelector(".trigger-right-part");

  if (contentType === "fullStack") {
    fullStackTrigger.classList.add("active");
    backendTrigger.classList.remove("active");
    fullStackContent.classList.add("active");
    backendContent.classList.remove("active");
  } else {
    fullStackTrigger.classList.remove("active");
    backendTrigger.classList.add("active");
    fullStackContent.classList.remove("active");
    backendContent.classList.add("active");
  }
}
