//Object 

var panda = {
  name : "Po",
  age: 20, 
  color: "Black and White",
  hungry: true,
  feed: function(){
    if(this.hungry == true) {
      return this.name + " is a fatty."; 
    } else {
      return this.name + " probably just ate."; 
    }
  }
}


// Object Constructor 

function Panda(name, age, hungry){
  this.name = name; 
  this.age = age; 
  this.hungry = hungry; 
  this.feed = function(){
    if(this.hungry == true){
      return this.name + " is a fatty."; 
    } else{
      return this.name + " probably just ate."; 
    }
  }
}

var panda1 = new Panda("Steve", 45, true); 
var panda2 = new Panda("Carl", 47, false); 
var panda3 = new Panda("Sally", 56, true); 

console.log(panda1.feed()); 
console.log(panda2.feed()); 
console.log(panda3.feed()); 