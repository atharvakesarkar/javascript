//high order functions are use to take one or mutliple functions as a argument(input) AND returns the function

//greet variable consit of function , when the funciton will get executed it will print - hello
let greet = function () {
  console.log("hello");
};

//here made a fucnition that consist of two parameters func and count

function multiplegreet(func, count) {
  for (let i = 1; i <= count; i++) {
    //we use the 1<=count so that loop will understand were to stop and how much to print
    func(); //it execute the function that is stored in the greet variable and will get hello
  }
}

multiplegreet(greet, 10); //call the function and pass the argument for parameter -  func = greet , count = 10
//output - 10 times hello
