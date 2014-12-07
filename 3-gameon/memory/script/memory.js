"use strict"

var memory = {
    
    brickArray: [],
    
    init:function(){
        memory.brickArray = RandomGenerator.getPictureArray(2,2);
        console.log(memory.brickArray);
    }
    
};

window.addEventListener("load", memory.init);