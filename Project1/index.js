// play open lap vid
const playvid = () => {
  const autoElement = document.querySelector(".laptop-open-vid");
  // console.log(autoElement);
  autoElement.play();

  document.querySelector(".laptop-open-vid").onended = () => {
    const autoElement = document.querySelector(".laptop-open-vid");
    const macPic = document.querySelector(".laptop-open-img");
    // console.log(macPic);
    // autoElement.style.display = "none";
    macPic.style.display = "block";
  };
};

// function replay vid performance
const playingVid = function () {
  const hideBtn = document.querySelector(".btn-replay");
  hideBtn.style.opacity = "0";
};
const endedVid = function () {
  const hideBtn = document.querySelector(".btn-replay");
  hideBtn.style.opacity = "1";
};

function replayVidPerform() {
  const element = document.querySelector(".thermal-memory-bg");
  console.log(element);
  element.play();
}

//play hardware vid
const playHardWareVid = () => {
  const vidElement = document.querySelector(".thermal-memory-bg");
  // console.log(autoElement);
  autoElement.play();

  var windowHeight = window.innerHeight;
  var revealTop = elements[i].getBoundingClientRect().top;
  var revealPoint = 100;
  if (revealTop < windowHeight - revealPoint) {
    vidElement.play();
  }
};

// bars animation start when scoll
document.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {
  const elements = document.querySelectorAll(".lazy-loading-bar");
  const batteryElement = document.querySelector(".fill-element");
  const brightScreenElement = document.querySelector(
    ".content-display__header__pic-screen"
  );
  const trueToneContainterElement = document.querySelector(
    ".content-display__badge"
  );
  const trueToneBgElement = document.querySelector(".content-display-bg--cold");
  // console.log(document.querySelectorAll(".content-display-bg--cold"));

  for (let i = 0; i < elements.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = elements[i].getBoundingClientRect().top;
    var batteryRevealTop = batteryElement.getBoundingClientRect().top;
    var brightenRevealTop = brightScreenElement.getBoundingClientRect().top;
    var trueToneRevealTop =
      trueToneContainterElement.getBoundingClientRect().top;
    var revealPoint = 100;
    if (revealTop < windowHeight - revealPoint) {
      elements[i].classList.add("bar-animation");
    }
    if (batteryRevealTop < windowHeight - revealPoint) {
      batteryElement.classList.add("battery-fill-up");
    }
    if (brightenRevealTop < windowHeight - revealPoint) {
      brightScreenElement.classList.add("brighten-effect");
    }
    if (trueToneRevealTop < windowHeight - revealPoint) {
      trueToneBgElement.classList.add("true-tone-effect");
    }
  }
}
