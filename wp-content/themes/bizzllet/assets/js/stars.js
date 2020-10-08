const bgd = document.querySelector(".bgd")

const myArray = ["star"];



// -- FAST PERFORMANCE STAR CREATION VERSION --
//creating dinamically: shooting stars

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
