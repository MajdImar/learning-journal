var tn = prompt("what is your name ? ");
var mj = prompt("do you like walking ? ");
console.log(mj);
var hi = prompt("what is your age ?");
console.log(hi);
while (hi > 70 || hi < 4) {
    hi = prompt('please enter your age')
}
var you;


function hello(hi) {
    if (hi > 18 && hi < 35) {
        you = 'you prefer modern sites';
    }
    else if (hi > 12 && hi <= 18) {
        you = 'you prefer diseny land';

    } else {
        you = 'you prefer historical places';
    }
    return (you);
}
document.write('<h3>' + hello(hi) + '</h3>');

function tour() {
    var prf = prompt("which places do you prefer?( modern or hostrical");
    while (prf !== 'modern' && prf !== 'hostrical') {
        prf = prompt("plz enter  modern or hostrical");
    }

    var places = prompt("how many places do you prefer to visit?");
    console.log(places);
    var num = "";

    for (var i = 0; i < places; i++) {
        if (prf === 'Modern' || prf === 'modern') {
            num = num + '<img src="https://www.urtrips.com/wp-content/uploads/2018/01/The-Boulevard-Amman-5.jpg">';
        } else if (prf === 'hostrical') {
            num = num + '<img src="https://cdn.thecrazytourist.com/wp-content/uploads/2017/03/Petra.jpg"alt="petra">';
        }
        else {
            num = 'undifiend'
        }}
        return num;
        
    

}
document.write('<p>' + tour() + '</p>');

