// Assignment 3, Part 2

// Rock, Paper, Scissors Game

//// Phase 1
////STEP 1
//var userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();
////STEP 6
//while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
//	window.alert("You entered \"" + userChoice + "\" which is invalid... try again!");
//	userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();
//}
//
//// Phase 2
////STEP 3
//var computerChoice = Math.random();
//if (computerChoice < 0.34) {
//	computerChoice = "rock";
//} else if (computerChoice <= 0.67) {
//	computerChoice = "paper";
//} else {
//	computerChoice = "scissors";
//}
//
//// Phase 3
////STEP 4
//function gameRPS(choice1,choice2) {    
//	if (choice1 === choice2) {
//		//STEP 5
//		return "The result is a tie!";
//	}	else if (choice1 === "rock") {
//		if (choice2 === "scissors") {
//			return "rock wins";
//	}	else {
//		return "paper wins";
//	}
//	}   else if (choice1 === "paper") {
//		if (choice2 === "rock") {
//			return "paper wins";
//	}	else {
//		return "scissors wins";
//	}           
//	}	else if (choice1 === "scissors") {
//		if (choice2 === "paper") {		
//			return "scissors wins";
//	}	else {
//		return "rock wins";
//		}
//	}    
//}
//window.alert("Computer chose: " + computerChoice + "\n" + "You chose: " + userChoice + "\n" + gameRPS(userChoice, computerChoice));

// Basic calculator

////STEP 1
//var num1 = parseInt(prompt("Enter a number:"), 10);
////STEP 2
//var num2 = parseInt(prompt("Enter a second number:"), 10);
////STEP 3
//var operation = prompt("Enter an Operation:\n HINT: add, subtract, multiply or divide").toLowerCase();
////STEP 7
//while (operation != "add" && operation != "subtract" && operation != "multiply" && operation != "divide" ) {
//	window.alert("You entered \"" + operation + "\" which is invalid... try again!");
//	operation = prompt("Enter an Operation:\n HINT: add, subtract, multiply or divide").toLowerCase();
//}
////STEP 4
//function calculate(num1, num2, operation) {
//	//STEP 6
//	switch (operation) {
//		case "add":
//			window.alert(num1 + num2);
//			break;
//		case "subtract":
//			window.alert(num1 - num2);
//			break;
//		case "multiply":
//			window.alert(num1 * num2);
//			break;
//		default:
//			window.alert(num1 / num2);
//	}	
//}
////STEP 5
//calculate(num1, num2, operation);

// Death by JavaScript

//STEP 1
//function strAlpha(str) {
//	str = str.split('');
//	str = str.sort();
//	str = str.join('');
//	return str;
//}
//console.log(strAlpha("frontendwebdevelopment"));

//STEP 2
//function strCapital(str) {
//	var arr1 = str.split(' '), arr2 = [];
//	for (var i = 0; i < arr1.length; i++) {
//		arr2.push(arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1));
//	}
//		return arr2.join(' ');
//}
//console.log(strCapital("how many quick brown foxes can jump this high"));

//STEP 3
//function strVowelCount(str) {
//	var matchedVowels = str.match(/(a|o|i|e|u)/gi);
//	var count = matchedVowels.length;
//	return count;
//}
//console.log(strVowelCount("The quick brown fox"));

//STEP 4
//function strRandom(num) {
//	var pool = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTVWYXZ0123456789~`!@#$%^&*()_+-={}[]:'<>?,./|\\'";
//	var rand = "";
//	while (num !== rand.length)
//	rand += pool.charAt(Math.floor(Math.random() * pool.length));
//	return rand;
//}
//console.log(strRandom(8));

//STEP 5
//function longestCountryName(countries) {
//	var longest = "";
//	for (i = 0; i < countries.length; i++) {
//		if (longest.length < countries[i].length) {
//			longest = countries[i];
//		}
//	}
//	return longest;	
//}
//console.log(longestCountryName(["Australia", "Germany", "United States of America"]));










