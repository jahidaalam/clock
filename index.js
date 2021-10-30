// console.log("hello iam javascript");
// let a = document;
// console.log(a);
function clock(){
    let date=new Date();
    let Ldate=date.toLocaleTimeString();// this method prints only Time
    document.getElementById('showClock').innerHTML=Ldate;
};

let timer;
let start = function(){
    timer = setInterval(clock,1000);
};
let stop = function(){
    clearInterval(timer);
};