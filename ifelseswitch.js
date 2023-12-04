// If Else Statement 

var age = 19; 
if(age < 20){
  console.log("Okay purr you're young!"); 
} else if (age < 30){
  console.log("Okay you're getting kind of old girlypop!"); 
} else {
  console.log("OMG! You're a hag!"); 
}

// Switch Statement 

var output; 
var genre = 3; 
switch(genre) {
  case 1: 
    output = "horror"; 
    break; 
  case 2: 
    output = "comedy"; 
    break; 
  case 3:
    output = "romance"; 
    break; 
  case 4:
    output = "drama"; 
    break; 
  case 5: 
    output = "thriller"; 
    break; 
  default: 
    output = "none"; 
}

var number = 10; 

switch(number){
  case 0:
    console.log("Fail"); 
    break; 
  case 5: 
    console.log("Too low"); 
    break; 
  case 10:
    console.log("You guessed right"); 
    break; 
  default:
    console.log("No"); 
}

var fruit = "peanut"; 
var sentence = ""; 

switch(fruit){
  case "apple":
    console.log("Make apple pie"); 
    break; 
  case "orange":
    console.log("Make orange juice"); 
    break; 
  default: 
    console.log("Order in goofy"); 
}

