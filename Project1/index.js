// play open lap vid
const playvid = () => {
    const autoElement = document.querySelector(".laptop-open-vid");
    // console.log(autoElement);
    autoElement.play();
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
    element.play();
}

//play hardware vid and audio vid
const playHardWareVid = () => {
    const vidElement = document.querySelector(".thermal-memory-bg");
    const audioVidElemenet = document.querySelector(".audio-vid");

    let windowHeight = window.innerHeight;
    let revealTop = vidElement.getBoundingClientRect().top;
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
let prePosition = 0;
function handleChangePassword() {
    const lockTag = document.querySelectorAll(".lock-mask");
    const lockTagHeight = lockTag[0].getBoundingClientRect().top;
    const screenHeigth = window.innerHeight;
    // console.log(`locktagHeight ${lockTagHeight}`);
    if (
        lockTagHeight <= (screenHeigth * 1.5) / 3 &&
        Number.parseInt(lockTagHeight) % 2 == 0 &&
        lockTagHeight < prePosition
    ) {
        prePosition = lockTagHeight;
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
        Number.parseInt(lockTagHeight) % 2 == 0 &&
        lockTagHeight > prePosition
    ) {
        prePosition = lockTagHeight;
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
window.addEventListener("scroll", playHardWareVid);

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
        prePosition = 10000;
        let tmp = passwordArr;
        passwordArr = textArr;
        textArr = tmp;
        let lockTagArr1 = passwordArr.slice(0, 8);
        let lockTagArr2 = passwordArr.slice(8, 13);
        lockTagArr2 = lockTagArr2.concat(".");
        lockTag[0].innerText = lockTagArr1.join("");
        lockTag[1].innerText = lockTagArr2.join("");
    }

    // mobile event
    const menuFirstHeaderTag = document.querySelector(".menu-btn");

    menuFirstHeaderTag.onclick = () => {
        console.log(menuFirstHeaderTag);
    };

    // footer sub menu event
    const directoryItems = document.querySelectorAll(
        ".footer__directory__item"
    );

    directoryItems.forEach((directoryItem, index) => {
        directoryItem.addEventListener("click", () => {
            const checkBoxTag = document.querySelectorAll(
                ".directory-item-check"
            );
            checkBoxTag[index].checked = !checkBoxTag[index].checked;
        });
    });

    // cart
    const cartElement = document.querySelector(".header-cart");
    cartElement.addEventListener("click", function handleCardEvent() {
        const checkBoxCart = document.querySelector(".cart-checkbox");
        if (checkBoxCart.checked === true) {
            document.querySelector(".cart-container").style.display = "block";
        } else if (checkBoxCart.checked === false) {
            document.querySelector(".cart-container").style.display = "none";
        }
    });
    const searchBtnElement = document.querySelector(".search-btn");
    searchBtnElement.addEventListener("click", () => {
        const checkBoxSearch = document.querySelector(".search-checkbox");
        if (checkBoxSearch.checked) {
            document.querySelector(".modal").style.display = "block";
            document.body.style.overflow = "hidden";
            document
                .querySelector(".first-header__navbar")
                .classList.add("header-hide-animation");
            document
                .querySelector(".first-header__navbar")
                .classList.remove("header-appear-animation");
            document.querySelector(".search-input").focus();
        } else if (checkBoxSearch.checked === false) {
            document.querySelector(".modal").style.display = "none";
            document.body.style.overflow = "unset";
            document
                .querySelector(".first-header__navbar")
                .classList.remove("header-hide-animation");
        }
    });

    // const modalElement = document.querySelector(".modal");
    // modalElement.addEventListener("click", () => {
    //     modalElement.style.display = "none";
    //     document
    //         .querySelector(".first-header__navbar")
    //         .classList.remove("header-hide-animation");
    //     document
    //         .querySelector(".first-header__navbar")
    //         .classList.add("header-appear-animation");
    //     document.body.style.overflow = "unset";
    //     document.querySelector(".search-checkbox").checked =
    //         !document.querySelector(".search-checkbox").checked;
    // });

    const cancelBtn = document.querySelector(".search-cancel");
    cancelBtn.addEventListener("click", () => {
        document.querySelector(".modal").style.display = "none";
        document
            .querySelector(".first-header__navbar")
            .classList.remove("header-hide-animation");
        document
            .querySelector(".first-header__navbar")
            .classList.add("header-appear-animation");
        document.body.style.overflow = "unset";
        document.querySelector(".search-checkbox").checked =
            !document.querySelector(".search-checkbox").checked;
    });

    // side menu mobile event
    const menuMobileElement = document.querySelector(".menu-btn");
    menuMobileElement.addEventListener("click", () => {
        const checkBoxMenu = document.querySelector(".menu-checkbox");
        if (checkBoxMenu.checked) {
            document.querySelector(".header__side-menu").style.display =
                "block";
            document.body.style.overflow = "hidden";
            document.querySelector(".header-cart").style.opacity = "0";
            document.querySelector(".cart-container").opacity = "0";
            document.querySelector(".header-cart").style.visibility = "hidden";
            document.querySelector(".menu-mobile-icon").style.display = "none";
            document.querySelector(".cancel-menu-icon").style.display = "block";
            document
                .querySelector(".header__side-menu")
                .classList.remove("side-menu-hide");
            document
                .querySelector(".header__side-menu")
                .classList.add("sideMenuAppear-animation");
        } else if (checkBoxMenu.checked === false) {
            document
                .querySelector(".header__side-menu")
                .classList.add("side-menu-hide");
            // document.querySelector(".header__side-menu").style.display = "none";
            document.body.style.overflow = "unset";
            document.querySelector(".header-cart").style.opacity = "1";
            document.querySelector(".header-cart").style.visibility = "visible";
            document.querySelector(".menu-mobile-icon").style.display = "block";
            document.querySelector(".cancel-menu-icon").style.display = "none";
            document
                .querySelector(".menu-mobile-icon")
                .classList.add("rotate-icon-animation");
            document
                .querySelector(".header__side-menu")
                .classList.remove("sideMenuAppear-animation");
        }
    });
}
main();
