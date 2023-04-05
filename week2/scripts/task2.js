/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = "Tim Hinton"

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = myName

// Step 3: declare and instantiate a variable to hold the current year
let thisYear = '2023'

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = thisYear

// Step 5: declare and instantiate a variable to hold the name of your picture
let myPic = 'images/VRV254.jpg'

// Step 6: copy your image into the "images" folder
done
// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector().setAttribute('src', myPic)



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favFoods = new Array('ice cream', 'Twix', 'bell peppers', 'oranges')

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = favFoods

// Step 3: declare and instantiate a variable to hold another favorite food
let anotherFood = 'pizza'

// Step 4: add the variable holding another favorite food to the favorite food array
favFoods.push(anotherFood)

// Step 5: repeat Step 2
document.querySelector('#food').textContent = favFoods

// Step 6: remove the first element in the favorite foods array
let removeFood = favFoods.shift()

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favFoods

// Step 8: remove the last element in the favorite foods array
let lastFood = favFoods.pop()

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favFoods


