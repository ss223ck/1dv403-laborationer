"use strict";

var makePerson = function(persArr){
    var arrayOfNames;
    var arrayOfAge;
    var nameString = "";
    var equationForAverage = 0;
    
    var sendBackObject = {
        minAge:400,
        maxAge:0,
        averageAge:0,
        names:""
    };
    
    arrayOfNames = persArr.map(function(personObject){return personObject.name});
    arrayOfNames.sort(String.localeCompare);
    
    arrayOfAge = persArr.map(function(personObject){return personObject.age});
    arrayOfAge.sort();

    sendBackObject.names = arrayOfNames[0] + ", " + arrayOfNames[1] + ", " + arrayOfNames[2];
    sendBackObject.minAge = arrayOfAge[0];
    sendBackObject.maxAge = arrayOfAge[arrayOfAge.length - 1];
    
    for(var i = 0; i < arrayOfAge.length; i+= 1)
    {
        equationForAverage += arrayOfAge[i];
    }
    equationForAverage = Math.round(equationForAverage / arrayOfAge.length);
    
    sendBackObject.averageAge = equationForAverage;
    
    return sendBackObject;
}

