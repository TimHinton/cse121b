let arrayHTML = arrValue.map(function (step) {
    return '<li>${step}</li>';
});

const arrValue = ['one', 'two', 'three']

document.getElementById("myList").innerHTML = arrayHTML.join();


const abba = ['A', 'B', 'C'];

function convert (grade) {
    let points = 0;

    if (grade == 'A') {
        points = 4;

    } else if (grade == 'B') {
        points = 3;
    }
    return points;
}

const gpaConverted = abba.map(convert);