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

// function replay vid perform
function replayVidPerform() {
  const element = document.querySelector(".thermal-memory-bg");
  console.log(element);
  element.play();
}

//play hardware vid and audio vid
const playHardWareVid = () => {
  const vidElement = document.querySelector(".thermal-memory-bg");
  const audioVidElemenet = document.querySelector(".audio-vid");

  // console.log(autoElement);
  autoElement.play();

  let windowHeight = window.innerHeight;
  let revealTop = elements[i].getBoundingClientRect().top;
  let audioVidRevealTop = audioVidElemenet.getBoundingClientRect().top;
  let revealPoint = 100;
  if (revealTop < windowHeight - revealPoint) {
    vidElement.play();
  }
  if (audioVidRevealTop < windowHeight - revealPoint) {
    audioVidElemenet.play();
  }
};

//onclick event when change macbook color
let checkMacColor = true;
const colornavElements = document.querySelectorAll(".colornav-item");
colornavElements[0].addEventListener("click", () => {
  checkMacColor = true;
  handleMacColor();
});
colornavElements[1].addEventListener("click", () => {
  checkMacColor = false;
  handleMacColor();
});
function handleMacColor() {
  const macColorImg = document.querySelectorAll(".ar-img");
  // color === space grey
  if (checkMacColor) {
    // remove
    colornavElements[1]
      .querySelector(".btn-color")
      .classList.remove("mac-choose-active");

    colornavElements[1]
      .querySelector(".colornav-label")
      .classList.remove("colornav-label-active");

    // adding
    colornavElements[0]
      .querySelector(".btn-color")
      .classList.add("mac-choose-active");

    colornavElements[0]
      .querySelector(".colornav-label")
      .classList.add("colornav-label-active");

    // change image
    macColorImg[1].classList.remove("img-no-active");
  }
  // color === silver
  else {
    // remove
    colornavElements[0]
      .querySelector(".btn-color")
      .classList.remove("mac-choose-active");

    colornavElements[0]
      .querySelector(".colornav-label")
      .classList.remove("colornav-label-active");

    // adding
    colornavElements[1]
      .querySelector(".btn-color")
      .classList.add("mac-choose-active");

    colornavElements[1]
      .querySelector(".colornav-label")
      .classList.add("colornav-label-active");

    // change image
    macColorImg[1].classList.add("img-no-active");
  }
}
