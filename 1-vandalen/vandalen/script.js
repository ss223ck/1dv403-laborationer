"use strict";

var makePerson = function(persArr){
    var inData = persArr;
    var arrayOfNames;
    var nameString = "";
    
    for (var i = 0; i <= inData.length; i=+ 1)
    {
        arrayOfNames[i] = inData[i].name;
    };
    arrayOfNames.sort();
    
    for (i = 0; i <= arrayOfNames.length; i=+ 1)
    {
        if(i === 0)
        {
            nameString = arrayOfNames[i];
        }
        else
        {
        nameString = nameString + ", " + arrayOfNames[i];
        }
    }
}

