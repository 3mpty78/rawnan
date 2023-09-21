// Sphère du curseur

let sphere = document.getElementById("sphere");
let dot = document.getElementById("dot");
//Detect touch device
function isTouchDevice() {
      try {
            //We try to create TouchEvent. It would fail for desktops and throw error
            document.createEvent("TouchEvent");
            return true;
      } catch (e) {
            return false;
      }
}

const move = (e) => {
      var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
      var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
      sphere.style.left = x - 5 + "px";
      sphere.style.top = y - 5 + "px";
      dot.style.left = x - 5 + "px";
      dot.style.top = y - 5 + "px";
};
//For mouse
document.addEventListener("mousemove", (e) => {
      move(e);
});
//For touch
document.addEventListener("touchmove", (e) => {
      move(e);
});

// Toggler de la navigation

const btn = document.querySelector(".nav-toggler");
const header = document.querySelector("header");

document.addEventListener("click", (e) => {
      if (e.target.closest(".nav-toggler")) {
            btn.classList.toggle("toggle");
            header.classList.toggle("active");
      } else if (!e.target.closest(".nav-toggler")) {
            btn.classList.remove("toggle");
            header.classList.remove("active");
      }
});
document.addEventListener("scroll", (f) => {
      if (window.scrollY > 50) {
            btn.classList.remove("toggle");
            header.classList.remove("active");
      }
});

// Test image width au scroll
let lastScrollTop = 0;
const scrollingText = document.querySelector(".scrolling_text p");

window.addEventListener("scroll", () => {
      const currentScrollTop = window.scrollY;
      scrollingText.style.transform = `translateX(-${currentScrollTop / 2}px)`;

      lastScrollTop = currentScrollTop;
});
