// Assignment 3
// Part 1
// Practice with Arrays

//STEP 1
//var movies = ["Back to the Future", "Star Wars", "Aliens", "Terminator", "Caddyshack"];
//console.log(movies[1]);

//STEP 2
//var movies = new Array(5);
//movies[0] = "Back to the Future";
//movies[1] = "Star Wars";
//movies[2] = "Aliens";
//movies[3] = "Terminator";
//movies[4] = "Caddyshack";
//console.log(movies[0]);

//STEP 3
//var movies = new Array(5);
//movies[0] = "Back to the Future";
//movies[1] = "Star Wars";
//movies[3] = "Aliens";
//movies[4] = "Terminator";
//movies[5] = "Caddyshack";
//movies[2] = "Aliens the Remake";
//console.log(movies.length);

//STEP 4
//var movies = [];
//movies[0] = "Back to the Future";
//movies[1] = "Star Wars";
//movies[2] = "Aliens";
//movies[3] = "Terminator";
//movies[4] = "Caddyshack";
//delete movies[0];
//console.log(movies);

//STEP 5
//var movies = ["Back to the Future", "Star Wars", "Aliens", "Terminator", "Caddyshack", "Caddyshack 2", "Caddyshack 3"];
//for (var i = 0; i < movies.length; i++) {
//	console.log(movies[i]);
//}

//STEP 6
//var movies = ["Back to the Future", "Star Wars", "Aliens", "Terminator", "Caddyshack", "Caddyshack 2", "Caddyshack 3"];
//for (var i in movies) {
//	console.log(movies[i]);
//}

//STEP 7
//var movies = ["Back to the Future", "Star Wars", "Aliens", "Terminator", "Caddyshack", "Caddyshack 2", "Caddyshack 3"];
//for (var i in movies) {
//	movies.sort();
//	console.log(movies[i]);
//}

//STEP 8
//var mostFavmovies = ["Back to the Future", "Star Wars", "Aliens", "Terminator", "Caddyshack", "Caddyshack-2", "Caddyshack-3"];
//var leastFavMovies = ["Disaster Movie", "The Room", "Jurassic Shark"];
//console.log("Movies I like:\n");
//console.log("");
//for (var i = 0; i < mostFavmovies.length; i++) {
//	console.log(mostFavmovies[i] + " " + (i + 1));
//}
//console.log("");
//console.log("Movies I regret watching:");
//console.log("");
//for (var i = 0; i < leastFavMovies.length; i++) {
//	console.log(leastFavMovies[i] + " " + (i + 1));
//}

//STEP 9
//var mostFavmovies = ["Back to the Future", "Star Wars", "Aliens", "Terminator", "Caddyshack", "Caddyshack-2", "Caddyshack-3"];
//var leastFavMovies = ["Disaster Movie", "The Room", "Jurassic Shark"];
//var movies = mostFavmovies.concat(leastFavMovies).reverse();
//console.log(movies);

//STEP 10
//console.log(movies.pop());

//STEP 11
//console.log(movies.shift());

//STEP 12
//movies[movies.indexOf("Disaster Movie")] = "First Movie I Like";
//movies[movies.indexOf("The Room")] = "Second Movie I Like";
//movies[movies.indexOf("Jurassic Shark")] = "Third Movie I Like";

//STEP 13
//var employee1 = [];
//var employee2 = [];
//var employee3 = [];
//var employees = [];
//
//employee1["id"] = 1111;
//employee1["name"] = "Johann";
//employee1["title"] = "CEO";
//employee1["department"] = "top floor";
//employee1["isCurrent"] = true;
//
//employee2["id"] = 2222;
//employee2["name"] = "Zeeee";
//employee2["title"] = "Worker";
//employee2["department"] = "basement";
//employee2["isCurrent"] = true;
//
//employee3["id"] = 3333;
//employee3["name"] = "Newbie";
//employee3["title"] = "Assistant";
//employee3["department"] = "Cubicle";
//employee3["isCurrent"] = false;
//
//employees = [[employee1], [employee2], [employee3]];
//console.log(employees[1][0]['name']);

//STEP 14
//for (index in employees) {
//	console.log(employees[index][0]['name'])
//}

//STEP 15
//for (index in employees) {
//	if (employees[index][0]['isCurrent'] == true) {
//		console.log(employees[index][0]['name'])
//	}
//}

//STEP 16
//var movies = [["Back to the Future", 1], ["Star Wars", 2], ["Aliens", 3], ["Terminator", 4], ["Caddyshack", 5]];
//for (var i = 0; i < movies.length; i++) {
//	var favoriteMovies = movies[i].filter(function(item) {
//		return typeof item == "string";
//	});
//	console.log(favoriteMovies);
//}

// Practice with Functions

//STEP 1
//var displayMessage = function(message) {
//	console.log(message);
//}
//displayMessage("Hello!");

//STEP 2
//function calculate(num1, num2) {
//	console.log(num1 % num2);
//}
//calculate(10,7);

//STEP 3
//employees = ["Moos", "Wild", "Fast", "Evans", "Winner"];
//
//var showEmployee = function(array) {
//	console.log("Employees:");
//	console.log("");
//	for (var index in array) {
//		console.log(array[index]);
//	}
//}
//showEmployee(employees);

//a = [];
//b = [];
//c = [];
//
//a['color'] = "red";
//a['shape'] = "circle";
//a['texture'] = "smooth";
//
//b['color'] = "green";
//b['shape'] = "square";
//b['texture'] = "rough";
//
////console.log(a);
////console.log(b);
//
//c = [[a], [b]];
//
////for (var i = 0; i < c.length; i++) { 
////	console.log(c[i][0]);
////}
//// for (var i in c) {
////  console.log(c[i][0]);
//// }
//
////console.log(c[0][0]);
//for (index in c ) {
//console.log(c[index][0]['shape']);
////console.log(c[1][0]['shape']);
//}