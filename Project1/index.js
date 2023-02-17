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
let lockPosition = [
    "-0px -0px",
    "-100px -0px",
    "-200px -0px",
    "-300px -0px",
    "-400px -0px",
    "-500px -0px",
    "-600px -0px",
    "-700px -0px",
    "-0px -128px",
    "-100px -128px",
    "-200px -128px",
    "-300px -128px",
    "-400px -128px",
    "-500px -128px",
    "-600px -128px",
    "-700px -128px",
    "-0px -256px",
    "-100px -256px",
    "-200px -256px",
    "-300px -256px",
    "-400px -256px",
    "-500px -256px",
    "-600px -256px",
    "-700px -256px",
    "-0px -512px",
    "-100px -512px",
    "-200px -512px",
    "-300px -512px",
    "-400px -512px",
    "-500px -512px",
    "-600px -512px",
    "-700px -512px",
    "-0px -640px",
    "-100px -640px",
    "-200px -640px",
    "-300px -640px",
    "-400px -640px",
    "-500px -640px",
    "-600px -640px",
    "-700px -640px",
    "-0px -768px",
    "-100px -768px",
    "-200px -768px",
    "-300px -768px",
    "-400px -768px",
    "-500px -768px",
    "-600px -768px",
    "-700px -768px",
    "-0px -896px",
    "-100px -896px",
    "-200px -896px",
    "-300px -896px",
    "-400px -896px",
    "-500px -896px",
    "-600px -896px",
    "-700px -896px",
    "-0px -1024px",
    "-100px -1024px",
    "-200px -1024px",
    "-300px -1024px",
    "-400px -1024px",
    "-500px -1024px",
    "-600px -1024px",
    "-700px -1024px",
];
let checkLockStatus = new Array(64).fill(0);

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
let preLockPosition = 0;
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

function handleUnlock() {
    const lockTag = document.querySelector(
        ".content-security__left-side__lock"
    );
    const lockTagHeight = lockTag.getBoundingClientRect().top;
    const screenHeigth = window.innerHeight;
    // console.log(`locktagHeight ${lockTagHeight}`);
    if (
        lockTagHeight <= (screenHeigth * 1.25) / 3 &&
        // Number.parseInt(lockTagHeight) % 2 == 0 &&
        lockTagHeight < preLockPosition
    ) {
        preLockPosition = lockTagHeight;
        for (let i = 0; i < lockPosition.length; i++) {
            if (
                checkLockStatus[i] == 0 &&
                i != lockPosition.length &&
                i != lockPosition.length - 1 &&
                i != lockPosition.length - 2
            ) {
                checkLockStatus[i] = 1;
                checkLockStatus[i + 1] = 1;
                checkLockStatus[i + 2] = 1;

                lockTag.style.backgroundPosition = lockPosition[i + 2];
                break;
            }
        }
    }
    if (
        lockTagHeight > (screenHeigth * 1.25) / 3 &&
        // Number.parseInt(lockTagHeight) % 2 == 0 &&
        lockTagHeight > preLockPosition
    ) {
        preLockPosition = lockTagHeight;
        for (let i = lockPosition.length - 1; i >= 0; i--) {
            if (checkLockStatus[i] === 1 && i != 0 && i != 1 && i != 2) {
                checkLockStatus[i] = 0;
                checkLockStatus[i - 1] = 0;
                checkLockStatus[i - 2] = 0;

                lockTag.style.backgroundPosition = lockPosition[i - 3];
                break;
            }
        }
    }
}

const handleFixHeader = () => {
    const checkBoxFixHeader = document.querySelector(".fix-header-checkBox");
    const fixHeaderBtn = document.querySelector(".fix-header-btn");
    fixHeaderBtn.classList.remove("rotate-fix-header-animation");
    fixHeaderBtn.classList.add("rotate-fix-header-animation-reverse");

    const fixHeaderMenuElement = document.querySelector(".fix-header__menu");
    fixHeaderMenuElement.classList.remove("fix-header__menu-animation");
    fixHeaderMenuElement.classList.add("fix-header__menu-hide-animation");
    document.querySelector(".fix-header").classList.remove("height-animation");
    document
        .querySelector(".fix-header")
        .classList.add("height-animation-reverse");
    document
        .querySelector(".fix-header__container")
        .classList.remove("fix-header__bg");
    document.querySelector(".fix-header").classList.remove("fix-header__bg");
    document.querySelector(".modal-mobile").style.display = "none";
    checkBoxFixHeader.checked = false;
};

window.addEventListener("scroll", handleChangePassword);
window.addEventListener("scroll", playHardWareVid);
window.addEventListener("scroll", handleUnlock);

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

function handleOpenModalChip() {
    document.querySelector('.modal-chip').style.display = 'block'
}

function handleCloseModalChip() {
    document.querySelector('.modal-chip').style.display = 'none'
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
        // console.log(menuFirstHeaderTag);
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
    // document.querySelector(".content").addEventListener("click", () => {

    //     document.querySelector(".cart-container-pc").style.display = "none";
    //     document.querySelector(".cart-container").style.display = "none";
    //     // document.querySelector(".cart-checkbox").checked = false;
    // });
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
    const modalElement = document.querySelector(".modal");
    modalElement.addEventListener("click", () => {
        const element = document.querySelector(".search-box");
        if (element.matches(":hover")) {

        } else {
            document.querySelector(".modal").style.display = "none";
            document.body.style.overflow = "unset";
            document
                .querySelector(".first-header__navbar")
                .classList.remove("header-hide-animation");
            document.querySelector(".search-checkbox").checked = false;
        }
    })

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
            // document.querySelector(".header__side-menu").style.display =
            //     "none";
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

        // search focus
        const searchInputTag = document.querySelector(".search-input-mobile");
        searchInputTag.addEventListener("focus", () => {
            // console.log(searchInputTag);
            // document.querySelector(".side-menu__btn-cancel").style.visibility =
            //     "visible";
            document
                .querySelector(".side-menu__btn-cancel")
                .classList.remove("cancel-hidden");
            document
                .querySelector(".side-menu__btn-cancel")
                .classList.add("cancel-appear");
            document.querySelector(".side-menu-search-wrap").style.background =
                "none";
            document
                .querySelector(".side-menu__list")
                .classList.remove("appear-list-side-menu-animation");
            document
                .querySelector(".side-menu__list")
                .classList.add("hide-list-side-menu-animation");

            document
                .querySelector(".search-list")
                .classList.remove("search-list-hidden");
            document
                .querySelector(".search-list")
                .classList.add("search-list-appear");
            document.querySelector(".header__side-menu").style.zIndex =
                "100000";
            document.querySelector(".header__side-menu").style.transform =
                "translateY(-31px)";
        });

        const cancelSearchTag = document.querySelector(
            ".side-menu__btn-cancel"
        );
        cancelSearchTag.addEventListener("click", () => {
            document.querySelector(".side-menu-search-wrap").style.background =
                "#1d1d1f";
            document
                .querySelector(".side-menu__btn-cancel")
                .classList.add("cancel-hidden");

            document
                .querySelector(".side-menu__btn-cancel")
                .classList.remove("cancel-appear");

            document
                .querySelector(".side-menu__list")
                .classList.remove("hide-list-side-menu-animation");
            document
                .querySelector(".side-menu__list")
                .classList.add("appear-list-side-menu-animation");

            document
                .querySelector(".search-list")
                .classList.remove("search-list-appear");
            document
                .querySelector(".search-list")
                .classList.add("search-list-hidden");
            document.querySelector(".header__side-menu").style.zIndex = "1999";
            document.querySelector(".header__side-menu").style.transform =
                "translateY(0)";
        });
    });

    // fix-header-event
    const fixHeaderBtn = document.querySelector(".fix-header-btn");
    fixHeaderBtn.addEventListener("click", () => {
        const checkBoxFixHeader = document.querySelector(
            ".fix-header-checkBox"
        );
        // console.log(checkBoxFixHeader.checked);
        if (checkBoxFixHeader.checked) {
            fixHeaderBtn.classList.add("rotate-fix-header-animation");
            fixHeaderBtn.classList.remove(
                "rotate-fix-header-animation-reverse"
            );
            const fixHeaderMenuElement =
                document.querySelector(".fix-header__menu");
            fixHeaderMenuElement.classList.add("fix-header__menu-animation");
            fixHeaderMenuElement.classList.remove(
                "fix-header__menu-hide-animation"
            );
            document
                .querySelector(".fix-header")
                .classList.add("fix-header__bg");
            document
                .querySelector(".fix-header__container")
                .classList.add("fix-header__bg");
            document
                .querySelector(".fix-header")
                .classList.add("height-animation");
            document
                .querySelector(".fix-header")
                .classList.remove("height-animation-reverse");
            document.querySelector(".modal-mobile").style.display = "block";
        } else if (checkBoxFixHeader.checked === false) {
            fixHeaderBtn.classList.remove("rotate-fix-header-animation");
            fixHeaderBtn.classList.add("rotate-fix-header-animation-reverse");

            const fixHeaderMenuElement =
                document.querySelector(".fix-header__menu");
            fixHeaderMenuElement.classList.remove("fix-header__menu-animation");
            fixHeaderMenuElement.classList.add(
                "fix-header__menu-hide-animation"
            );
            document
                .querySelector(".fix-header")
                .classList.remove("height-animation");
            document
                .querySelector(".fix-header")
                .classList.add("height-animation-reverse");
            document
                .querySelector(".fix-header__container")
                .classList.remove("fix-header__bg");
            document
                .querySelector(".fix-header")
                .classList.remove("fix-header__bg");
            document.querySelector(".modal-mobile").style.display = "none";
        }
    });

    const mediaQuery = window.matchMedia("(min-width:740px)");
    window.addEventListener("resize", () => {
        if (mediaQuery.matches) {
            document
                .querySelector(".header__side-menu")
                .classList.remove("side-menu-hide");
            document
                .querySelector(".menu-mobile-icon")
                .classList.remove("rotate-icon-animation");

            // fix header
            const fixHeaderMenuElement =
                document.querySelector(".fix-header__menu");
            fixHeaderMenuElement.classList.remove(
                "fix-header__menu-hide-animation"
            );
            const fixHeaderBtn = document.querySelector(
                ".fix-header__right__item-mobile"
            );
            fixHeaderBtn.classList.remove(
                "rotate-fix-header-animation-reverse"
            );
        }
    });
}
main();
