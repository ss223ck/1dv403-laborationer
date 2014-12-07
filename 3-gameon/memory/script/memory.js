"use strict"

var memory = {
    
    brickArray: [],
    rows: 4,
    cols: 4,
    firstPicture: 0,
    secondPicture: 0,
    turnedPictures: 0,
    
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

                memory.renderBrick(createTR, i*memory.cols+j);
            }
            gameTable.appendChild(createTR);
        }
        
    },
    
    renderBrick: function(TR, ID){

        var gameBrick = document.createElement("td");
        var enfoldTag = document.createElement("a");
        var iconZero = document.createElement("img");
        iconZero.setAttribute("src", "memory/pics/0.png");
        enfoldTag.setAttribute("href", "#");
        enfoldTag.setAttribute("pictureID", ID);
        iconZero.classList.add("picture");
        
        enfoldTag.appendChild(iconZero);
        gameBrick.appendChild(enfoldTag);
        TR.appendChild(gameBrick);
    },
    
    brickClicked:function(e){
        if(memory.turnedPictures === 0){
            var node = e.target.parentNode;
            memory.firstPicture = node.getAttribute("pictureID");
            e.target.setAttribute("src", "memory/pics/"+ memory.brickArray[memory.firstPicture] +".png");
            memory.turnedPictures = 1;
        } 
        else if((memory.turnedPictures === 1) && 
                (memory.firstPicture != e.target.parentNode.getAttribute("pictureID")) && 
                (e.target.getAttribute("src") === "memory/pics/"+ 0 +".png")){
            
            if(memory.brickArray[e.target.parentNode.getAttribute("pictureID")] === memory.brickArray[memory.firstPicture]){
                e.target.setAttribute("src", "memory/pics/"+ memory.brickArray[memory.firstPicture] +".png");
                memory.firstPicture = 0;
                memory.turnedPictures = 0;
            }
            else{
                memory.secondPicture = e.target.parentNode.getAttribute("pictureID");
                e.target.setAttribute("src", "memory/pics/"+ memory.brickArray[memory.secondPicture] +".png");
                setTimeout(memory.brickTurnBack, 1000);
                memory.turnedPictures = 2;
            }
        }
    },
    brickTurnBack: function(){
        var pictureNodes = document.getElementsByClassName("picture");
        
        for(var i = 0; i < pictureNodes.length; i+=1){
            if((pictureNodes[i].parentNode.getAttribute("pictureID") === memory.firstPicture) || (pictureNodes[i].parentNode.getAttribute("pictureID") === memory.secondPicture)){
                pictureNodes[i].setAttribute("src", "memory/pics/0.png");
            }
        }
        memory.firstPicture = 0;
        memory.secondPicture = 0;
        memory.turnedPictures = 0;
    }
};

window.addEventListener("load", memory.init);