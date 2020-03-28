var contact = [
    {
        "firstName":"Akira" ,
        "lastName":"Laina",
        "number":"123456789",
        "likes": ["Pizza", "coding","Brownie Points"]
    },
    {
        "firstName":"Harry",
        "lastName":"Potter",
        "number":"789456123",
        "likes":["maggi","pasta","noodles"]
    },
    {
        "firstName":"Shrelock",
        "lastName":"Holmes",
        "number":"741852963",
        "likes":["bread","butter","brown baread"]
    },
    {
        "firstName":"Kristian",
        "lastName":"Vos",
        "number":"unknown",
        "likes":["bahji","chapati","roti","sabhiji"]
    }
];

function lookUpProfile(name, prop){
    for(var i =0; i< contact.length; i++){
        if(contact[i].firstName === name){
            return contact[i][prop] || "No Such Property";
        }
    }
    return "No Such Contact";
}
var data = lookUpProfile("Kristian", "lastName")
console.log(data)