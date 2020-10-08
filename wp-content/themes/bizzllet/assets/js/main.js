const header = document.querySelector("header")

const burger = document.querySelector('.burger')
const navMobile = document.querySelector('.nav-mobile-modal')
const bizzlletLogo = document.querySelector('.bizzllet-logo')

//Mobile - show navigation on burger click
burger.onclick = function () {
    navMobile.classList.toggle("nav-mobile-active");
    bizzlletLogo.classList.toggle("hide");
    burger.classList.toggle("open");
}

//Hide header nav on scrolldown and give it bgr-color when not on top of the page
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
    if (window.pageYOffset < 10) {
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


const mobileMediaQuery = window.matchMedia('(max-width: 768px)')


// Scroller1 + image changes
const scroller = document.querySelector(".paragraph-slider-scroll")
const simplifyPaymentsImg = document.querySelector(".simplify-payments-image")
function scroller1(hClass1, hClass2, hClass3) {
    let hPay = document.querySelector(hClass1)
    let hFollow = document.querySelector(hClass2)
    let hExchange = document.querySelector(hClass3)

    let slide1Height = hPay.offsetHeight + "px";
    let slide2Height = hFollow.offsetHeight + "px";
    let slide3Height = hExchange.offsetHeight + "px";

    hPay.addEventListener('mouseover', function () {
        scroller.style.marginTop = "0px";
        scroller.style.height = slide1Height;

        simplifyPaymentsImg.classList.add('simplify-payments-pay-image')

        simplifyPaymentsImg.classList.remove('simplify-payments-follow-image')
        simplifyPaymentsImg.classList.remove('simplify-payments-exchange-image')
    })
    hFollow.addEventListener('mouseover', function () {
        scroller.style.marginTop = "121px";
        scroller.style.height = slide2Height;

        simplifyPaymentsImg.classList.add('simplify-payments-follow-image')

        simplifyPaymentsImg.classList.remove('simplify-payments-pay-image')
        simplifyPaymentsImg.classList.remove('simplify-payments-exchange-image')
    })
    hExchange.addEventListener('mouseover', function () {
        scroller.style.marginTop = "242px";
        scroller.style.height = slide3Height;

        simplifyPaymentsImg.classList.add('simplify-payments-exchange-image')

        simplifyPaymentsImg.classList.remove('simplify-payments-pay-image')
        simplifyPaymentsImg.classList.remove('simplify-payments-follow-image')
    })
}


//Scroller2 + image changes
const scroller12 = document.querySelector(".paragraph-slider-scroll2")
const makeInvoicesImg = document.querySelector(".make-invoices-image")
function scroller2(hClass1, hClass2, hClass3) {
    let hPay = document.querySelector(hClass1)
    let hFollow = document.querySelector(hClass2)
    let hExchange = document.querySelector(hClass3)

    slide1Height = hPay.offsetHeight + "px";
    slide2Height = hFollow.offsetHeight + "px";
    slide3Height = hExchange.offsetHeight + "px";

    hPay.addEventListener('mouseover', function () {
        scroller12.style.marginTop = "0px";
        scroller12.style.height = slide1Height;

        makeInvoicesImg.classList.add('make-invoices-send-image')

        makeInvoicesImg.classList.remove('make-invoices-settlements-image')
        makeInvoicesImg.classList.remove('make-invoices-accounting-image')
    })
    hFollow.addEventListener('mouseover', function () {
        scroller12.style.marginTop = "121px";
        scroller12.style.height = slide2Height;

        makeInvoicesImg.classList.add('make-invoices-settlements-image')

        makeInvoicesImg.classList.remove('make-invoices-send-image')
        makeInvoicesImg.classList.remove('make-invoices-accounting-image')
    })
    hExchange.addEventListener('mouseover', function () {
        scroller12.style.marginTop = "242px";
        scroller12.style.height = slide3Height;

        makeInvoicesImg.classList.add('make-invoices-accounting-image')

        makeInvoicesImg.classList.remove('make-invoices-settlements-image')
        makeInvoicesImg.classList.remove('make-invoices-send-image')
    })
}


//Scroller3 + image changes
const scroller13 = document.querySelector(".paragraph-slider-scroll3")
const payEmployeesImg = document.querySelector(".pay-employees-image")
function scroller3(hClass1, hClass2, hClass3) {
    let hPay = document.querySelector(hClass1)
    let hFollow = document.querySelector(hClass2)
    let hExchange = document.querySelector(hClass3)

    hPay.addEventListener('mouseover', function () {
        scroller13.style.marginTop = "0px";
        scroller13.style.height = "178px";

        payEmployeesImg.classList.add('pay-employees-salaries-image')

        payEmployeesImg.classList.remove('pay-employees-equity-image')
        payEmployeesImg.classList.remove('pay-employees-bonuses-image')
    })
    hFollow.addEventListener('mouseover', function () {
        scroller13.style.marginTop = "121px";
        scroller13.style.height = "158px";

        payEmployeesImg.classList.add('pay-employees-equity-image')

        payEmployeesImg.classList.remove('pay-employees-salaries-image')
        payEmployeesImg.classList.remove('pay-employees-bonuses-image')
    })
    hExchange.addEventListener('mouseover', function () {
        scroller13.style.marginTop = "242px";
        scroller13.style.height = "178px";

        payEmployeesImg.classList.add('pay-employees-bonuses-image')

        payEmployeesImg.classList.remove('pay-employees-equity-image')
        payEmployeesImg.classList.remove('pay-employees-salaries-image')
    })
}



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
        //Added functions scroller inside slider function because that's the only way we can read full(real) height from elements which maybe have some display none - like paragraph inside unhovered features div
        scroller1(".paragraph-slide1", ".paragraph-slide2", ".paragraph-slide3");
        scroller2(".paragraph-slide4", ".paragraph-slide5", ".paragraph-slide6");
        scroller3(".paragraph-slide7", ".paragraph-slide8", ".paragraph-slide9");
    })

    hFollow.addEventListener('mouseover', function () {
        slide2.classList.add('slide-active')

        slide1.classList.remove('slide-active')
        slide3.classList.remove('slide-active')
        //Added functions scroller inside slider function because that's the only way we can read full(real) height from elements which maybe have some display none - like paragraph inside unhovered features div
        scroller1(".paragraph-slide1", ".paragraph-slide2", ".paragraph-slide3");
        scroller2(".paragraph-slide4", ".paragraph-slide5", ".paragraph-slide6");
        scroller3(".paragraph-slide7", ".paragraph-slide8", ".paragraph-slide9");
    })

    hExchange.addEventListener('mouseover', function () {
        slide3.classList.add('slide-active')

        slide1.classList.remove('slide-active')
        slide2.classList.remove('slide-active')
        //Added functions scroller inside slider function because that's the only way we can read full(real) height from elements which maybe have some display none - like paragraph inside unhovered features div
        scroller1(".paragraph-slide1", ".paragraph-slide2", ".paragraph-slide3");
        scroller2(".paragraph-slide4", ".paragraph-slide5", ".paragraph-slide6");
        scroller3(".paragraph-slide7", ".paragraph-slide8", ".paragraph-slide9");
    })
}

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

        scroller1(".paragraph-slide1", ".paragraph-slide2", ".paragraph-slide3");
        scroller2(".paragraph-slide4", ".paragraph-slide5", ".paragraph-slide6");
        scroller3(".paragraph-slide7", ".paragraph-slide8", ".paragraph-slide9");
    })

    hFollow.addEventListener('click', function () {
        slide2.classList.add('slide-active')
        slide1.classList.remove('slide-active')
        slide3.classList.remove('slide-active')

        scroller1(".paragraph-slide1", ".paragraph-slide2", ".paragraph-slide3");
        scroller2(".paragraph-slide4", ".paragraph-slide5", ".paragraph-slide6");
        scroller3(".paragraph-slide7", ".paragraph-slide8", ".paragraph-slide9");
    })

    hExchange.addEventListener('click', function () {
        slide3.classList.add('slide-active')
        slide1.classList.remove('slide-active')
        slide2.classList.remove('slide-active')

        scroller1(".paragraph-slide1", ".paragraph-slide2", ".paragraph-slide3");
        scroller2(".paragraph-slide4", ".paragraph-slide5", ".paragraph-slide6");
        scroller3(".paragraph-slide7", ".paragraph-slide8", ".paragraph-slide9");
    })
}


if (mobileMediaQuery.matches) {
    getMobileSlider('.paragraph-slide1', '.paragraph-slide2', '.paragraph-slide3', '.paragraph-slide1', '.paragraph-slide2', '.paragraph-slide3')
    getMobileSlider('.paragraph-slide4', '.paragraph-slide5', '.paragraph-slide6', '.paragraph-slide4', '.paragraph-slide5', '.paragraph-slide6')
    getMobileSlider('.paragraph-slide7', '.paragraph-slide8', '.paragraph-slide9', '.paragraph-slide7', '.paragraph-slide8', '.paragraph-slide9')
}
else {
    getSlider('.paragraph-slide1', '.paragraph-slide2', '.paragraph-slide3', '.paragraph-slide1', '.paragraph-slide2', '.paragraph-slide3')
    getSlider('.paragraph-slide4', '.paragraph-slide5', '.paragraph-slide6', '.paragraph-slide4', '.paragraph-slide5', '.paragraph-slide6')
    getSlider('.paragraph-slide7', '.paragraph-slide8', '.paragraph-slide9', '.paragraph-slide7', '.paragraph-slide8', '.paragraph-slide9')
}


// Hero star bgr animation

const bgd = document.querySelector(".bgd")

const myArray = ["star"];


// // -- SLOW PERFORMANCE STAR CREATION VERSION -- 
// //creating dinamically: shooting stars
// function createStarSlowVersion() {
//     console.time("Performance Check: ");
//     for (let i = 1; i < 100; i++) {
//         let star = document.createElement("div")
//         star.style.left = Math.floor(Math.random() * 250) + "%";
//         star.style.top = Math.floor(Math.random() * 250) + "%";
//         star.style.height = Math.floor(Math.random() * (8 - 2 + 1) + 3) + "px";
//         star.style.width = Math.floor(Math.random() * (280 - 50 + 1) + 50) + "px";
//         star.style.animationDelay = Math.floor(Math.random() * 10) + "s";
//         // star.style.zIndex = Math.floor(Math.random() * 5);
//         star.classList.add(myArray[Math.floor(Math.random() * 0)])

//         bgd.appendChild(star)
//     }
//     console.timeEnd("Performance Check: ");
// }
// // createStarSlowVersion();



// -- FAST PERFORMANCE STAR CREATION VERSION --
//creating dinamically: shooting stars

//create separate function for calling static Stars!!!!
var starStorage = Array.from({ length: 100 });
var staticStarStorage = Array.from({ length: 300 });

function createStarFastVersion() {
    console.time("Performance Check: ");
    let content = "";
    starStorage.map(
        () => content += `<div class="star2" style="width: ${Math.floor(Math.random() * 7) + "px"}; height: ${Math.floor(Math.random() * 7) + "px"}; top: ${Math.floor(Math.random() * 250) + "%"}; left: ${Math.floor(Math.random() * 250) + "%"};"></div>
        <div class='star' style='animation-delay: ${Math.floor(Math.random() * 10) + "s"}; left: ${Math.floor(Math.random() * 250) + '%;'} top: ${Math.floor(Math.random() * 250) + '%'}; width: ${Math.floor(Math.random() * (280 - 50 + 1) + 50) + "px"}; height: ${Math.floor(Math.random() * (8 - 2 + 1) + 3) + "px"};'></div>`
    );
    bgd.innerHTML = content;
    console.timeEnd("Performance Check: ");
}

createStarFastVersion();

// creating static small stars randomly on hero bgr
// function createStaticStar() {
//     console.time("Performance Static Star Check: ");
//     for (let i = 1; i < 300; i++) {
//         let star = document.createElement("div")
//         star.classList.add("star2")
//         let dimensions = Math.floor(Math.random() * 7) + "px";
//         star.style.width = dimensions;
//         star.style.height = dimensions;
//         star.style.left = Math.floor(Math.random() * 250) + "%";
//         star.style.top = Math.floor(Math.random() * 250) + "%";

//         bgd.appendChild(star)
//     }
//     console.timeEnd("Performance Static Star Check: ")
// }
// createStaticStar();

