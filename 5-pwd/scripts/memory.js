"use strict"

var memory = {
    
    brickArray: [],
    rows: 3,
    cols: 4,
    firstPicture: 0,
    secondPicture: 0,
    turnedPictures: 0,
    clicks: 0,
    succeded: 0,
    
    init:function(){
        memory.brickArray = RandomGenerator.getPictureArray(memory.rows, memory.cols);
        
        memory.generateTable();
        
        var imageClick = document.getElementById("tableGame");
        imageClick.addEventListener("click", memory.brickClicked);
        
    },
    
    generateTable: function(){
        var nodeGameArea = document.getElementById("gameArea"), 
            gameTable = document.createElement("table"), 
            i, 
            j, 
            createTR;
        
        gameTable.setAttribute("id", "tableGame");
        nodeGameArea.appendChild(gameTable);
        
        for(i = 0; i < memory.rows; i+=1){
            createTR = document.createElement("tr");
            
            for(j = 0; j < memory.cols; j+=1){

                memory.renderBrick(createTR, i*memory.cols+j);
            }
            gameTable.appendChild(createTR);
        }
        
    },
    
    renderBrick: function(TR, ID){

        var gameBrick = document.createElement("td"),
            enfoldTag = document.createElement("a"),
            iconZero = document.createElement("img");
        iconZero.setAttribute("src", "memory/pics/0.png");
        enfoldTag.setAttribute("href", "#");
        enfoldTag.setAttribute("pictureID", ID);
        iconZero.classList.add("picture");
        
        enfoldTag.appendChild(iconZero);
        gameBrick.appendChild(enfoldTag);
        TR.appendChild(gameBrick);
    },
    
    brickClicked:function(e){
        if((memory.turnedPictures === 0) && (e.target.getAttribute("src") === "memory/pics/"+ 0 +".png")){
            var node = e.target.parentNode;
            memory.firstPicture = node.getAttribute("pictureID");
            e.target.setAttribute("src", "memory/pics/"+ memory.brickArray[memory.firstPicture] +".png");
            memory.turnedPictures = 1;
        } 
        else if((memory.turnedPictures === 1) && 
                (memory.firstPicture != e.target.parentNode.getAttribute("pictureID")) && 
                (e.target.getAttribute("src") === "memory/pics/"+ 0 +".png")){
            memory.clicks += 1;
            if(memory.brickArray[e.target.parentNode.getAttribute("pictureID")] === memory.brickArray[memory.firstPicture]){
                e.target.setAttribute("src", "memory/pics/"+ memory.brickArray[memory.firstPicture] +".png");
                memory.firstPicture = 0;
                memory.turnedPictures = 0;
                memory.succeded += 2;
                if(memory.succeded === memory.rows*memory.cols){
                    var finalDiv = document.createElement("div");
                    var finalText = document.createElement("p");
                    finalText.innerHTML = "Grattis! Du klarade det på " + memory.clicks + " försök!";
                    var nodeGA = document.getElementById("gameArea");
                    finalDiv.appendChild(finalText);
                    nodeGA.appendChild(finalDiv);
                }
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