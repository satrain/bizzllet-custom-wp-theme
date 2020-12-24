const bgd = document.querySelector(".bgd")

const mobileMediaQuery2 = window.matchMedia('(max-width: 768px)')

// -- FAST PERFORMANCE STAR CREATION VERSION --
//creating dinamically: shooting stars
if (mobileMediaQuery2.matches) {
    var starStorage = Array.from({ length: 30 });
    var staticStarStorage = Array.from({ length: 30 });
}
else {
    var starStorage = Array.from({ length: 100 });
    var staticStarStorage = Array.from({ length: 150 });
}

console.log(starStorage.length + " " + starStorage.length)

function createStarFastVersion() {
    let content = "";
    starStorage.map(
        () => content += `<div class='star' style='animation-delay: ${Math.floor(Math.random() * 10) + "s"}; left: ${Math.floor(Math.random() * 250) + '%;'} top: ${Math.floor(Math.random() * 250) + '%'}; width: ${Math.floor(Math.random() * (280 - 50 + 1) + 50) + "px"}; height: ${Math.floor(Math.random() * (8 - 2 + 1) + 3) + "px"};'></div>`
    );
    bgd.innerHTML = content;
}

console.time('someFunction')
createStarFastVersion();
console.timeEnd('someFunction');


//Generating small static stars

function createStaticStar() {
    let content = "";
    staticStarStorage.map(
        () => content += `<div class="star2" style="width: 7px; height: 7px; top: ${Math.floor(Math.random() * 250) + "%"}; left: ${Math.floor(Math.random() * 250) + "%"}; transform: scale(0.${Math.floor(Math.random() * 9)});"></div>`
    );
    bgd.innerHTML += content;
}

console.time('staticFunction')
createStaticStar();
console.timeEnd('staticFunction')


// mouse cursor onmove 3d effect
const hero = document.querySelector("#hero");

var stars = document.querySelectorAll(".star2");

hero.addEventListener("mouseover", function (event) {
    let x = event.clientX;
    let y = event.clientY;
    let xTranslate = x * 0.01 + "px";
    let yTranslate = y * 0.01 + "px";

})
