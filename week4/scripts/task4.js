/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let timbo = {};

// Step 2: Inside of the object, add a property named name with a value of your name as a string
timbo.name = "Tim Hinton";

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
timbo.photo = 'images/VRV254.jpg';

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
timbo.favoriteFoods = ["pizza", "ice cream", "Twix"];

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
timbo.hobbies = ["sports", "coding", "television"];

// Step 6: Add another property named placesLived with a value of an empty array
timbo.placesLived = [];


// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
let newObject = {};
newObject.place = "";
newObject.length = "";

timbo.placesLived.push(newObject);

// Step 8: For each property, add appropriate values as strings
newObject.place = "Mesa";
newObject.length = "33 years";

// Step 9: Add additional objects with the same properties for each place you've lived
secondObject = {};
secondObject.place = "Denver";
secondObject.length = "3 years";

timbo.placesLived.push(secondObject);


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').innerHTML = timbo.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('src', timbo.photo);
document.querySelector('#photo').setAttribute('height', '400px');
document.querySelector('#photo').setAttribute('width', '250px');

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('alt', timbo.name);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favFoods = document.getElementById('favorite-foods')

for (let i=0; i < timbo.favoriteFoods.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = timbo.favoriteFoods[i];

    favFoods.append(listItem);
}

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
// done in step above

// Step 6: Repeat Step 4 for each hobby in the hobbies property
let favhobbies = document.getElementById('hobbies');

for (let i=0; i < timbo.hobbies.length; i++) {
    let hobbyItem = document.createElement('li');
    hobbyItem.textContent = timbo.hobbies[i];

    favhobbies.append(hobbyItem);
}

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
// done above

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
let lived = document.getElementById('places-lived');

for (thing of timbo.placesLived) {
    lived.innerHTML += '<dt>' + thing.place + '</dt>';
    lived.innerHTML += '<dd>' + thing.length + '</dd>';
}

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
// and done.
