// let num = 10
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