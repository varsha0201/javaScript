function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer="beta";
            break;
        case 3:
            answer="gyama";
            break;
        case 4:
            answer="delta";
            break;
        
        default:
            answer="Not valid";
            break;
    }
    return answer;

}
console.log(caseInSwitch(9));


