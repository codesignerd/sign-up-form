// FORM VALIDATION
const form = document.getElementById("form");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const userCheck = document.getElementById("userCheck");

let message = "";

document.body.addEventListener("click", (e) => {
    if (e.target.parentElement.parentElement === form) {
        e.target.parentElement.lastElementChild.innerHTML = "";
    }
});

form.addEventListener("submit", (form) => {

    form.preventDefault();
    
    validateForm();

    if (userEmail && userName && userPassword !== "" && userCheck.checked !== false) {
        alert("Thank You! Form Successfully Submitted.");
    }
});

function validateForm() {

    if(userName.value == "") {
        message = "Please enter a username";
        userName.parentElement.lastElementChild.innerHTML = `${message}`;
    }
    else if(userEmail.value == "") {
        message = "Please enter your email";
        userEmail.parentElement.lastElementChild.innerHTML = `${message}`;
    }
    else if(userPassword.value == "") {
        message = "Please enter a password";
        userPassword.nextElementSibling.innerHTML = `${message}`;
    }
    else if (userCheck.checked == false) {
        message = "Please agree to our Terms & Conditions";
        userCheck.parentElement.parentElement.lastElementChild.innerHTML = `${message}`;
    }
}

// FORM SLIDER
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".prev");

let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", intializeSlider);
previousBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

function intializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 7000);
    }
}

function showSlide(index) {

  if (index >= slides.length) {
    slideIndex = 0;
  }

  else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  });

  slides[slideIndex].classList.add("displaySlide");
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex); 
}