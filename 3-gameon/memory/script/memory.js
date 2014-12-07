"use strict"

var memory = {
    
    brickArray: [],
    rows: 2,
    cols: 2,
    
    init:function(){
        memory.brickArray = RandomGenerator.getPictureArray(memory.rows, memory.cols);
        
        memory.generateTable();
        
        var imageClick = document.getElementById("tableGame");
        imageClick.addEventListener("click", memory.brickClicked);
    },
    
    generateTable: function(){
        var nodeGameArea = document.getElementById("gameArea");
        var gameTable = document.createElement("table");
        
        
        
        gameTable.setAttribute("id", "tableGame");
        nodeGameArea.appendChild(gameTable);
        
        for(var i = 0; i < memory.rows; i+=1){
            var createTR = document.createElement("tr");
            
            for(var j = 0; j < memory.cols; j+=1){

                memory.renderBrick(createTR);
            }
            gameTable.appendChild(createTR);
        }
        
    },
    
    renderBrick: function(TR){

        var gameBrick = document.createElement("td");
        var enfoldTag = document.createElement("a");
        var iconZero = document.createElement("img");
        iconZero.setAttribute("src", "memory/pics/0.png");
        enfoldTag.setAttribute("href", "#");
        
        enfoldTag.appendChild(iconZero);
        gameBrick.appendChild(enfoldTag);
        TR.appendChild(gameBrick);
    }
    
    brickClicked:function(){
        
    }
};

window.addEventListener("load", memory.init);