//№1 зробити змінну з значенням "We are good"

let stringHowU = 'We are good'
console.log (stringHowU)



//№2 створити 2 зміні зі значеннями ''Hello" і "World", створити команду для виведення в консоль цих слів разом

let stringTextOne = 'Hello'
let stringTextTwo = 'Word'
console.log (stringTextOne + stringTextTwo)



//№3 чи вірно оголошена перевірка типу даних - і якщо ні - то змінити на вірний варіант

//false
//let myVariable = 'value'
//typeof{'myVariable'}

//true
let myVariable = 'value'
console.log (typeof (myVariable))



//№4 чи вірно оголошений код для отримання значення іншої змінної

//false - цей код передає стрічку, яка не має відношення до іншої змінної 
//( `hello ${"name"}` )

//true 
let stringSomeName = "name"
let stringSomeText = `hello ${stringSomeName}` 
console.log(stringSomeText)

