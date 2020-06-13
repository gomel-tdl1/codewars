'use strict'

//first
function tickets(peopleInLine) {
    let y = "YES";
    let n = "NO";
    let un = "";
    let tw = 25;
    let fif = 50;
    let hung = 100;
    let pocket = [];
    if (peopleInLine[0] == tw) {
        pocket.push(tw);
        un = y;
        for (let i = 1; i < peopleInLine.length; i++) {
            if (peopleInLine[i] == tw) {
                pocket.push(tw);
            } else if (peopleInLine[i] == fif) {
                let index = pocket.indexOf(tw);
                if (index >= 0) {
                    pocket.push(fif);
                    delete pocket[index];
                    un = y;
                } else {
                    return n;
                    // un = n;
                }
            } else if (peopleInLine[i] == hung) {
                let index1 = pocket.indexOf(tw);
                let index12 = pocket.indexOf(tw, index1 + 1);
                let index13 = pocket.indexOf(tw, index12 + 1);
                let index2 = pocket.indexOf(fif);
                if ((index1 >= 0 && index2 >= 0) || (index1 >= 0 && index12 >= 0 && index13 >= 0)) {
                    pocket.push(hung);
                    if (index2 >= 0) {
                        delete pocket[index1];
                        delete pocket[index2];
                    } else if (index12 >= 0 && index13 >= 0) {
                        delete pocket[index1];
                        delete pocket[index12];
                        delete pocket[index13];
                    }
                    un = y;
                } else {
                    return n;
                    // un = n;
                }
            }
        }
        return un;

    } else {
        return n;
    }
}

//second
function openOrSenior(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7) {
            data[i] = "Senior";
        } else {
            data[i] = "Open";
        }
    }
    return data;
}

//third
function digPow(n, p) {
    let first = 0;
    let second = 0;
    let result = 0;
    console.log(String(n).length);
    for (let i = 0; i < String(n).length; i++) {
        first = String(n).charAt(i);
        second = second + Math.pow(Number(first), p);
        p++;
    }
    result = second / n;
    if (Number.isInteger(result)) {
        return result;
    } else {
        return -1;
    }
}

//forth
function getSum(a, b) {
    let sum = 0;
    if (a < b) {
        while (a <= b) {
            sum = sum + a;
            a++;
        }
    } else {
        while (b <= a) {
            sum = sum + b;
            b++;
        }
    }
    return sum;
}

//unfinished
function squareDigits(num) {
    let n = 0;
    let str = "";
    for (let i = 0; i < String(num).length; i++) {
        n = String(num).charAt(i);
        str = str + String(Math.pow(Number(n), 2));
    }
    return Number(str);
}

function isValidWalk(walk) {
    let result = 0;
    if (walk.length === 10) {
        for (let i = 0; i < walk.length; i++) {
            switch (walk[i]) {
                case 'n':
                    result++;
                    break;
                case 's':
                    result--;
                    break;
                case 'e':
                    result++;
                    break;
                case 'w':
                    result--;
                    break;
            }
        }
        if (result === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function descendingOrder(n) {
    let masStr, sort, str;
    masStr = String(n).split("");
    console.log(masStr)
    sort = masStr.sort((a, b) => b - a);
    console.log(sort);
    str = sort.join("");
    console.log(str);
    return str;
}

function findOutlier(integers) {
    let even = [];
    let odd = [];
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 1 || integers[i] % 2 === -1) {
            even.push(integers[i]);
        } else if (integers[i] % 2 === 0) {
            odd.push(integers[i]);
        }
    }
    if (even.length > odd.length) {
        return odd[0];
    } else {
        return even[0];
    }
}

function friend(friends) {
    let mas = friends.filter(word => word.length === 4);
    return mas;
}

function sortArray(array) {
    let mas = [];
    let index = [];
    if (array.length !== 0) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 1) {
                mas.push(array[i]);
                index.push(i);
            }
        }
        console.log(mas);
        let sortMas = mas.sort((a, b) => a - b);
        for (let i = 0; i < sortMas.length; i++) {
            array[index[i]] = sortMas[i];
        }
        console.log(array);
        return array;
    } else {
        return mas;
    }
}

function validParentheses(parens) {
    let bol = true;
    while (bol) {
        let ident = parens.indexOf("()");
        if (ident >= 0) {
            parens = parens.replace("()", "");
        } else {
            bol = false;
        }
    }
    for (let i = 0; i < parens.length / 2; i++) {
        parens = parens.replace("()", "");
    }
    let index1 = parens.indexOf("(");
    let index2 = parens.indexOf(")");
    if (index1 >= 0 || index2 >= 0) {
        return false;
    } else {
        return true;
    }
}

function bouncingBall(h, bounce, window) {
    console.log(h, bounce, window);
    let count = 0;
    let bol = true;
    if (0 < bounce && bounce < 1 && h > 0 && window < h) {
        while (bol) {
            if (window < h) {
                count++;
                h = h * bounce;
                if (h > window) {
                    count++;
                }
            } else {
                return count;
            }
        }
    } else {
        return -1;
    }
}

// function solution(input, markers) {
//     let mas = input.split('\n');
//     let index, correct;
//     let result = mas.map(function (item) {
//         console.log(typeof item);
//         outer: for (let i = 0; i < markers.length; i++) {
//             index = item.indexOf(markers[i]);
//             if (index >= 0) {
//                 correct = item.slice(0, index - 1);
//                 break outer;
//             } else {
//                 correct = item;
//             }
//         }
//         return correct;
//     });
//     result = result.join('\n');
//     return result;
// };

//-----------------------------------------------------------------------------------------
function zero(func)   { return func ? func(0) : 0; }
function one(func)    { return func ? func(1) : 1; }
function two(func)    { return func ? func(2) : 2; }
function three(func)  { return func ? func(3) : 3; }
function four(func)   { return func ? func(4) : 4; }
function five(func)   { return func ? func(5) : 5; }
function six(func)    { return func ? func(6) : 6; }
function seven(func)  { return func ? func(7) : 7; }
function eight(func)  { return func ? func(8) : 8; }
function nine(func)   { return func ? func(9) : 9; }

function plus( b )      { return function( a ) { return a + b; }; }
function minus( b )     { return function( a ) { return a - b; }; }
function times( b )     { return function( a ) { return a * b; }; }
function dividedBy( b ) { return function( a ) { return a / b; }; }

//-----------------------------------------------------------------------------------------
function snail(array) {
    let snailArr = [];
    for (let i = 0; i < Math.floor((array.length + 1) / 2); i++) {
        let curLine = array[i].slice(i, array.length - i);
        let bottomLine = array[array.length - i - 1].slice(i, array.length - i).reverse();
        snailArr = snailArr.concat(curLine);
        for (let j = i + 1; j < array.length - 1 - i; j++) {
            snailArr.push(array[j][array.length - 1 - i]);
        }
        snailArr = i === array.length - 1 - i ? snailArr.concat([]) : snailArr.concat(bottomLine);
        for (let k = array.length - 2 - i; k >= i + 1; k--) {
            snailArr.push(array[k][i]);
        }
    }
    return snailArr;
}

function sumIntervals(intervals) {
    console.log(intervals);
    let set = new Set();
    intervals.forEach((interval) => {
        for (let i = interval[0]; i <= interval[1]; i++) {
            set.add(i);
        }
    });
    return set.size;
}

//-----------------------------------------------------------------------------------------------------------

function recoverSecret(triplets) {
    let result = '';
    while (triplets.some(triplet => triplet.some(char => !result.includes(char)))) {
        let nextChar = getNextChar(triplets);
        nextChar = getNextChar(triplets, nextChar);
        result += nextChar;
        triplets = triplets.map(triplet => triplet.filter(char => char !== nextChar));
        nextChar = '';
    }
    return result;
}

function getNextChar(triplets, nextChar = '') {
    triplets.forEach((triplet) => {
        if (triplet.length !== 0 && ((triplet.find(char => nextChar === char) && triplet[0] != nextChar) || !nextChar)) {
            nextChar = triplet[0];
        }
    });
    return nextChar;
}

//----------------------------------------------------------------------------------

function snail(column, day, night) {
    let high = 0;
    let count = 0;
    while (true) {
        high += day;
        count++;
        if (high < column) {
            high -= night;
        } else {
            break;
        }
    }
    return count;
}

//------------------------------------------------------------------------------

function decodeBits(bits) {
    // Trim zeros
    bits = bits.replace(/(^0+|0+$)/g, '')

    // Find transmission rate
    let rate = Math.min.apply(null, bits.match(/0+|1+/g).map(function (b) {
        return b.length
    }));

    // Convert to morse code
    bits = bits
        .replace(new RegExp('(?:111){' + rate + '}(?:0{' + rate + '}|$)', 'g'), '-')
        .replace(new RegExp('1{' + rate + '}(?:0{' + rate + '}|$)', 'g'), '.')
        .replace(new RegExp('(?:000000){' + rate + '}', 'g'), '   ')
        .replace(new RegExp('(?:00){' + rate + '}', 'g'), ' ');

    return bits
}

function decodeMorse(message) {
    return message
        .replace(/   /g, ' _ ')
        .split(' ')
        .map(function (letter) {
            return letter === '_' ? ' ' : MORSE_CODE[letter]
        })
        .join('')
}

//----------------------------------------------------------------------------------------------
Array.prototype.sameStructureAs = function (other) {
    console.log(this);
    console.log(other);
    if (!(Array.isArray(this) && Array.isArray(other))) {
        return false;
    } else if (!this.map(item => typeof item).includes('object')) {
        let first = JSON.stringify(this).split(',').map(() => '*').join('');
        let second = JSON.stringify(other).split(',').map(() => '*').join('');
        return (first === second) ? true : false;
    } else {
        let mainString = JSON.stringify(this).replace(/\d/g, '*');
        let secondaryString = JSON.stringify(other).replace(/\d/g, '*');
        console.log(mainString);
        console.log(secondaryString);
        return (mainString === secondaryString) ? true : false;
    }
};

//---------------------------------------------------------------------------------------------
function pushing(round, result) {
    if (round.length === 2) {
        result.push(`${round.shift()},${round.pop()}`);
    } else if (round.length > 1) {
        result.push(`${round.shift()}-${round.pop()}`);
    } else {
        result.push(round[0]);
    }
}

function solution(list) {
    let prev = 0;
    let round = [];
    let result = [];
    list.forEach((item, index) => {
        if (index === 0) {
            round.push(item);
            prev = item;
        } else {
            if (item === prev + 1) {
                round.push(item);
            } else {
                pushing(round, result);
                round = [];
                round.push(item);
            }
            prev = item;
            if (index === list.length - 1) pushing(round, result);
        }
    });
    return result.join();
}

//---------------------------------------------------------------------------------------------
let multipleOf3Regex = /\n\n\n/;
//---------------------------------------------------------------------------------------------
//check
window.onload = function () {
    console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
};