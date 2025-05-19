//I first have to set the range of numbers in which the computer can pick from which in this case is 1-100.

//Then I have to give it the ability to select a random number from this range using math.random

//Then I will create the prompt to show up when the window is opened.

//Then I will create a few responses for when the players enter a number. One will be if the player doesn’t guess a number within the range, another will be for if your guess is too high and another for if it's too low. The last will be if you get it correct. 

//Finally I will use running = false to stop the game.




const lowest = 1;

const highest = 100;

answer = Math.floor(Math.random() *(highest - lowest +1)) + lowest;

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
            window.alert("Your number was too high.");

        }
        else{
            window.alert(`Congradulations! That is Correct! It only took you ${Attempts} to get it correct`);
                running = false;
        }


}
              
}

