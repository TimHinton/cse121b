// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent = myInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent = myInfo.favoriteFoods[1];

let favoriteFood3 = document.createElement("li");
favoriteFood3.textContent = myInfo.favoriteFoods[2];

let favoriteFood4 = document.createElement("li");
favoriteFood4.textContent = myInfo.favoriteFoods[3];

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector("#favorite-foods").appendChild(favoriteFood1);
document.querySelector("#favorite-foods").appendChild(favoriteFood2);
document.querySelector("#favorite-foods").appendChild(favoriteFood3);
document.querySelector("#favorite-foods").appendChild(favoriteFood4);


foodElement = document.querySelector("#favorite-foods");
placeElement = document.querySelector("#places-lived");

function loopForEach (list) {
    list.forEach(element => {
    let pizza = document.createElement("ul");
    pizza.textContent = element;
    foodElement.appendChild(pizza);
    });
}
loopForEach(myInfo.favoriteFoods);

function mapLoop (element) {
    let pizza = document.createElement("ul");
    pizza.textContent = element;
    return pizza;
}
let favFoods = myInfo.favoriteFoods.map(mapLoop);


function foodHtmlReturn (food) {
    return `<li>${food}</li>`
}

function placeHtmlReturn (place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`
}

function htmlLongString (list, callback) {
  let htmlList = list.map(callback);
  return htmlList.join("");
}

foodElement.innerHTML = htmlLongString(myInfo.favoriteFoods, foodHtmlReturn);
placeElement.innerHTML = htmlLongString(myInfo.favoriteFoods, placeHtmlReturn);
