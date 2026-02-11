// scope - determines the accessbility of variables , objects and functions from differnt parts of the code

//----------------------------------------------------------------------------------------------------------------
//types:
//function scope : variables define inside a funciton are not accessible (visible) from outside the function

// let sum = 67; //global scope - it can be access inside and outside the function also , everywhere in the code

// function calu(a, b) {
//   let sum = a + b; //function scope
//   console.log(sum); //print the function scope
// }

// calu(10, 20);

// console.log(sum); //print the global scope

//----------------------------------------------------------------------------------------------------------------
//block scope : variables declared inside a {} block cannot be accessed outside the block

// {
//   let a = 10;
//   console.log(a);
// }
// console.log(a);

// ________________________________________________________
// eg of block scope

// for (let i = 1; i <= 5; i++) {
//   console.log(i); //i can be only access inside the block {}
// }

// console.log(i); //can't access i outside the block is called blocked scope

//-----------------------------------------------------------------------------------------------------------------
//lexical scope : a variable defined outside a function can be accessible inside anouther function degined after the variable declaration

// function outside() {
//   let a = 10;
//   let b = 20;

//   function inside() {
//     console.log(a + b);
//   }
//   inside();
// }

// ______________________________________________________________________________________

// Hoisting : in javascript  behaviour when the variable and function declarations are processed before execution, allowing them to be referenced earlier in the code

// Function declarations are hoisted with their definition,
// so they can be called before they appear in the code.

// say();
// function say() {
//   console.log("hello guys");
// }

// ______________________________________________________________________________________

// let variables are not accessible before initialization.
// Accessing them earlier causes a ReferenceError due to
// the Temporal Dead Zone.

// console.log(a); // ReferenceError
// let a = 10;

// ________________________________________________________________________________________________________

//THE opposite is not possible

// function outerfunc() {
//   function innerfunc() {
//     let a = 10;
//   }
//   console.log(a);

//   innerfunc();
// }

//---------------------------------------------------------------------------------------------------------------

//pratice questions
// 1. what will be the output

let greet = "hello"; //global scope

function changegreet() {
  let greet = "namaste"; //function scope
  console.log(greet);

  function innergreet() {
    console.log(greet); //lexical scope
  }
}

console.log(greet); //hello
changegreet(); //namaste
