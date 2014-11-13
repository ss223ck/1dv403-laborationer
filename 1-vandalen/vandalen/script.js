"use strict";

var makePerson = function(persArr){
    var arrayOfNames;
    var arrayOfAge;
    var nameString = "";
    var sendBackObject = {
        minAge:400,
        maxAge:0,
        averageAge:0,
        names:""
    };
    
    arrayOfNames = persArr.map(function(personObject){return personObject.name});
    arrayOfNames.sort();
    
    arrayOfAge = persArr.map(function(personObject){return personObject.age});
    arrayOfAge.sort();
    alert(arrayOfAge);
    
    sendBackObject.names = arrayOfNames[0] + ", " + arrayOfNames[1] + ", " + arrayOfNames[2];
    return sendBackObject;
}

