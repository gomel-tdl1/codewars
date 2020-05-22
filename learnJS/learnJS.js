'use strict';

function printNumbers(from, to) {
    let first=from;
    let timer = function(sec){
        if (first <= sec) {
            console.log(first++);
        } else {
            clearInterval(timerId);
        }
    };
    let timerId = setTimeout(function rec() {
        timer(to);
        setTimeout(rec,1000);
    }, 1000);
    console.log(timerId);
}
printNumbers(1,8);

