"use strict";


ShowPictureFullSize().prototype = new MyWindow();
RenderThumbPicturesInDiv.prototype = new MyWindow();

function RenderThumbPicturesInDiv (idIndex){
    MyWindow.call(this, idIndex);
    
    var pictureObjects,
        xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function(){
            
        if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)){
            pictureObjects = JSON.parse(xhr.responseText);
            new AddPicturesToContent(pictureObjects, idIndex);
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
            nodeCreatePictureDivEnfold = document.createElement("div"),
            nodeCreatePictureA = document.createElement("a"),
            nodeCreatePictureImg = document.createElement("img");
        
        nodeCreatePictureA.setAttribute("href", "#");
        nodeCreatePictureA.appendChild(nodeCreatePictureImg);
        nodeCreatePictureDivEnfold.appendChild(nodeCreatePictureA);
        nodeCreatePictureDiv.appendChild(nodeCreatePictureDivEnfold);
        nodeCreatePictureDiv.style.height = pictureTagHeight + "px";
        nodeCreatePictureDiv.style.width = pictureTagWidth + "px";
        nodeCreatePictureDiv.className = "tumbPictureDiv";
        nodeCreatePictureDiv.setAttribute("URL", pictureObjects[i].URL);
        nodeCreatePictureDiv.addEventListener("click", Main.GetPicture);
        nodeCreatePictureDiv.setAttribute("height", pictureObjects[i].height);
        nodeCreatePictureDiv.setAttribute("width", pictureObjects[i].width);
        
        nodeCreatePictureImg.setAttribute("src", pictureObjects[i].thumbURL);
        nodeWindowToAddObject.appendChild(nodeCreatePictureDiv);
    }
}
function ShowPictureFullSize(idIndex, imageURL, imageHeight, imageWidth){
    MyWindow.call(this, idIndex);
    
    var nodeWindowToAddPicture = document.getElementById("idWindow" + idIndex),
        nodeRenderImage = document.createElement("img");
    
    
    nodeRenderImage.setAttribute("src", imageURL);
    nodeWindowToAddPicture.appendChild(nodeRenderImage);
    nodeWindowToAddPicture.parentNode.style.width = imageWidth + "px";
    nodeWindowToAddPicture.style.height = imageHeight + "px";
    nodeWindowToAddPicture.style.overflow = "visible";
}
