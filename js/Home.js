let els = document.querySelectorAll(".nav-li");
function showMenu() {
  els.forEach((el, i) => {
    if (i > 0) {
      if (el.style.display === "" || el.style.display === "none") {
        el.style.display = "flex";
      } else {
        el.style.display = "none";
      }
    }
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 800) {
    els.forEach((el, i) => i > 0 && (el.style.display = "none"));
  } else {
    els.forEach((el) => (el.style.display = "flex"));
  }
});

// carousel
var slideIndex = 0;
var slideIndexCurrent = 0;
showSlides();
function currentSlide(n) {
  showSlidesCurrent(slideIndexCurrent = n);
}
function currentSlide(n) {
  showSlidesCurrent(slideIndexCurrent = n);
}
function showSlidesCurrent(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndexCurrent = 1}
  if (n < 0) {slideIndexCurrent = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slideIndex++;
slides[slideIndexCurrent-1].style.display = "block";
slideIndexCurrent++;
}
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 3000); // Change image every x seconds
}

// sticky bar
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
