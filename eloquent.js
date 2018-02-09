//Ex 1

function min(a, b){
    if (a == b) {
        return "same";
    }else if (a < b) { 
        return a;
    }else {
        return b;
    }
}

//Ex 2a

function isEven(n){
    if(n == 0){
        return true;
    }else if(n == 1){
        return false;
    }else {
        return isEven(n-2);
    }
}

// When -1 it is below 0 and it keeps minusing 2 indefinitely so
//runs out of stack space.

//Ex 2b

function isEven(n){
    if(n == 0){
        return true;
    }else if(n == 1){
        return false;
    }else if(n < 0){
        return isEven(n+2);
    }else if(n > 0){
        return isEven(n-2);
    }
}

//Ex 3a
function countBs(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] == 'B'){
            count++;
        }
    }
    return count;
}

//Ex 3b
function countChar(str, t) {
    var count = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] == t){
            count++;
        }
    }
    return count;
}