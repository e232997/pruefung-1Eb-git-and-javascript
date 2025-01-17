
// Kommentiere hier (b)
// 
const circle1 = document.querySelector("#circ1")
const circle2 = document.querySelector("#circ2")

let running = false
let v1 = 0
let v2 = 0
let digits = 1
let m = 100**digits
let repetitions = 1
let count = 0

function start() {
    running = true
    circle1.setAttribute("cx", 80)
    circle2.setAttribute("cx", 20)
    count = 0
    v1 = -1
    v2 = 0
    window.requestAnimationFrame(animationLoop)
}

function animationLoop() {
    
    // Kommentiere hier (c)    
    // 
    let cx1 = parseFloat(circle1.getAttribute("cx"))     
    let cx2 = parseFloat(circle2.getAttribute("cx"))     

    // Start Loop
    if (cx1 > cx2+ 10) { // Aufgabe (4b)
        ({v1, v2} = newVelocity(v1, v2))
    }

if (cx1=cx2){
    count = count+1
}


if (cx2 < 0){
    v2 = v2 *(-1)
    count = count +1
}


    // Kommentiere hier (d)
    // 
    cx1 = cx1 + v1 / 10000
    cx2 = cx2 + v2 / 10000


    // End Loop
    
    // Kommentiere hier (e)
    circle1.setAttribute("cx", cx1)
    circle2.setAttribute("cx", cx2)

    // Kommentiere hier (f)
    // 
    if ( running === true ) {
        window.requestAnimationFrame(animationLoop)
    }
}


function newVelocity(v1, v2) {
    return {
        v1: (m * v1 + (2 * v2 - v1)) / (m + 1),
        v2: (v2 + m * (2 * v1 - v2)) / (m + 1)
    }
}

function displayNumber() {
    return (count / 10**5).toFixed(digits)
}