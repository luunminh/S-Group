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
  // console.log(document.querySelectorAll(".lazy-loading-bar"));

  for (let i = 0; i < elements.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = elements[i].getBoundingClientRect().top;
    var revealPoint = 100;
    if (revealTop < windowHeight - revealPoint) {
      elements[i].classList.add("bar-animation");
    }
  }
}
