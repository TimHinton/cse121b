/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2

function add(number1, number2){
    return number1 + number2;
}


// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum


function addNumbers(){
    let first = parseInt(document.getElementById("addend1").value);
    let second = parseInt(document.getElementById("addend2").value);

    let result = add(first, second);
    document.getElementById("sum").value = result;
}


// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

const addButton = document.getElementById("addNumbers");
addButton.addEventListener("click", addNumbers);


// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

const subtract = function (subNumber1, subNumber2) {
    return subNumber1 - subNumber2;
};

const subtractNumbers = function () {
    let first = document.getElementById("minuend").value;
    let second = document.getElementById("subtrahend").value;

    document.getElementById("difference").value = subtract(first, second);
};


const subButton = document.getElementById("subtractNumbers");
subButton.addEventListener("click", subtractNumbers);


// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

const multiply = (num1, num2) => num1 * num2;

const multiplyNumbers = () => {
    const first = document.getElementById("factor1").value;
    const second = document.getElementById("factor2").value;

    document.getElementById("product").value = multiply(first, second);
};


const multButton = document.getElementById("multiplyNumbers");
multButton.addEventListener("click", multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

function divide(number1, number2){
    return number1 / number2;
}


function divideNumbers(){
    const first = document.getElementById("dividend").value;
    const second = document.getElementById("divisor").value;

    document.getElementById("quotient").value = divide(first, second);
}


const divButton = document.getElementById("divideNumbers");
divButton.addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
newDate = new Date;

// Step 2: Declare a variable to hold the current year
let currentYear;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = newDate.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById("year").innerHTML = currentYear;


/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let numArray = [];
counter = 1;
while (counter <= 25) {
    numArray.push(counter);
    counter ++;
};

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").innerHTML = numArray;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let filteredNum = numArray.filter(odds => odds % 2 == 0);
document.getElementById("odds").innerHTML = filteredNum;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.getElementById("evens").innerHTML = numArray.filter(evens => evens % 2 == 0);

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
sumOfArray = document.getElementById("sumOfArray");
sumOfArray.innerHTML = numArray.reduce((accumulator, count) => accumulator += count, 0);

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
document.getElementById("multiplied").innerHTML = numArray.map(mapNum => mapNum * 2);

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
mapArray = numArray.map(mapNum => mapNum * 2);
reduceArray = mapArray.reduce((accumulator, count) => accumulator += count, 0);

document.getElementById("sumOfMultiplied").innerHTML = reduceArray;