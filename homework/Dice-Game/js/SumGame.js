function onPageLoad() {
    $("#playerOneRollButton").on("click", playerOneRollDice); //change to key up
    console.log("player one button clicked");
    $("#playerTwoRollButton").on("click", playerTwoRollDice).hide(); //change to key up
    console.log("player two button clicked");

}
$(onPageLoad);

// function onHamburgerClicked() {
//     console.log("clicked");
// }

// document.addEventListener("DOMContentLoaded", function() {


//     var hamburgerMenu = document.getElementById(".hamburger");
//     console.log(startButton);

//     hamburgerMenu.addEventListener("click", function() {
//         gameStarted = true;

//         console.log('clicked!')
//         var startMenu = document.getElementById("start-menu");
//         var game = document.getElementById("game");

//         startMenu.classList.add("hidden");
//         game.classList.remove("hidden");

//     });

function getRandomNumberUpTo(max) {
    return Math.floor(Math.random() * 6) + 1;
}

var p1Sum;
var p2Sum;

var p1Array;
var p2Array;

var


function playerOneRollDice() {
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var die3 = document.getElementById("die3");
    var die4 = document.getElementById("die4");
    var die5 = document.getElementById("die5");
    var d1 = getRandomNumberUpTo(6);
    var d2 = getRandomNumberUpTo(6);
    var d3 = getRandomNumberUpTo(6);
    var d4 = getRandomNumberUpTo(6);
    var d5 = getRandomNumberUpTo(6);
    p1Sum = d1 + d2 + d3 + d4 + d5;
    p1Array = [d1, d2, d3, d4, d5];
    die1.innerText = d1;
    die2.innerText = d2;
    die3.innerText = d3;
    die4.innerText = d4;
    die5.innerText = d5;
    $("#player1Sum").html("Player one rolled " + p1Sum + ".");
    $("#playerTwoRollButton").show();
    $("#playerOneRollButton").hide();


    // var player1Dice = ["d1", "d2", "d3", "d4", "d5"]

    // $()
}

function playerTwoRollDice() {
    var die6 = document.getElementById("die6");
    var die7 = document.getElementById("die7");
    var die8 = document.getElementById("die8");
    var die9 = document.getElementById("die9");
    var die10 = document.getElementById("die10");
    var d6 = getRandomNumberUpTo(6);
    var d7 = getRandomNumberUpTo(6);
    var d8 = getRandomNumberUpTo(6);
    var d9 = getRandomNumberUpTo(6);
    var d10 = getRandomNumberUpTo(6);
    p2Sum = d6 + d7 + d8 + d9 + d10;
    p2Array = [d6, d7, d8, d9, d10];
    die6.innerText = d6;
    die7.innerText = d7;
    die8.innerText = d8;
    die9.innerText = d9;
    die10.innerText = d10;
    $("#player2Sum").html("Player two rolled " + p2Sum + ".");
    $("#playerTwoRollButton").hide();
    compareSums();
}

var compareSums = function() {
    $("#winnerMessage").hide()
    if (p1Sum > p2Sum) {
        $("#winnerMessage").text("Player two wins!");
    } else if (p1Sum === p2Sum) {
        $("#winnerMessage").text("Tie!  Re-roll please.");
    } else {
        $("#winnerMessage").text("Player one wins");
    }
    $("#winnerMessage").fadeIn(1500);
};




// var resetButton = document.getElementById("resetButton") {
//     $("#resetButton").on("click").location.reload("body");
// };







//if you console.log(dice);
//you would get an array
// for (var i = 0; i < dice.length; i++) {
//           // console.log('in the for loop');
//     console.log(dice);
//     dice[i] = Math.floor(Math.random() * 6) + 1;
//          // console.log(dice[i]);
// }



//if any doubles players re-roll
// if (d1 == d2) {
//     status.innerText += "Doubles: All players re-roll!";






//a function that takes two parameters
//function whoBuysLunch(param1, param2)
//compare the params and return which one is bigger
