// user enter a max number and then tries  to guess  a random genreated number between 1 to max


let user = prompt("enter the max value: ");

let guess = Math.floor(Math.random() * user + 1);
console.log(guess);

