// if condition
function trueOrfalse(wasThatTrue){
    if(wasThatTrue){
        return "Yes, that was true."
    }
    return "no, that was flase."
}
console.log(trueOrfalse(true))

function testEqual(val){
    if (val ==12){
        return "Equal";
    }
    return "Doesn't equal"
}
console.log(testEqual(10))

function comparetestEqual(a, b){
    if(a==b){
        return "Equal";
    }
    return "Not Equal"
}
console.log(comparetestEqual(10,20))

// not equality
function notequal(val){
    if (val!= 10){
        return "Not equal"
    }
    return "Equal"
}
console.log(notequal(10))

// compare with logical
function testGraterOrEqual(val){
    if (val >= 20){
        return "20 or Over";
    }
    if (val >=10 ){
        return "10 or Over";
    }
    return "Less than 10";
}
console.log(testGraterOrEqual(10));

// if -else

function ifElse(val){
    if(val > 10){
        return "no is garter that 10"
    }
    else if(val<5){
        return "no is less than 5"
    }
    else{
        return "no is between 5 to 10 ."
    }

}
console.log(ifElse(8))

// if-else statemnet

function testsize(num){
    if (num < 5){
        return "Tiny";
    }else if(num < 10){
        return "small";
    }else if(num <15){
        return "medium";
    }else if(num < 20){
        return "large";
    }else {
        return "Huge";
    }
}
console.log(testsize(52));
















