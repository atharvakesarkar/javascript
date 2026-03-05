// Arrow functions  - it is a another technique that is use to define function but also , it is use to reduce the line of code a normal define funciton usally occupied

// SYNTAX - const func = (args1 , args2....) => {function defination}

// code:

// const sum = (a, b) => {
//   console.log(a + b);
// };

// sum(10, 10);

// const square = (n) => {
//   return n * n;
// };

// console.log(square(2));

//-------------------------------------------------------------------------------------------------------------

// Array functions - implict return - means a function automatically returns a value without writing the return keyword

// const sum = (a, b) => a * b;
// console.log(sum(10, 10));

//--------------------------------------------------------------------------------------------------------------
// setTimeout = it is a build in function that is use to set a specfic time for execution of the function , it is milsecond - eg: 1000 = 1 second

// const name = () => {
//   console.log("Atharva kesarkar");
// };

// let time = setTimeout(name, 4000);

// console.log("hello , my name is ");
// console.log("hello , my name is ");
// console.log("hello , my name is ");
// console.log("hello , my name is ");

// --------------------------------------------------------------------------------------------------------------
// setInterval - it is a js function that run a piece of code repeately after a fixed amount of time

// let name = function () {
//   console.log("Atharva kesarkar");
// };

// let id = setInterval(name, 2000);

// console.log(id);

// clearInterval(1);

//--------------------------------------------------------------------------------------------------------------
// This with Arrow functions

//normal functions this depend on which object calls the function ,where as in Arrow function this come from parent(lexical) scope where the function was created

const student = {
  name: "Atharva",
  marks: 9.04,
  prop: this, //global scope - this becomes global because objects do not create their own scope, so this takes the value of the surroudings(global)

  getname: function () {
    console.log(this); //in normal function , this becomes the object that appears before the dot when the funciton is called
    console.log(this.name);
  },

  getmarks: () => {
    console.log(this); //Arrow functions do not create their own this; they inherit this from the surroundings lexical (parent) scope where the function is denied
    console.log(this.marks);
  },

  getInfo1: function () {
    setTimeout(() => {
      console.log(this); //the arrow function inside setTimeout does not create its own this , so it inherits this from the surrounding normal funciton , getInfo1 , where this is the student object
    }, 2000);
  },

  getInfo2: function () {
    setTimeout(function () {
      console.log(this); //the normal function inside setTimeout creates its own this , and since it is executed by the browser timer(window) instead of the student object, this becomes the window object
    }, 2000);
  },
};

console.log(student.getInfo1());
