const myslide = document.querySelectorAll(".myslide"),
  dot = document.querySelectorAll(".dot");
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 3500);
function autoSlide() {
  counter += 1;
  slidefun(counter);
}
function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}
function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 3500);
}

function slidefun(n) {
  let i;
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  if (n > myslide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].className += " active";
}

$(document).ready(function () {
  $(".mobnav h4").click(function () {
    $(".mobnav ul").slideToggle();
  });
});

let upto = 0;

function updated() {
  let count = document.getElementById("count-projects");
  count.innerHTML = ++upto;

  if (upto < 400) {
    setTimeout(updated, 10);
  }
}

updated();

let upto2 = 0;
function countYears() {
  let count2 = document.getElementById("years-count-na");
  count2.innerHTML = ++upto2;

  if (upto2 < 21) {
    setTimeout(countYears, 250);
  }
}

countYears();

let upt3 = 0;
function mobileCountProjects() {
  let coun3 = document.getElementById("mobile-projects");
  coun3.innerHTML = ++upt3;

  if (upt3 < 400) {
    setTimeout(mobileCountProjects, 10);
  }
}

mobileCountProjects();

let upt4 = 0;
function mobileCountYears() {
  let coun4 = document.getElementById("mobile-year-count");
  coun4.innerHTML = ++upt4;

  if (upt4 < 21) {
    setTimeout(mobileCountYears, 250);
  }
}

mobileCountYears();

//for drop down header bar
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 300);
});

window.addEventListener("scroll", function () {
  var header = document.querySelector(".aboutup-topic");
  header.classList.toggle("aboutup-topic-croll", window.scrollY > 300);
});

window.addEventListener("scroll", function () {
  var header = document.querySelector(".services");
  header.classList.toggle("services-scroll", window.scrollY > 450);
});

window.addEventListener("scroll", function () {
  var header = document.querySelector(".aboutus-middle");
  header.classList.toggle("aboutus-middle-scroll", window.scrollY > 500);
});

window.addEventListener("scroll", function () {
  var header = document.querySelector(".aboutus-bottom");
  header.classList.toggle("aboutus-bottom-scroll", window.scrollY > 800);
});

window.addEventListener("scroll", function () {
  var header = document.querySelector(".service-image");
  header.classList.toggle("service-image-scroll", window.scrollY > 300);
});

window.addEventListener("scroll", function () {
  var header = document.querySelector(".aboutup-topic-mobile");
  header.classList.toggle("aboutup-topic-mobile-scroll", window.scrollY > 300);
});

window.addEventListener("scroll", function () {
  var header = document.querySelector(".m-image");
  header.classList.toggle("m-image-scroll", window.scrollY > 1000);
});

window.addEventListener("scroll", function () {
  var header = document.querySelector(".middle-up");
  header.classList.toggle("middle-up-scroll", window.scrollY > 1500);
});

window.addEventListener("scroll", function () {
  var header = document.querySelector(".aboutus-bottom-mobile");
  header.classList.toggle(
    "aboutus-bottom-mobile-scroll",
    window.scrollY > 2000
  );
});



window.addEventListener("scroll", function () {
  var header = document.querySelector(".our-works-inner-content-right");
  header.classList.toggle("our-works-inner-content-right-scroll", window.scrollY > 1400);
});

window.addEventListener("scroll", function () {
  var header = document.querySelector(".our-works-inner-content-right-left");
  header.classList.toggle("our-works-inner-content-right-left-scroll", window.scrollY > 1700);
});




window.addEventListener("scroll", function () {
  var header = document.querySelector(".part3list");
  header.classList.toggle("part3list-scroll", window.scrollY > 2200);
});



window.addEventListener("scroll", function () {
  var header = document.querySelector(".list-item-4");
  header.classList.toggle("list-item-4-scroll", window.scrollY > 2700);
});



window.addEventListener("scroll", function () {
  var header = document.querySelector(".list-item5");
  header.classList.toggle("list-item5-scroll", window.scrollY > 3200);
});


window.addEventListener("scroll", function () {
  var header = document.querySelector(".list-item6");
  header.classList.toggle("list-item6-scroll", window.scrollY > 3650);
});



window.addEventListener("scroll", function () {
  var header = document.querySelector(".our-works-topic-inner");
  header.classList.toggle("our-works-topic-inner-scroll", window.scrollY > 1400);
});




window.addEventListener("scroll", function () {
  var header = document.querySelector(".recent-blog-items");
  header.classList.toggle("recent-blog-items-scroll", window.scrollY > 5900);
});





window.addEventListener("scroll", function () {
  var header = document.querySelector(".icons");
  header.classList.toggle("icons-scroll", window.scrollY > 7100);
});



window.addEventListener("scroll", function () {
  var header = document.querySelector(".icons");
  header.classList.toggle("icons-scroll-mobile", window.scrollY > 11900);
});





window.addEventListener("scroll", function () {
  var header = document.querySelector(".cards-slide");
  header.classList.toggle("cards-slide-scroll", window.scrollY > 4500);
});
// card slider




const cardsSlide = document.querySelector(".cards-slide");
const dots = document.querySelectorAll(".dot");
const cardWidth = 430; // Adjust to match your card width
let currentCardIndex = 0;
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;

dots[currentCardIndex].classList.add("active");

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        moveToCard(index);
    });
});

cardsSlide.addEventListener("mousedown", (e) => {
    isDragging = true;
    startPosition = e.clientX;
    currentTranslate = -currentCardIndex * cardWidth;
    cardsSlide.style.transition = "none";
});

cardsSlide.addEventListener("mousemove", (e) => {
    if (isDragging) {
        const dragAmount = e.clientX - startPosition;
        cardsSlide.style.transform = `translateX(${currentTranslate + dragAmount}px)`;
    }
});

cardsSlide.addEventListener("mouseup", () => {
    if (isDragging) {
        const dragThreshold = cardWidth / 4;
        const dragAmount = e.clientX - startPosition;

        if (dragAmount > dragThreshold) {
            slidePrev();
        } else if (dragAmount < -dragThreshold) {
            slideNext();
        } else {
            moveToCard(currentCardIndex);
        }

        isDragging = false;
    }
});

cardsSlide.addEventListener("mouseleave", () => {
    if (isDragging) {
        moveToCard(currentCardIndex);
        isDragging = false;
    }
});


function moveToCard(index) {
    currentCardIndex = index;
    const xOffset = -index * cardWidth;
    cardsSlide.style.transform = `translateX(${xOffset}px)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

function slideNext() {
    if (currentCardIndex < dots.length - 1) {
        moveToCard(currentCardIndex + 1);
    }
}

function slidePrev() {
    if (currentCardIndex > 0) {
        moveToCard(currentCardIndex - 1);
    }
}



// card slider end