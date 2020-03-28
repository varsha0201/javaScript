function checkSign(num){
    return num>0 ? "positive": num < 0 ? "negative":"zero"

}
console.log(checkSign(0));
// differenc between var and let keywords

var catName = "Quicny";
var quote;

var catName ="Beau";

function catTalk(){
    "use strict";
    catName = "Oliver";
    quote = catName+"says Meow";
}
console.log(catTalk())


function checkScope(){
    "use strict";
    var i = "function scope";
    if(true){
        var i="black scope";
        console.log("Block scope i is", i);
    }
    console.log("Fuction scope i is", i);
    return i;
}
checkScope();

// Declar a Read-Only Variable with the const Keyword

function printManyTimes(str){
    "User strict";

    var sentence = str + " is cool";

    sentence = str + " is amazing!!";

    for(i=0; i<str.length; i +=2){
        console.log(sentence);
    }
}
printManyTimes("Freecodecamp");

// mutate an array declare with cost

const s = [5,7,2];
function editInPlace(){
    "use restrict";
    s[0]=2;
    s[1]=5;
    s[2]=7;

}
editInPlace();
console.log(s)

// prevent object mutation
function freezobj(){
    "user strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    try{
        MATH_CONSTANTS.PI = 99;
    }catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezobj();
console.log(PI);

var magic = () =>{
    return new Date()
};


const realNumberArray=[4, 5.6, -9.8, 3.14, 42, 6, 8.36, -2]

const squareList = (arr) =>{
    const squaredInteger = arr.filter(num => Number.isInteger(num) && num>0).map(x => x*x);
    return squaredInteger;
};

const squaredInteger = squareList(realNumberArray);
console.log(squaredInteger);
