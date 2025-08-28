favi_movie = "avatar";

let guess = prompt("guess my faviorate movie name..");


while((guess != favi_movie) && (guess != "Quit")){
    guess = prompt("oops! wrong. try again");
}

if (guess == favi_movie){
    console.log("wowwww! you are right");
} else{
    console.log("you Quit");

}



// using break statement for Quit
let favi_movie = "avatar";

let guess = prompt("guess my faviorate movie name..");


while((guess != favi_movie)){
    if (guess == "Quit"){
        break;
    }
    guess = prompt("oops! wrong. try again");
}

if (guess == favi_movie){
    console.log("wowwww! you are right");
} else{
    console.log("you Quit");
} 
