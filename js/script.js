var hi = prompt("what is your age ?");
console.log(hi);
var you; 
 
if (hi > 18 &&hi<35   ) {     
    you = 'you prefer modern sites';   
} 
else if (hi > 12 && hourNow <=18) {     
    you = 'you prefer diseny land';   
  
} else {     
    you = 'you prefer historical places';   
} 

document.write('<h3>'+you+'</h3>');