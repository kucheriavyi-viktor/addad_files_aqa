// Loops
// Loops allow you to run the same code multiple times.
// This is useful, for example, when drawing animations in games, or creating a countdown.
// The for loop has the following syntax:

// for (initializer; condition; final-expression) {
//     // code to run
// }

// The initializer is a variable, which increments the number of times the loop has run.
// The condition is used to stop the loop.
// The final expression is run each time after the loop's code has run. It is usually used to increment the variable used in the condition.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// The loop creates a variable called i and initializes it to 1.
// Then, after each iteration, it increments the i variable by 1.
// The loop stops when i reaches 11, breaking the condition.

// Let's write a program for a shooter game, which will control the number of shots fired. 
// At the start of the level, the player has 5 bullets. 
// Each time the player shoots, the number of bullets should be decreased by 1.
// The for loop will help you here as well:

for(let i=5; i>=0; i-=1) {
    console.log(`Bullets: ${i}`);
  }

  
// Inspired by these words, let's create a little program that will output an 
// expression that is given as input, 3 times.
// Task
// Complete the code to output the given expression 3 times.

// let msg = readLine();
// //your code goes here
// for(let i=1; i<=3; i+=1) {
//     console.log(msg);
//   }