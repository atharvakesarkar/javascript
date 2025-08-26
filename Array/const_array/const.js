// const num = 10;
// num = 12; //const.js:2 Uncaught TypeError: Assignment to constant variable. at const.js:2:5
// console.log(num); //this will cause an error becasue if we use the const the value cannot be change




// ✅ Allowed (modifying contents is fine)
// const numbers = [1, 2, 3];

// numbers[0] = 100;     // OK
// numbers.push(4);      // OK
// console.log(numbers); // [100, 2, 3, 4]



// const numbers = [1, 2, 3];
// numbers = [10, 20, 30];    // ❌ TypeError: Assignment to constant variable



// Not Allowed (assigning a new type)
// const numbers = [1, 2, 3];
// numbers = "hello";    // TypeError: Assignment to constant variable


// Not Allowed (make it point to another array variable)
// const numbers = [1, 2, 3];
// const other = [9, 8, 7];

// numbers = other;      //TypeError: Assignment to constant variable
