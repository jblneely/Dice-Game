	function rollDice() {
	    var die1 = document.getElementById("die1");
	    var die2 = document.getElementById("die2");
	    var die3 = document.getElementById("die3");
	    var die4 = document.getElementById("die4");
	    var die5 = document.getElementById("die5");
	    var die6 = document.getElementById("die6");
	    var die7 = document.getElementById("die7");
	    var die8 = document.getElementById("die8");
	    var die9 = document.getElementById("die9");
	    var die10 = document.getElementById("die10");
	    var status = document.getElementById("status");
	    var d1 = Math.floor(Math.random() * 6) + 1;
	    var d2 = Math.floor(Math.random() * 6) + 1;
	    var d3 = Math.floor(Math.random() * 6) + 1;
	    var d4 = Math.floor(Math.random() * 6) + 1;
	    var d5 = Math.floor(Math.random() * 6) + 1;
	    var d6 = Math.floor(Math.random() * 6) + 1;
	    var d7 = Math.floor(Math.random() * 6) + 1;
	    var d8 = Math.floor(Math.random() * 6) + 1;
	    var d9 = Math.floor(Math.random() * 6) + 1;
	    var d10 = Math.floor(Math.random() * 6) + 1;
	    var p1Sum = d1 + d2 + d3 + d4 + d5;
	    var p2Sum = d6 + d7 + d8 + d9 + d10;
	    die1.innerHTML = d1;
	    die2.innerHTML = d2;
	    die3.innerHTML = d3;
	    die4.innerHTML = d4;
	    die5.innerHTML = d5;
	    status.innerHTML = "You rolled " + p1Sum + ".";

	    die1.innerHTML = d6;
	    die2.innerHTML = d7;
	    die3.innerHTML = d8;
	    die4.innerHTML = d9;
	    die5.innerHTML = d10;
	    status.innerHTML = "You rolled " + p2Sum + ".";

	    //substitute (this) in a loop for all these lines.
	    //var dice = document.getElementsByClassName("dice").innerHTML;

	    //if you console.log(dice);
	    //you would get an array
	    // for (var i = 0; i < dice.length; i++) {
	    //    			 // console.log('in the for loop');
	    //     console.log(dice);
	    //     dice[i] = Math.floor(Math.random() * 6) + 1;
	    //     			// console.log(dice[i]);
	    // }



	    //if any doubles players re-roll
	    // if (d1 == d2) {
	    //     status.innerHTML += "Doubles: All players re-roll!";

	}
	console.log('Im in here');



	//////////######Fix this syntactically next
	document.getElementById("#rollButton").on("click", rollDice());

	//write a function that takes two parameters
	//function blah(param1, param2)
	//compare the params and return which one is bigger

	var compareSums = function(p1Sum, p2Sum) {
	    if (p1Sum > p2Sum) {
	        console.log("Player two buys lunch!");
	    } else {
	        console.log("Player one buys lunch");
	    }
	};
	compareSums(3, 500);
