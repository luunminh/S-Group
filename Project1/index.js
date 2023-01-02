// play open lap vid
const playvid = () => {
    const autoElement = document.querySelector(".laptop-open-vid");
    // console.log(autoElement);
    autoElement.play();

    // document.querySelector(".laptop-open-vid").onended = () => {
    //     const autoElement = document.querySelector(".laptop-open-vid");
    //     // const macPic = document.querySelector(".laptop-open-img");
    //     // console.log(macPic);
    //     // autoElement.style.display = "none";
    //     // macPic.style.display = "block";
    // };
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

// change lock para
let passwordArr = [
    "•",
    "•",
    "•",
    "•",
    "•",
    "•",
    "•",
    "•",
    "•",
    "•",
    "•",
    "•",
    "•",
];
let textArr = ["S", "e", "c", "u", "r", "e", "l", "y", "y", "o", "u", "r", "s"];
function handleChangePassword() {
    const lockTag = document.querySelectorAll(".lock-mask");
    const lockTagHeight = lockTag[0].getBoundingClientRect().top;
    const screenHeigth = window.innerHeight;
    // console.log(`locktagHeight ${lockTagHeight}`);
    if (
        lockTagHeight <= (screenHeigth * 1.5) / 3 &&
        Number.parseInt(lockTagHeight) % 2 == 0
    ) {
        for (let i = 0; i < passwordArr.length; i++) {
            if (passwordArr[i] === "•") {
                let tmp = passwordArr[i];
                passwordArr[i] = textArr[i];
                textArr[i] = tmp;
                let lockTagArr1 = passwordArr.slice(0, 8);
                let lockTagArr2 = passwordArr.slice(8, 13);
                lockTagArr2 = lockTagArr2.concat(".");
                lockTag[0].innerText = lockTagArr1.join("");
                lockTag[1].innerText = lockTagArr2.join("");
                break;
            }
        }
    }
    if (
        lockTagHeight > (screenHeigth * 1.5) / 3 &&
        Number.parseInt(lockTagHeight) % 2 == 0
    ) {
        for (let i = textArr.length - 1; i >= 0; i--) {
            if (textArr[i] === "•") {
                let tmp = passwordArr[i];
                passwordArr[i] = textArr[i];
                textArr[i] = tmp;
                let lockTagArr1 = passwordArr.slice(0, 8);
                let lockTagArr2 = passwordArr.slice(8, 13);
                lockTagArr2 = lockTagArr2.concat(".");
                lockTag[1].innerText = lockTagArr2.join("");
                lockTag[0].innerText = lockTagArr1.join("");
                break;
            }
        }
    }
}
window.addEventListener("scroll", handleChangePassword);

//onclick event when change macbook color
let isGreyColorLap = true;
const colornavElements = document.querySelectorAll(".colornav-item");
const macColorImg = document.querySelectorAll(".ar-img");
colornavElements[0].addEventListener("click", () => {
    isGreyColorLap = true;
    handleMacColor();
});
colornavElements[1].addEventListener("click", () => {
    isGreyColorLap = false;
    handleMacColor();
});
function handleMacColor() {
    // color === space grey
    if (isGreyColorLap) {
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

function main() {
    const lockTag = document.querySelectorAll(".lock-mask");
    const lockTagHeight = lockTag[0].getBoundingClientRect().top;
    const screenHeigth = window.innerHeight;
    if (lockTagHeight < (screenHeigth * 1.5) / 3) {
        let tmp = passwordArr;
        passwordArr = textArr;
        textArr = tmp;
        let lockTagArr1 = passwordArr.slice(0, 8);
        let lockTagArr2 = passwordArr.slice(8, 13);
        lockTagArr2 = lockTagArr2.concat(".");
        lockTag[0].innerText = lockTagArr1.join("");
        lockTag[1].innerText = lockTagArr2.join("");
    }
}
main();
