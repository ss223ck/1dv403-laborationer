"use strict"

MemoryGame.prototype = new MyWindow();

function MemoryGame(idIndex){
    MyWindow.call(this, idIndex);
    
    var that = this;
    this.brickArray = [];
    this.rows = 3;
    this.cols = 4;
    this.firstPicture = 0;
    this.secondPicture = 0;
    this.turnedPictures = 0;
    this.clicks = 0;
    this.succeded = 0;
    
    
    

    this.generateTable = function(idIndex){
        var nodeGameArea = document.getElementById("idWindow" + idIndex), 
            gameTable = document.createElement("table"), 
            i, 
            j,
            createTR;
        
        gameTable.setAttribute("id", "tableGame" + idIndex);
        nodeGameArea.appendChild(gameTable);
        
        for(i = 0; i < this.rows; i+=1){
            createTR = document.createElement("tr");
            
            for(j = 0; j < this.cols; j+=1){
    
                this.renderBrick(createTR, i*this.cols+j);
            }
            gameTable.appendChild(createTR);
        }
    };
    this.renderBrick = function(TR, ID){
        var gameBrick = document.createElement("td"),
            enfoldTag = document.createElement("a"),
            iconZero = document.createElement("img");
            
        iconZero.setAttribute("src", "CSS/pics/picsMemoryGame/0.png");
        enfoldTag.setAttribute("href", "#");
        enfoldTag.setAttribute("pictureID", ID);
        iconZero.classList.add("picture" + idIndex);
        
        enfoldTag.appendChild(iconZero);
        gameBrick.appendChild(enfoldTag);
        TR.appendChild(gameBrick);
    };
    this.brickClicked = function(e){
        
        if((that.turnedPictures === 0) && (e.target.getAttribute("src") === "CSS/pics/picsMemoryGame/"+ 0 +".png")){
            var node = e.target.parentNode;
            that.firstPicture = node.getAttribute("pictureID");
            e.target.setAttribute("src", "CSS/pics/picsMemoryGame/"+ that.brickArray[that.firstPicture] +".png");
            that.turnedPictures = 1;
        } 
        else if((that.turnedPictures === 1) && 
                (that.firstPicture != e.target.parentNode.getAttribute("pictureID")) && 
                (e.target.getAttribute("src") === "CSS/pics/picsMemoryGame/"+ 0 +".png")){
            that.clicks += 1;
            if(that.brickArray[e.target.parentNode.getAttribute("pictureID")] === that.brickArray[that.firstPicture]){
                e.target.setAttribute("src", "CSS/pics/picsMemoryGame/"+ that.brickArray[that.firstPicture] +".png");
                that.firstPicture = 0;
                that.turnedPictures = 0;
                that.succeded += 2;
                if(that.succeded === that.rows*that.cols){
                    var finalDiv = document.createElement("div");
                    var finalText = document.createElement("p");
                    finalText.innerHTML = "Grattis! Du klarade det på " + that.clicks + " försök!";
                    finalDiv.appendChild(finalText);
                    document.getElementById("idWindow" + idIndex).appendChild(finalDiv);
                }
            }
            else{
                that.secondPicture = e.target.parentNode.getAttribute("pictureID");
                e.target.setAttribute("src", "CSS/pics/picsMemoryGame/"+ that.brickArray[that.secondPicture] +".png");
                setTimeout(that.brickTurnBack, 1000);
                that.turnedPictures = 2;
            }
        }
    };
    this.brickTurnBack = function(){
        var pictureNodes = document.getElementsByClassName("picture" + idIndex);
        
        for(var i = 0; i < pictureNodes.length; i+=1){
            if((pictureNodes[i].parentNode.getAttribute("pictureID") === that.firstPicture) || (pictureNodes[i].parentNode.getAttribute("pictureID") === that.secondPicture)){
                pictureNodes[i].setAttribute("src", "CSS/pics/picsMemoryGame/0.png");
            }
        }
        that.firstPicture = 0;
        that.secondPicture = 0;
        that.turnedPictures = 0;
    };
    
    this.init = function(idIndex){
        this.brickArray = RandomGenerator.getPictureArray(this.rows, this.cols);
        
        this.generateTable(idIndex);
        
        var imageClick = document.getElementById("tableGame" + idIndex);
        imageClick.addEventListener("click", this.brickClicked);
    };
    this.init(idIndex);
}

