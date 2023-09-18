// We have a function that outputs "Welcome, user" as it is called. We want 
// to make it more personalized, so redesign the given function so that it will 
// take the given input as the name of the user and output the welcome 
// message with it.

// function welcome(){
//     let name = readLine();
//     //redesign function
//     console.log('Welcome, ' + name);
// }

// //call the function
// welcome()

function login(user) {
    console.log("Hi, "+user);
  }
  let myUser = "Bob";
  login(myUser);

  function discount(purchase){
    if (purchase>=1500){
        purchase*=0.85;
    }
    console.log(purchase);
}

discount(1900);//discount
discount(1200);//no discount


// You need to make a function that converts a foot value to inches.
// 1 foot has 12 inches.
// The given code takes the foot value as input and passes it to 
// the convert function.
// Task
// Complete the code by defining a convert() function that takes the foot 
// value as an argument and outputs the inches value.

let foot = parseInt(readLine(), 10);

/* Define the convert() function */
function convert(foot){
    console.log(foot*12);
}


convert(foot);