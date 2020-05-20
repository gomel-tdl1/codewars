'use strict';

window.onload=()=>{
    let intervalId=setInterval(sayHi,3000);
    console.log(intervalId);
    setTimeout(()=>clearInterval(intervalId),9000);
};

function sayHi() {
    console.log('Hi');
    for(let i=0.5;i<=3;i=i+0.5){
        setTimeout(()=>{
            console.log(i);
        },500);
    }
}