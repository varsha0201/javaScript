var myArray=[]

var i =0;
while(i<5){
    myArray.push(i);
    i++;
}
console.log(myArray);

var myArray=[]

for(i=0;i<10;i++){
    myArray.push(i);
}
console.log(myArray)

var arr = [10,1,12,13,14,15]
var total=0
for(i=0; i<arr.length; i++){
    total += myArray[i];
}
console.log(total)


var mulArr = [1,2,3,4,5,6]
mtotal=1
for(i=0; i<mulArr.length; i++){
    mtotal *= mulArr[i];
}
console.log(mtotal)

// Nested Array

function multiplyAll(arr){
    var product =1;
    for(i=0; i< arr.length; i++){
        for(j=0; j< arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}
var product = multiplyAll([[1,2],[3,4],[5,6,7]])
console.log(product);


var myArr=[];
var i =10

do {
    myArr.push(i);
    i++;
} while(i<5)
console.log(i, myArr)
