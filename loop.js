// For Loop with Array 

var students = ["Sally", "Steve", "Sarah", "Susan", "Sillybilly"]; 

for(var i = 0; i < 5; i++) {
  console.log(students[i]); 
}

for(var i = 0; i < students.length; i++) {
  console.log(students[i], students.length); 
}

console.log(students.length); 

// For Of 

var students = ["Sally", "Steve", "Sarah", "Susan", "Sillybilly"]; 

for (var i of students) {
  console.log(i); 
  i++; 
}

// For In 

var student = {name: "Steve", age: 15, race: "White"}; 

for (var i in student) {
  console.log(student[i]);
  i++; 
}

// For In 

for (var i in panda1) {
  console.log(panda1[i]); 
  i++; 
}

// While Loop 

var x = 1; 
while(x <= 10){
  console.log(x); 
  x++; 
}

var x = 10; 
while(x > 0){
  console.log(x); 
  x--; 
}

// While Loop counting up in multiples of 5, 9 times 

var i = 1; //set counter
var result = ""; //result

//results in multiples of 5
while (i < 10){
  result += (i * 5) + "\n"; 
  i++; 
}

console.log(result); 

var counter = 1; 
var result; 

while(counter <= 10){
  result = counter * 5; 
  console.log(counter, result); 
  counter++; 
}

// Do While Loop

var i = 0; //set counter

do {
  console.log(i); 
  i++; 
} while (i < 0); 

var i = 0; 

do {
  console.log(i); 
  i++; 
} while (i < 11); 

var i = 10; 

do {
  console.log(i); 
  i--; 
} while (i > 0); 

var hungry = false; 

do {
  console.log("He is a hungry little guy."); 
} while (hungry == true); 