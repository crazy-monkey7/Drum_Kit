const kickBassButton = document.querySelector("button.a");
document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    kickBassButton.click();
  }
});
kickBassButton.addEventListener("click", function () {
  let kickBass = new Audio("sounds/kick-bass.mp3");
  kickBass.play();
  this.classList.add("pressed");
  setTimeout(() => {
    this.classList.remove("pressed");
  }, 100);
});

const tom1Button = document.querySelector("button.d");
document.addEventListener("keydown", function (event) {
  if (event.key === "d") {
    tom1Button.click();
  }
});
tom1Button.addEventListener("click", function () {
  let tom1 = new Audio("sounds/tom-1.mp3");
  tom1.play();
  this.classList.add("pressed");
  setTimeout(() => {
    this.classList.remove("pressed");
  }, 100);
});

const tom2Button = document.querySelector("button.j");
document.addEventListener("keydown", function (event) {
  if (event.key === "j") {
    tom2Button.click();
  }
});
tom2Button.addEventListener("click", function () {
  let tom2 = new Audio("sounds/tom-2.mp3");
  tom2.play();
  this.classList.add("pressed");
  setTimeout(() => {
    this.classList.remove("pressed");
  }, 100);
});

const tom3Button = document.querySelector("button.k");
document.addEventListener("keydown", function (event) {
  if (event.key === "k") {
    tom3Button.click();
  }
});
tom3Button.addEventListener("click", function () {
  let tom3 = new Audio("sounds/tom-3.mp3");
  tom3.play();
  this.classList.add("pressed");
  setTimeout(() => {
    this.classList.remove("pressed");
  }, 100);
});

const tom4Button = document.querySelector("button.l");
document.addEventListener("keydown", function (event) {
  if (event.key === "l") {
    tom4Button.click();
  }
});
tom4Button.addEventListener("click", function () {
  let tom4 = new Audio("sounds/tom-4.mp3");
  tom4.play();
  this.classList.add("pressed");
  setTimeout(() => {
    this.classList.remove("pressed");
  }, 100);
});

const snareButton = document.querySelector("button.s");
document.addEventListener("keydown", function (event) {
  if (event.key === "s") {
    snareButton.click();
  }
});
snareButton.addEventListener("click", function () {
  let snare = new Audio("sounds/snare.mp3");
  snare.play();
  this.classList.add("pressed");
  setTimeout(() => {
    this.classList.remove("pressed");
  }, 100);
});

const crashButton = document.querySelector("button.w");
document.addEventListener("keydown", function (event) {
  if (event.key === "w") {
    crashButton.click();
  }
});
crashButton.addEventListener("click", function () {
  let crash = new Audio("sounds/crash.mp3");
  crash.play();
  this.classList.add("pressed");
  setTimeout(() => {
    this.classList.remove("pressed");
  }, 100);
});
