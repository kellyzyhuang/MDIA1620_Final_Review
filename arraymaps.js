// Arrow Function /.map method 

var numbers = [1, 2, 3, 4, 5]; 

numbers.map (x => console.log(x)); 

var numbers = [6, 7, 8, 9, 10]; 

var check = numbers.map (x => x);

console.log(check); 

// Concatenating arrays 

const letters = ["a", "b", "c"]; 
const numbers = [1, 2, 3]; 

const alphaNumeric = letters.concat(numbers); 
console.log(alphaNumeric); 

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