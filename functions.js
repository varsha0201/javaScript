// function passing arrguements
function ourFunctioneithArgs(a,b){
    console.log(a-b)
}
ourFunctioneithArgs(10,5)

//global scope

var myGlobal = 10;
function gFun(){
    output = "This is my globalfunction "+ myGlobal+"."
    console.log(output)
}

gFun()

function timesFive(num){
    return num *5
}
console.log(timesFive(5))

var sum =0
function addThree(){
    sum = sum +3;
}
console.log(addThree())

var changed = 0;
function change(num){
    return (num + 5)/3;
}
changed = change(10);
console.log(changed)


function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before:"+JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After:"+JSON.stringify(testArr));

//Boolean values

function welcomeToBooleans(){
    return false;
}