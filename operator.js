// Ternary Operator 

var number = 60; 
var result; 

result = number >= 50 ? "You passed!" : "You failed goofy!"

console.log(result); 

function getMedicalHelp(isIll){
  return (isIll ? "See you at the psych ward babes" : "Good for you"); 
}

console.log(getMedicalHelp(true)); 