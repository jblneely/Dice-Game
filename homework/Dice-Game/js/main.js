function onPageLoad() {
    $("#playerOneRollButton").on("click", playerOneRollDice);
    console.log("player one button clicked");
    $("#playerTwoRollButton").on("click", playerTwoRollDice);
    console.log("player two button clicked");

}
$(onPageLoad);

function getRandomNumberUpTo(max) {
    return Math.floor(Math.random() * 6) + 1;
}


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
    var p1Sum = d1 + d2 + d3 + d4 + d5;
    $("#player1sum").text("You rolled " + p1Sum + ".");
    die1.innerText = d1;
    die2.innerText = d2;
    die3.innerText = d3;
    die4.innerText = d4;
    die5.innerText = d5;
    //return "You rolled " + p1Sum + ".";
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
    var p2Sum = d6 + d7 + d8 + d9 + d10;
    // $("#player2Sum").text("p2Sum")
    die6.innerText = d6;
    die7.innerText = d7;
    die8.innerText = d8;
    die9.innerText = d9;
    die10.innerText = d10;
    return "You rolled " + p2Sum + ".";
}
console.log('hola');

// var compareSums = function(p1Sum, p2Sum) {
//     if (p1Sum > p2Sum) {
//         console.log("Player two buys lunch!");
//     } else {
//         console.log("Player one buys lunch");
//     }
// };
// compareSums(3, 500);



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
