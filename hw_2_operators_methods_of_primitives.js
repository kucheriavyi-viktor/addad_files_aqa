//let x = 5; let y = 5; Use the addition assignment (*=) operator that will result in x being 25 (same as x = x * y).
let x = 5
let y = 5
x *= y
console.log(x)

//create new variable 'let1' in lower case.
let let1 = 'Today is a good day'
let let1LowCase = let1.toLowerCase()
console.log(let1LowCase)

//Update value 'let1' to upper case.
let let1UpCase = let1.toUpperCase()
console.log(let1UpCase)

//Create another variable with few words and contain 'let1'. use method replace to word 'BANG'
let updateLet1 = let1.replace('good', 'BANG')
console.log(updateLet1)

//create comparison operator to log true, when x is NOT equal to y.
let comparisonResult = x !== y
console.log(comparisonResult)

//create variable with using addition assignment (+=) for two numbers
// let a = 5
// let b = 6
// let c = a += b
// console.log(c)
let a = 5 + 6
console.log(a)

//create variable that should be 'false' with using equality operator
let operEqual = x === y
console.log(operEqual)