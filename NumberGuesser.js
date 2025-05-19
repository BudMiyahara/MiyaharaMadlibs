const lowest = 1;

const highest = 100;

answer = Math.floor(Math.random() *(highest - lowest +1)) + lowest

let Attempts = 0;

let guess;

let running = true;

while(running){

    guess = window.prompt(`Pick a number, any number between ${lowest} - ${highest}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Remember, It has to be between 1 - 100");

    }
    else {
        Attempts++;
        if(guess < answer){
            window.alert("I'm sorry but your guess is too low.");
        }
        else if(guess > answer) {
            window.alert("Your number was too high.")

        }
        else{
            window.alert(`Congradulations! That is Correct! It only took you ${Attempts} to get it correct`)
                running = false;
        }


}
              
}

