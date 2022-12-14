
// Kommentiere hier (b)
// circle1 und circle2 wird eine id gegeben für das svg Feld bestummen.
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
    
    // cx1 und cx2 bekommen den Attribut von cx (c)    
    // 
    let cx1 = parseFloat(circle1.getAttribute("cx"))     
    let cx2 = parseFloat(circle2.getAttribute("cx"))     

    // Start Loop
    if (false) { // Aufgabe (4b)
        ({v1, v2} = newVelocity(v1, v2))
    }

    // Kommentiere hier (d)
    // cx1 und cx2 werden mit v1/v2 addiert und wiederholt
    cx1 = cx1 + v1 / repetitions
    cx2 = cx2 + v2 / repetitions

    // End Loop
    
    // cx1 und cx2 werden wieder auf ihren ursprünglichen Wert gesetzt, der weiter oben geändert wurde (e)
    circle1.setAttribute("cx", cx1)
    circle2.setAttribute("cx", cx2)

    // wenn das runnging "true" ist, wird die dazugehörende Animation durchgeführt(f)
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
    return (count / 10**digits).toFixed(digits)
}

function start() {
   
}