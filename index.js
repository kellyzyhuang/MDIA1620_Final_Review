// Object 
// var panda = {
//   name : "Po",
//   age: 20, 
//   color: "Black and White",
//   hungry: true,
//   feed: function(){
//     if(this.hungry == true) {
//       return this.name + " is a fatty."; 
//     } else {
//       return this.name + " probably just ate."; 
//     }
//   }
// }


// Object Constructor 
// function Panda(name, age, hungry){
//   this.name = name; 
//   this.age = age; 
//   this.hungry = hungry; 
//   this.feed = function(){
//     if(this.hungry == true){
//       return this.name + " is a fatty."; 
//     } else{
//       return this.name + " probably just ate."; 
//     }
//   }
// }

// var panda1 = new Panda("Steve", 45, true); 
// var panda2 = new Panda("Carl", 47, false); 
// var panda3 = new Panda("Sally", 56, true); 

// console.log(panda1.feed()); 
// console.log(panda2.feed()); 
// console.log(panda3.feed()); 

// If Else Statement 
// var age = 19; 
// if(age < 20){
//   console.log("Okay purr you're young!"); 
// } else if (age < 30){
//   console.log("Okay you're getting kind of old girlypop!"); 
// } else {
//   console.log("OMG! You're a hag!"); 
// }

// Switch Statement 
// var output; 
// var genre = 3; 
// switch(genre) {
//   case 1: 
//     output = "horror"; 
//     break; 
//   case 2: 
//     output = "comedy"; 
//     break; 
//   case 3:
//     output = "romance"; 
//     break; 
//   case 4:
//     output = "drama"; 
//     break; 
//   case 5: 
//     output = "thriller"; 
//     break; 
//   default: 
//     output = "none"; 
// }

// var number = 10; 

// switch(number){
//   case 0:
//     console.log("Fail"); 
//     break; 
//   case 5: 
//     console.log("Too low"); 
//     break; 
//   case 10:
//     console.log("You guessed right"); 
//     break; 
//   default:
//     console.log("No"); 
// }

// var fruit = "peanut"; 
// var sentence = ""; 

// switch(fruit){
//   case "apple":
//     console.log("Make apple pie"); 
//     break; 
//   case "orange":
//     console.log("Make orange juice"); 
//     break; 
//   default: 
//     console.log("Order in goofy"); 
// }

// console.log(output); 

// For Loop with Array 
// var students = ["Sally", "Steve", "Sarah", "Susan", "Sillybilly"]; 

// for(var i = 0; i < 5; i++) {
//   console.log(students[i]); 
// }

// for(var i = 0; i < students.length; i++) {
//   console.log(students[i], students.length); 
// }

// console.log(students.length); 

// For Of 
// var students = ["Sally", "Steve", "Sarah", "Susan", "Sillybilly"]; 

// for (var i of students) {
//   console.log(i); 
//   i++; 
// }

// For In 
// var student = {name: "Steve", age: 15, race: "White"}; 

// for (var i in student) {
//   console.log(student[i]);
//   i++; 
// }

// For In 

// for (var i in panda1) {
//   console.log(panda1[i]); 
//   i++; 
// }

// While Loop 

// var x = 1; 
// while(x <= 10){
//   console.log(x); 
//   x++; 
// }

// var x = 10; 
// while(x > 0){
//   console.log(x); 
//   x--; 
// }

// While Loop counting up in multiples of 5, 9 times 

// var i = 1; //set counter
// var result = ""; //result

// //results in multiples of 5
// while (i < 10){
//   result += (i * 5) + "\n"; 
//   i++; 
// }

// console.log(result); 

// var counter = 1; 
// var result; 

// while(counter <= 10){
//   result = counter * 5; 
//   console.log(counter, result); 
//   counter++; 
// }

// Do While Loop

// var i = 0; //set counter

// do {
//   console.log(i); 
//   i++; 
// } while (i < 0); 

// var i = 0; 

// do {
//   console.log(i); 
//   i++; 
// } while (i < 11); 

// var i = 10; 

// do {
//   console.log(i); 
//   i--; 
// } while (i > 0); 

// var hungry = false; 

// do {
//   console.log("He is a hungry little guy."); 
// } while (hungry == true); 

// Ternary Operator 

// var number = 60; 
// var result; 

// result = number >= 50 ? "You passed!" : "You failed goofy!"

// console.log(result); 

// function getMedicalHelp(isIll){
//   return (isIll ? "See you at the psych ward babes" : "Good for you"); 
// }

// console.log(getMedicalHelp(true)); 

// Arrow Function /.map method 

// var numbers = [1, 2, 3, 4, 5]; 

// numbers.map (x => console.log(x)); 

// var numbers = [6, 7, 8, 9, 10]; 

// var check = numbers.map (x => x);

// console.log(check); 

// Concatenating arrays 

// const letters = ["a", "b", "c"]; 
// const numbers = [1, 2, 3]; 

// const alphaNumeric = letters.concat(numbers); 
// console.log(alphaNumeric); 

// Maps 

var numbers = [1, 2, 3, 4, 5]; 
var numbersCopy = numbers.map ( (x) => (x) ); 
console.log(numbersCopy); 

var numbers = [1.3, 2.4, 3.5, 4.6, 5.9]; 
var numbersDouble = numbers.map ((x) => (x*2)); 
console.log(numbersDouble); 

var numbers = [1.3, 2.4, 3.5, 4.6, 5.9]; 
var numbersRound = numbers.map ((x) => Math.round(x)); 
console.log(numbersRound); 

var numbers = [1, 2, 3, 4, 5]; 
var newArray = numbers.map (
  function (val, index) {
    return {key: index, value: val}; 
  }
); 
console.log(newArray); 