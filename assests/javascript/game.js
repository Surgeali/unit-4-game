// create display variables for wins, losses, totalScore, randomNum using $("#id")
var displayWins = $('#wins');
var displayLosses = $('#losses');
var displayTotalScore = $('#totalscore');
var displayrandomNum = $('#randomNum');

// later, set the variables text or value = wins, losses, totalScore, or randomNum "logic" variable

// var wins = "Wins:";
// var losses = "Losses: + "

$(document).ready(function () {
    var randomNum = Math.floor(Math.random() * 68) + 30;
    console.log("ready!");
    $(displayrandomNum).append(randomNum);
    console.log(displayrandomNum);
});
for (var i = 0; i < 4; i++) {
    console.log("Crytal Collector!")
}

//     var randomNum = Math.floor(Math.random() * 12) + 1;
//     console.log(randomNum);
// }

// add a class to each crystal in your HTML
// select an element by its classname using jquery and store in a variable
//var crystals.
// .gemBtn on click run a function that sets your total score variable plus and equals to total score (totalScore += totalScore)
// if the total score variable is equal to a random number you wins increases by one
// if the total score is greater the random number losses increase and run a function reset
// reset function sets total score to zero and generates a new random number