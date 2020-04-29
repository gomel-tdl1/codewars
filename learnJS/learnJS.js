'use strict';
window.onload =()=>{
    perebor();
};

function perebor() {
    let range = {
        from: 1,
        to: 5,

        [Symbol.iterator]() {
            this.current = this.from;
            return this;
        },

        next() {
            if (this.current <= this.to) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };

    // for (let num of range) {
    //     alert(num); // 1, затем 2, 3, 4, 5
    // }
    let arr=Array.from(range);
    let str=arr.toString();
    console.log(str);
};



