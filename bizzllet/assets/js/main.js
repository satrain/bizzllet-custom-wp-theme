const header = document.querySelector("header")

const burger = document.querySelector('.burger')
const navMobile = document.querySelector('.nav-mobile-modal')
const bizzlletLogo = document.querySelector('.bizzllet-logo')


burger.onclick = function () {
    navMobile.classList.toggle("nav-mobile-active");
    bizzlletLogo.classList.toggle("hide");
    burger.classList.toggle("open");
}

var prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("header").style.top = "0";
        document.querySelector("header").style.background = "#202832";
        document.querySelector("header").style.padding = "17px 60px";
    } else {
        document.querySelector("header").style.top = "-100px";
        document.querySelector("header").style.background = "transparent";
    }
    if (window.pageYOffset < 100) {
        document.querySelector("header").style.background = "transparent";
    }
    prevScrollpos = currentScrollPos;
})

// window.addEventListener("scroll", function () {
//     if(window.pageYOffset > 50) {
//         header.style.top = "-50px";
//         header.style.backgroundColor = "lightgray";
//     }
//     else {
//         header.style.top = "0";
//         header.style.backgroundColor = "transparent";
//     }
// })



/* *** ANIMATION ON SCROLL FUNCTION ***
function appearOnScroll(element2, e) {
    var element = document.querySelector(element2)
    var elementPosition = element.getBoundingClientRect().top
    var screenPosition = window.innerHeight / 1.3

    if (elementPosition < screenPosition) {
        element.classList.add(e)
    }
}

window.addEventListener("scroll", function () {
    appearOnScroll(".newsletter-section", "fadeIn");
})

*/


// Calling slider-active function
function getSlider(hClass1, hClass2, hClass3, slideClass1, slideClass2, slideClass3) {

    let hPay = document.querySelector(hClass1)
    let hFollow = document.querySelector(hClass2)
    let hExchange = document.querySelector(hClass3)

    const slide1 = document.querySelector(slideClass1)
    const slide2 = document.querySelector(slideClass2)
    const slide3 = document.querySelector(slideClass3)

    hPay.addEventListener('mouseover', function () {
        slide1.classList.add('slide-active')
        slide2.classList.remove('slide-active')
        slide3.classList.remove('slide-active')
    })

    hFollow.addEventListener('mouseover', function () {
        slide2.classList.add('slide-active')
        slide1.classList.remove('slide-active')
        slide3.classList.remove('slide-active')
    })

    hExchange.addEventListener('mouseover', function () {
        slide3.classList.add('slide-active')
        slide1.classList.remove('slide-active')
        slide2.classList.remove('slide-active')
    })
}


// Scroller1
const scroller = document.querySelector(".paragraph-slider-scroll")
function scroller1(hClass1, hClass2, hClass3) {
    let hPay = document.querySelector(hClass1)
    let hFollow = document.querySelector(hClass2)
    let hExchange = document.querySelector(hClass3)

    hPay.addEventListener('mouseover', function () {
        scroller.style.marginTop = "0px";
        scroller.style.height = "238px";
    })
    hFollow.addEventListener('mouseover', function () {
        scroller.style.marginTop = "121px";
        scroller.style.height = "198px";
    })
    hExchange.addEventListener('mouseover', function () {
        scroller.style.marginTop = "242px";
        scroller.style.height = "158px";
    })
}
scroller1(".paragraph-slide1", ".paragraph-slide2", ".paragraph-slide3");


//Scroller2
const scroller12 = document.querySelector(".paragraph-slider-scroll2")
function scroller2(hClass1, hClass2, hClass3) {
    let hPay = document.querySelector(hClass1)
    let hFollow = document.querySelector(hClass2)
    let hExchange = document.querySelector(hClass3)

    hPay.addEventListener('mouseover', function () {
        scroller12.style.marginTop = "0px";
        scroller12.style.height = "238px";
    })
    hFollow.addEventListener('mouseover', function () {
        scroller12.style.marginTop = "121px";
        scroller12.style.height = "198px";
    })
    hExchange.addEventListener('mouseover', function () {
        scroller12.style.marginTop = "242px";
        scroller12.style.height = "178px";
    })
}
scroller2(".paragraph-slide4", ".paragraph-slide5", ".paragraph-slide6");


//Scroller3
const scroller13 = document.querySelector(".paragraph-slider-scroll3")
function scroller3(hClass1, hClass2, hClass3) {
    let hPay = document.querySelector(hClass1)
    let hFollow = document.querySelector(hClass2)
    let hExchange = document.querySelector(hClass3)

    hPay.addEventListener('mouseover', function () {
        scroller13.style.marginTop = "0px";
        scroller13.style.height = "178px";
    })
    hFollow.addEventListener('mouseover', function () {
        scroller13.style.marginTop = "121px";
        scroller13.style.height = "158px";
    })
    hExchange.addEventListener('mouseover', function () {
        scroller13.style.marginTop = "242px";
        scroller13.style.height = "178px";
    })
}
scroller3(".paragraph-slide7", ".paragraph-slide8", ".paragraph-slide9");



function getMobileSlider(hClass1, hClass2, hClass3, slideClass1, slideClass2, slideClass3) {

    const hPay = document.querySelector(hClass1)
    const hFollow = document.querySelector(hClass2)
    const hExchange = document.querySelector(hClass3)

    const slide1 = document.querySelector(slideClass1)
    const slide2 = document.querySelector(slideClass2)
    const slide3 = document.querySelector(slideClass3)

    hPay.addEventListener('click', function () {
        slide1.classList.add('slide-active')
        slide2.classList.remove('slide-active')
        slide3.classList.remove('slide-active')
    })

    hFollow.addEventListener('click', function () {
        slide2.classList.add('slide-active')
        slide1.classList.remove('slide-active')
        slide3.classList.remove('slide-active')
    })

    hExchange.addEventListener('click', function () {
        slide3.classList.add('slide-active')
        slide1.classList.remove('slide-active')
        slide2.classList.remove('slide-active')
    })

}

const mobileMediaQuery = window.matchMedia('(max-width: 768px)')

// Check if it's in mobile view
if (mobileMediaQuery.matches) {
    //if yes call mobile slider which works onclick
    getMobileSlider('.h3-pay', '.h3-follow', '.h3-exchange', '.paragraph-slide1', '.paragraph-slide2', '.paragraph-slide3')
    getMobileSlider('.h3-send', '.h3-settlements', '.h3-accounting', '.paragraph-slide4', '.paragraph-slide5', '.paragraph-slide6')
    getMobileSlider('.h3-salaries', '.h3-equity', '.h3-bonuses', '.paragraph-slide7', '.paragraph-slide8', '.paragraph-slide9')
}
else {
    //if not call desktop slider which works on mouseover - hover
    getSlider('.paragraph-slide1', '.paragraph-slide2', '.paragraph-slide3', '.paragraph-slide1', '.paragraph-slide2', '.paragraph-slide3')
    getSlider('.paragraph-slide4', '.paragraph-slide5', '.paragraph-slide6', '.paragraph-slide4', '.paragraph-slide5', '.paragraph-slide6')
    getSlider('.paragraph-slide7', '.paragraph-slide8', '.paragraph-slide9', '.paragraph-slide7', '.paragraph-slide8', '.paragraph-slide9')
}



// Hero star bgr animation

const bgd = document.querySelector(".bgd")

const myArray = ["star"];

function createStar() {
    for (let i = 1; i < 100; i++) {
        let star = document.createElement("div")
        star.style.left = Math.floor(Math.random() * 250) + "%";
        star.style.top = Math.floor(Math.random() * 250) + "%";
        star.style.height = Math.floor(Math.random() * (8 - 2 + 1) + 3) + "px";
        star.style.width = Math.floor(Math.random() * (280 - 50 + 1) + 50) + "px";
        star.style.animationDelay = Math.floor(Math.random() * 10) + "s";
        star.style.zIndex = Math.floor(Math.random() * 5);
        star.classList.add(myArray[Math.floor(Math.random() * 0)])

        bgd.appendChild(star)
    }
}

createStar();

// function createStaticStar() {
//     for (let i = 1; i < 110; i++) {
//         let star = document.createElement("div")
//         star.classList.add("star2")
//         star.style.left = Math.floor(Math.random() * 250) + "%";
//         star.style.top = Math.floor(Math.random() * 250) + "%";

//         bgd.appendChild(star)
//     }
// }
// createStaticStar();