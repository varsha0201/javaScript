var plants=[
    {
        type:"flowers",
        list:[
            "rose",
            "lotus",
            "jemini"
        ]
    },
    {
        type:"tree",
        list:[
            "fire",
            "mango",
            "apple"
        ]
    }
];
var secondplant = plants[1].list[0];
console.log(secondplant)


var collection = {
    "2541":{
        "album":"jone henny",
        "artist":"Bon javi",
        "track":[
            "Let it rock",
            "You give love a bad name"
        ]
    },
    "2542":{
        "album":"1999",
        "artist":"prince",
        "track":[
            "1999",
            "Little Red coverter"
        ]
    },
    "2543":{
        "artist":"Robert Plamer",
        "tracks":[]
    },
    "2544":{
        "album":"AABBA"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection))

function updateRecords(id, prop, value){
    if(value===""){
        delete collection[id][prop];
    } else if (prop == "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else{
        collection[id][prop] = value;
    }
    return collection;
}
console.log(updateRecords(2543,"artist","asdasd"));
console.log(updateRecords(2544,'artist',"Test"));
console.log(updateRecords(2543,"track","testbrand","testbrand1"));