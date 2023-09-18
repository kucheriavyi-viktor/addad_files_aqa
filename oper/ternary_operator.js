//variable = (condition) ? value1: value2

let age = 42;
let isAdult = (age < 18) ? "Too young": "Old enough";
console.log(isAdult);

let bill = 1800;
bill = (bill >= 1500) ? bill * 0.85 : bill;
console.log(bill);

// ви можете використовувати потрійні оператори як альтернативу операторам if else
// вони мають 3 операнди: умову та 2 значення, одне з яких буде присвоєно змінній на основі цієї умови 
// потрійні оператори роблять код набагато коротший

// Logical or boolean operators
// Time flies when you’re having fun.
// Given a clock that measures 24 hours a day, and a program that takes the hour as input.

// Task
// Complete the program to output am to the console if the hour is in the range of 0 to 11 (inclusive), 
// and output pm if it's not.

let hour = parseInt(readLine(), 10);

//your code goes here
hour = (hour <= 11) ? "am" : "pm"
console.log(hour)