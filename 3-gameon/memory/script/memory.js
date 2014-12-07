"use strict"

var memory = {
    
    brickArray: [],
    
    init: function(){
        brickArray = RandomGenerator.getPictureArray(2,2);
        console.log(brickArray);
    }
    
};

window.addEventListener("load", memory.init);