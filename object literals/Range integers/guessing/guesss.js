// // user enter a max number and then tries  to guess  a random genreated number between 1 to max

let user = prompt("enter your number: ");


let guess = Math.floor(Math.random() * user + 1);
// console.log(guess);

while(true){
    if (user == "quit"){
        console.log("your guess is correct: ",guess);
        break;
        
    }
    if (guess != user){
        guess = prompt("guess is incorrect! try again");
    } else {
        console.log("you are correct!!" , guess);
        break;

    }
}



