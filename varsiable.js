/* Data Types:
undefined, null, boolean, string, symbol, number and object
*/

var myName = "asd"

myName = 8

let ourName = "freecodecamp"

const pi = 3.14


var a;  //declare variable
var b = 2; // assgined varibale

a = 7; //assgined variable

b= a // assgined varibale

console.log(a)

// Intialize variables

var a = 9;
var b = 5;
var c="I am a string"

// Case sensitive
// Declaration

var studyJs;
var clsStudent;

//assgineds
studyJs = 10;
clsStudent = "varsha";

// substring

var diff = 45-0;
var mul = 8*2;
var div = 66/33;
var myVar = 87
myVar ++ ;  //increment
myDec = 52;
myDec --;  //decrement

var ourDecimal = 5.7; //floating number

var product = 0.2 *0.5; // multiplication floating number


var reminder;
reminder = 11 %3;

// Example

var firstName = "Varsha";
var lastName = "Mohite"


var myStr = "I am a\" double quotation\" string inside \"double quations"
console.log(myStr)

var mStr = '<a href="http://www.example.com" target="_blank">Link</a>'
console.log(mStr)

// concatination string
var ourStr = "I come first."+"I come second"
console.log(ourStr)

var myStr ="This is me."
myStr += "Started learning js."
console.log(myStr);

// constring string with variables

var vName = "freecode"
var strName = "My name is "+vName +"my am well."

console.log(strName)

var ajName = "awesome ";
var mmStr = "varsha.";

ajName += mmStr
console.log(ajName)

lastName = "shfgksj"
lenlastname = lastName.length
console.log(lenlastname)


var fName="Varsha";
var lastNameletter = fName[fName.length -1];
console.log(lastNameletter)

var lname = "mohite";
var lnamelenght = lname[lname.length - 2];
console.log(lnamelenght)

// Function

function wordBlank(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "The "+myNoun+" "+myAdjective+" "+myVerb+" "+myAdverb+ " this is the full stentence."
    return result
}

console.log(wordBlank("bike","slow","flew","slowly"));

// arrays
var ourarr = ["Name",50];

var myarr = ["quaincy", 1]

// nested array
var narr = [["name",52],["hsh",85]]
console.log(narr)

// array with index 
var ourarray = [10,20,30];
//var ourData = ourarray[0]
//console.log(ourData)
ourarray[1] = 25;
console.log(ourarray)

// multidimentional
var mArray = [[1,2,3],[4,5,6],[7,8,9]] 
//var myData = mArray[1][0];
//console.log(myData)
mArray[0][0] = 11
console.log(mArray)

// push function
var pArray = ["asd",'manu','chiku'];
pArray.push(["happy","joy"]);

console.log(pArray)

var popArray = [1,2,3,4,5,6]
//var removedfromarray = popArray.pop();
//console.log(removedfromarray)
var shiftarray = popArray.shift();
console.log(shiftarray)


//nestedlist

var mylist = [["milk",2],["banana",5],["eggs",25],["grocery",2]]


function reusablefun(){
    console.log("Hi world");
}
reusablefun()



