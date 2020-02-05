var hi = prompt("what is your age ?");
console.log(hi);
var you; 
function  hello (hi){

 
if (hi > 18 && hi < 35   ) {     
    you = 'you prefer modern sites';   
} 
else if (hi > 12 && hi <=18) {     
    you = 'you prefer diseny land';   
  
} else {     
    you = 'you prefer historical places';   
} 
return (you);
}
document.write('<h3>'+hello(hi)+'</h3>') ; 
