// // create an array named arr
// let arr = [];
// // create a loop from 0 to 9
// for (let i = 0; i < 10; i++) {
// // add a random number between 1 and 100 to the array using the push method
// arr.push(Math.floor(Math.random() * 100) + 1);
// }
// // console the array
// console.log(arr);


// create an array named arr with 10 elements
let arr = [1, "a", 2, "b", 3, "c", 4, "d", 5, "e"];



// create a function named addValue that will add a value to the array under index 500
function addVal(array, value) {
array[500] = value;
}

// create a function named splitArray that will create two new arrays - one with string elements only, and another only with numbers
function splitArray(array) {
// create an empty array named strings to store the string elements
let strings = [];
// create an empty array named numbers to store the number elements
let numbers = [];
// create a for loop to iterate over the array
for (let i = 0; i < array.length; i++) {
// get the current element of the array
let element = array[i];
// check the type of the element using the typeof operator
if (typeof element === "string") {
// if the element is a string, push it to the strings array using the push method
strings.push(element);
} else if (typeof element === "number") {
// if the element is a number, push it to the numbers array using the push method
numbers.push(element);
}
}
// return an object with two properties: strings and numbers, each holding the corresponding array
return {strings: strings, numbers: numbers};
}
