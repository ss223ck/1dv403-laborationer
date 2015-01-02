"use strict";


function RenderTumbPicturesInDiv (pictureObjects, idIndex){
    var pictureTagHeight = 0,
        pictureTagWidth = 0,
        nodeWindowToAddObject = document.getElementById("idWindow" + idIndex),
        i = 0;
    
    MyWindow.call(this, idIndex);
        
    for(i; i < pictureObjects.length; i += 1){
        
        if(pictureTagHeight < pictureObjects[i].thumbHeight){
            pictureTagHeight = pictureObjects[i].thumbHeight;
        }
        if(pictureTagWidth < pictureObjects[i].thumbWidth){
            pictureTagWidth = pictureObjects[i].thumbWidth;
        }
    }
    i = 0;
    for(i; i < pictureObjects.length; i += 1){
        var nodeCreatePictureDiv = document.createElement("div"),
            nodeCreatePictureA = document.createElement("a"),
            nodeCreatePictureImg = document.createElement("img");
        
        nodeCreatePictureA.setAttribute("href", "#");
        nodeCreatePictureA.appendChild(nodeCreatePictureImg);
        nodeCreatePictureDiv.appendChild(nodeCreatePictureA);
        nodeCreatePictureDiv.style.height = pictureTagHeight + "px";
        nodeCreatePictureDiv.style.width = pictureTagWidth + "px";
        nodeCreatePictureDiv.className = "tumbPictureDiv";
        
        nodeCreatePictureImg.setAttribute("src", pictureObjects[i].thumbURL);
        nodeWindowToAddObject.appendChild(nodeCreatePictureDiv);
    }  
}
RenderTumbPicturesInDiv.prototype = new MyWindow();