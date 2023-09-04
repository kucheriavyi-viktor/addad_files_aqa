let num = 1
// while (num <= 7) {
//     console.log(num)
//     num++
// }

//do while
// do {
//     console.log(num)
//     num++
// } while (num <= 7)

// do {
//     num++
//     console.log(num)
// } while (num <= 7)


let sumOfloop = 0;

for (let i = 0; i < 7; i+=2) {
    console.log(i)
    if (i ==6 ) break;
    sumOfloop += i
}
console.log(sumOfloop)

// for (let i = 0; i <= num; i+=2) {
//     if (i == 6) continue
//     console.log(i)
//     sumOfloop += i
// }
// console.log(sumOfloop)

// for in  //objects
// for of //arays

// const obj1 = { prop1:1, prop2:2, prop3:'value3'}
// for (let prop in obj1) {
//     console.log(prop)
//     console.log(`${obj1[prop]}`)
//     if (`${obj1[prop]}` == 'New'){
//         console.log()
//     }
// }

// const arr1 = ['valar1', 'valar2', 'valar3']

// for (let valOfArr of arr1){
//     console.log(valOfArr)
// }