"use strict";

var makePerson = function(persArr){
    var arrayOfNames;
    var arrayOfAge;
    var nameString = "";
    var equationForAverage;
    
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
    
    equationForAverage = 
    
    sendBackObject.names = arrayOfNames[0] + ", " + arrayOfNames[1] + ", " + arrayOfNames[2];
    sendBackObject.minAge = arrayOfAge[0];
    sendBackObject.maxAge = arrayOfAge[arrayOfAge.length];
    sendBackObject.averageAge = (arrayOfAge[0] + arrayOfAge[1] + arrayOfAge[2]) / 3;
    
    return sendBackObject;
}

