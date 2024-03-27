let operator = '';
let perviousValue = '';
let currentValue = '';


document.addEventListener("DOMContentLoaded", function(){
    //this stores all HTML components into JS
    let clear = document.querySelector("clear");
    let equal = document.querySelector("equal");
    let decimal = document.querySelector("dot");
    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");
    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent);
        currentScreen.textContent = currentValue;
    }))
})

function handleNumber(num){
    currentValue += num;
}