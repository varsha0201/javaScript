var ranNumBtn0_19 = Math.floor(Math.random()*20);

function randomFunction(){

    return Math.floor(Math.random()*10);
}
console.log(randomFunction());

function ourRandomRange(ourMin, ourMax){
    return Math.floor(Math.random() * (ourMax - ourMin +1)) + ourMin;
}
console.log(ourRandomRange(1,9));

