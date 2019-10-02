// document.getElementById("startOver").onclick = startAgain;
let history = [];
let random = Math.floor(Math.random() * 100) + 1;   //randomly choose a random number 1-100
let guessCount = 0;

function numberGuessing () {
    //Take number from Textbox
    let number = document.getElementById("numberInput").value;
    //History
    if (history.includes(number)) {
        document.getElementById("result").innerHTML = "You already choose this number!"
        return;
    }
    
    //Start counting number of guesses
    document.getElementById("guessRemain").innerHTML = 9 - guessCount;
    if (guessCount > 9) {
        alert("Oops you have already tried 10 times!!")
        document.getElementById("guessRemain").innerHTML = "";
        return;
    }
    
    //IF CONDITION
    if (number>random) {
        document.getElementById("result").innerHTML = "TOO HIGH!";
        document.getElementById("numberInput").value = "";
        ++guessCount;
    
    }
    else if (number<random) {
        document.getElementById("result").innerHTML = "TOO LOW!";
        document.getElementById("numberInput").value = "";
        ++guessCount;

    }
    else {
        alert("YOU ARE CORRECT!!");
        document.getElementById("numberInput").value = "";
    }
    history.push(number);
    document.getElementById("pastGuess").innerHTML = history;
}



