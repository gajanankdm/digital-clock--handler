const cl = console.log;

const setzero =(num)=>{
    if(num<10){
        return "0" + num;
    }else{
        return num
    }
}


const digitalclockhandler = () =>{

let d1 =new Date("15-mar-2026").getTime();
let d2 = Date.now();
let diff = d1-d2;
let days =Math.floor(diff/(1000*60*60*24));
cl(days);

let hr=Math.floor(diff%(100*60*60*24)/(1000*60*60));
cl(hr);

let min = Math.floor(diff%(1000*60*60)/(1000*60));
cl(min);

let sec = Math.floor(diff%(1000*60)/(1000));
cl(sec)

let result = `${setzero(days)}days:${setzero(hr)}hr:${setzero(min)}min:${setzero(sec)}sec`;
document.getElementById("digitalclock").innerHTML=result;
}


 setInterval(() => {
    digitalclockhandler()
 }, 1000);

 digitalclockhandler()