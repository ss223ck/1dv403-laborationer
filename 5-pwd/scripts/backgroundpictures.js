"use strict";


function RenderThumbPicturesInDiv (idIndex){
    
    MyWindow.call(this, idIndex);
    
    var pictureObjects,
        xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function(){
            
        if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)){
            pictureObjects = JSON.parse(xhr.responseText);
            var addingPics = new AddPicturesToContent(pictureObjects, idIndex);
        }
    };
    xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
    xhr.send(null);
}

function AddPicturesToContent(pictureObjects, idIndex){
    var pictureTagHeight = 0,
        nodeWindowToAddObject = document.getElementById("idWindow" + idIndex),
        pictureTagWidth = 0,
        i = 0;
        
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

RenderThumbPicturesInDiv.prototype = new MyWindow();