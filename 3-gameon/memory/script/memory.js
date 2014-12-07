"use strict"

var memory = {
    
    brickArray: [],
    
    init:function(){
        memory.brickArray = RandomGenerator.getPictureArray(2,2);
        
        memory.generateTable();
        memory.renderBricks();
        
    },
    
    generateTable: function(){
        var nodeGameArea = document.getElementById("gameArea");
        var gameTable = document.createElement("table");
        
        gameTable.setAttribute("id", "tableGame");
        
        nodeGameArea.appendChild(gameTable);
    },
    
    renderBricks: function(){
        var nodeGameArea = document.getElementById("gameArea");
    
        for(var i = 0; i < memory.brickArray.length; i+=1){
            
            var gameBrick = document.createElement("div");
            var enfoldTag = document.createElement("a");
            var iconZero = document.createElement("img");
            iconZero.setAttribute("src", "memory/pics/0.png");
            iconZero.setAttribute("href", "#");
            
            enfoldTag.appendChild(iconZero);
            gameBrick.appendChild(enfoldTag);
            nodeGameArea.appendChild(gameBrick);
            
        }
    }
    
};

window.addEventListener("load", memory.init);