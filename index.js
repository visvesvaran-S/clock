let sec = document.getElementById('seconds');
let min = document.getElementById('minitues');
let hrs = document.getElementById('hour');

// analog time

setInterval(() => {
    
    let time = new Date();
let hours = time.getHours()*30;
let minitue = time.getMinutes()*6;
let second = time .getSeconds()*6;

 sec.style.transform = `rotateZ(${hours}deg)`;
 min.style.transform = `rotateZ(${minitue}deg)`;
 hrs.style.transform = `rotateZ(${second}deg)`;

}, );




// digital time `rotateZ(${hours+(minitue/12)}deg)`
setInterval(() => {
    
    let digitalHour = document.querySelector("#hr");
let digitalminute = document.querySelector("#mm");
let digitalsecond = document.querySelector("#sc");
let ampm = document.querySelector("#ampm");

let dh = new Date().getHours();
let dm = new Date().getMinutes();
let ds = new Date().getSeconds() ;
let am = dh>=12?"PM":'Am'

if(dh>12){
    dh = dh-12;
}



dh = (dh<10)?"0" +dh:dh;
dm = (dm<10)?"0" +dm:dm;
ds = (ds<10)?"0" +ds:ds;


digitalHour.innerHTML = dh;
digitalminute.innerHTML= dm;
digitalsecond.innerHTML = ds;
ampm.innerHTML = am

}, );
