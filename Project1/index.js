const playvid = () => {
  const autoElement = document.querySelector(".laptop-open-vid");
  console.log(autoElement);
  autoElement.play();

  document.querySelector(".laptop-open-vid").onended = () => {
    const autoElement = document.querySelector(".laptop-open-vid");
    const macPic = document.querySelector(".laptop-open-img");
    console.log(macPic);
    // autoElement.style.display = "none";
    macPic.style.display = "block";
  };
};
