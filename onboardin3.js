let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function goToPage(url) {
  window.location.href = url; // انتقال به صفحه جدید
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  let buttons = document.getElementsByClassName("slide-btn");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  for (i = 0; i < buttons.length; i++) {
    buttons[i].classList.add("hidden"); // مخفی کردن تمام دکمه‌ها
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  document.querySelector(`.slide-btn[data-slide="${slideIndex}"]`).classList.remove("hidden"); // نمایش دکمه مربوطه
}

if (performance.getEntriesByType("navigation")[0].type === "reload"){
  window.location.href="onboarding1.html"
};

