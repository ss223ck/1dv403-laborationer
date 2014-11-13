"use strict";

var makePerson = function(persArr){
    var arrayOfNames;
    var arrayOfAge;
    var nameString = "";
    var equationForAverage = 0;
    var i = 0;
    var sendBackObject = {
        minAge:400,
        maxAge:0,
        averageAge:0,
        names:""
    };
    
    try 
    {
        for (i = 0; i < persArr.length; i+= 1)
        {
            if (typeof persArr[i].name !== 'string')
            {
                throw new Error("namn var inte av typen string");
            }
        }
        
        arrayOfNames = persArr.map(function(personObject){return personObject.name});
        arrayOfNames.sort(String.localeCompare);
        
        arrayOfAge = persArr.map(function(personObject){return personObject.age});
        arrayOfAge.sort();
    
        sendBackObject.names = arrayOfNames[0] + ", " + arrayOfNames[1] + ", " + arrayOfNames[2];
        sendBackObject.minAge = arrayOfAge[0];
        sendBackObject.maxAge = arrayOfAge[arrayOfAge.length - 1];
        
        equationForAverage =  Math.round(arrayOfAge.reduce(function(a, b){return a + b;}) / arrayOfAge.length);
        
        sendBackObject.averageAge = equationForAverage;
    }
    catch (error)
    {
        alert(error.message);
    }
    return sendBackObject;
    
}

