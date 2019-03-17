let button = document.querySelector('.button'),
    ball1 = document.getElementById(1),
    ball2 = document.getElementById(2);
    
let stepLeft1 = 0,
    stepLeft2 = 0;

function back(x, timeFraction) {
    return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
}
function move() {
    stepLeft1 += 0.1;
    stepLeft2 += 5;
    ball1.style.marginLeft = stepLeft2 + "px";
    ball2.style.marginLeft = back(1.5 , stepLeft1) + "px";
    if (stepLeft1 < 7.79) {
        requestAnimationFrame(move);
        
    } else {
        cancelAnimationFrame(move);
    }
    console.log(stepLeft1);
    
}
button.addEventListener("click", function() {
    requestAnimationFrame(move);
});
