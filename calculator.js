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
        //so this is looking at the numbers variable (number buttons being pressed)
        //and the for each function is looping through an array 
        //this is written as forEach((number))
        //we have assigned a new element "number" inside the numbers string
        //and then the => is an arrow function
        //the code on the left side of the arrow tell us what will be considered
        //as input of the function and the code to the right of the arrow will tell
        //us the output of the function
        //then we are assigning the number to an event listener
        //meaning when the number button on the calculator is pressed by a "click",
        //then the computer will execute the following code
        handleNumber(e.target.textContent);
        //so inside the forEach function we have created a new function for when the 
        //button is"clicked" and that function is the handleNumber
        //function(e) explained: when using the addEventListener the parameter (e) is
        //added and represents the eventListener's value
        //we access the clicked value by using e.target
        //textContent is an HTML DOM element and sets/returs the text content of that
        //specified node
        currentScreen.textContent = currentValue;
        //we are setting the current screen to the e.target value
        //then we are setting that e.target value to an global variable
        //and we will be using these values later in another part of code
    }));

    operators.forEach((op) => op.addEventListener("click", function(e){
        //this is doing the same thing as the numbers but with the operators
        handleOperator(e.target.textContent);
        previousScreen.textContent = perviousValue + " " + operator;
        //so with the numbers we used current value instead of previous value
        //this is because the numbers are coming before the operator
        //with the operator we need to keep the previous number and add to it
        currentScreen.textContent = currentValue;
        //we are updating our global variable for when we need it in other functions
    }));
});

function handleNumber(num){
    //this is printing the buttons to the screen by using the 
    //previous values from the earlier function
    //and the if statement is limiting the amount of numbers entered to 5
    if (currentValue.length <= 5){
        currentValue += num;
        //we are updating our global variable for when we need it in other functions
    }
}

function handleOperator(op){
    operator = op;
    perviousValue = currentValue;
    currentValue = '';
}