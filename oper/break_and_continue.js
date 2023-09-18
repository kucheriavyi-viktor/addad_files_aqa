// Do you remember the break statement from the switch statement? Well, that's not the 
// only place where you can use it.
// The break statement allows you to exit a loop prematurely, based on the given condition.

for(let i=0; i<10;i++) {
    if(i==3) {
      break;
    }
    console.log(i);
  }

  
// In the same way, you can use the break statement in while loops.
// For example:

// let num = 1;
// while(num<=10){
//     if(num == 3){
//         break;
//     }
//     console.log(num);
//     num++;
// }

// The continue statement is used to skip an iteration of the loop and continue from the 
// next one.
// This can be useful, for example, to skip some particular elements in the loop:

for(let i=0;i<10;i++) {
    if(i == 5) {
      continue;
    }
    console.log(i);
  }


// The given code declares a loop and calculates the multiplication of all 
// numbers from 1 to 10000.
// Make the necessary changes to break the loop when the result is larger 
// than 10000 and output the result.
// Use an if statement inside the loop and break the 
// loop based on the given condition.

let num = 1;

for(i = 1; i<=100, i++;){
    num*=i;
    //your code goes here
    if(num > 10000) {
      break;
}
}
//generate the result
console.log(num)
