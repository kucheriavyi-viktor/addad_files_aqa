//            0      1     2      3       4     5      6
let arr1 = ['kil', 'ooo', 343, 'jdujf', 2390, true, function() {console.log('Hi from array')}]

// let value = arr1[3]
// console.log(value)
// arr1[3] = 'New'
// console.log(arr1[3])
// console.log(arr1)
// arr1[6] ()

// let lArr1 = arr1.length
// console.log(lArr1)

// console.log(arr1.at(-3))

let result = [];
resultWithUpperC = []

for (let i = 0; i < arr1.length; i++) {
    // console.log(arr1[i])

    if (typeof arr1[i] === 'string') {
        result.push(arr1[i])
    }
}

for (let y = 0; y < result.length; y++){
    let word = result.at(y)
    let fistLetter = String(word[0]).toUpperCase()
    // console.log(fistLetter)
    let restLetters = String(word.slice(1))
    resultWithUpperC.push(fistLetter + restLetters)
}
// console.log(result)
console.log(resultWithUpperC)

// let mArr22 = [
//     [1, 3, 'Shrek'],
//     [4, 10],
//     [40, 50]
// ]
// let nameShrek = mArr22 [0] [2]
// console.log(nameShrek)

let mArr22 = [
    [1, 3, 'Shrek'],
    [4, 10],
    [40, 50]
]
for (let i = 0; i < mArr22.length; i++) {
    let smallArr = mArr22[i]
    for (let y = 0; y < smallArr.length; y++) {
        console.log("all array [" + i + "] [" + y +"] = " + smallArr[y])
    }
}