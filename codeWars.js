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

function solution(input, markers) {
    let mas = input.split('\n');
    let index, correct;
    let result = mas.map(function (item) {
        console.log(typeof item);
        outer: for (let i = 0; i < markers.length; i++) {
            index = item.indexOf(markers[i]);
            if (index >= 0) {
                correct = item.slice(0, index - 1);
                break outer;
            } else {
                correct = item;
            }
        }
        return correct;
    });
    result = result.join('\n');
    return result;
};

//-----------------------------------------------------------------------------------------
function zero() {
}

function one() {
}

function two() {
}

function three() {
}

function four() {
}

function five() {
}

function six() {
}

function seven() {
}

function eight() {
}

function nine() {
}

function plus() {
}

function minus() {
}

function times() {
}

function dividedBy() {
}

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
    return intervals.reduce((sum, interval, index) => {
        for (let mas of intervals) {
            if (index === 0 || interval[0] < mas[0] || interval[0] > mas[1]) {
                return sum + (interval[1] - interval[0]);
            } else if (interval[1] !== mas[1] && interval[0] >= mas[0] && interval[0] <= mas[1]) {
                return sum + (interval[1] - mas[1]);
            } else if((interval[0] >= mas[0] && interval[0] <= mas[1])&&(interval[1] >= mas[0] && interval[1] <= mas[1])){
                return sum;
            }else{
                return sum;
            }
        }
    }, 0);
}

//check
window.onload = function () {
    console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]));
};