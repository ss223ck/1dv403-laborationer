"use strict";


var Main = {
    
    idForWindowCount: 0,
    serverName: "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/",
    
    Init : function(){
        Main.RenderIcons();
        
        document.getElementById("openPicturesForBackground").addEventListener("click", Main.RenderBackgroundPictures);
        var windowElements = document.querySelectorAll(".topBarDiv");
        Array.prototype.forEach.call(windowElements, function(){
            addEventListener("mousedown", function(){
                console("mousedown");
            });
        });
    },
    RenderIcons : function(){
        var nodeToolbelt = document.getElementById("openPicturesForBackground"),
            enfoldTag = document.createElement("a"),
            icontag = document.createElement("img");
        
        icontag.setAttribute("src", "CSS/pics/icon1.png");
        enfoldTag.setAttribute("href", "#");
        
        enfoldTag.appendChild(icontag);
        nodeToolbelt.appendChild(enfoldTag);
    },
    RenderBackgroundPictures: function(){
        var xhr = new XMLHttpRequest(),
            nodeWindowToAddObject,
            pictureTagHeight,
            pictureTagWidth,
            i = 0,
            pictureObjects = "";
        
        xhr.open("GET", Main.serverName, true);
        xhr.onreadystatechange = function(){
            
            if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)){
                pictureObjects = JSON.parse(xhr.responseText);
            }
        };
        xhr.send(null);
        
        nodeWindowToAddObject = document.getElementById(Main.RenderWindowForBackground);
        
        
        
        for(i; i < pictureObjects.length; i += 1){
            
            if(pictureTagHeight < pictureObjects[i].thumbHeight){
                pictureTagHeight = pictureObjects[i].thumbHeight;
            }
            if(pictureTagWidth < pictureObjects[i].thumbWidth){
                pictureTagWidth = pictureObjects[i].thumbWidth;
            }
        }
        for(i = 0; i < pictureObjects.length; i += 1){
            var nodeCreatePictureDiv = document.createElement("div"),
                nodeCreatePictureA = document.createElement("a"),
                nodeCreatePictureImg = document.createElement("img");
            
            nodeCreatePictureA.setAttribute("href", "#");
            nodeCreatePictureA.appendChild(nodeCreatePictureImg);
            nodeCreatePictureDiv.appendChild(nodeCreatePictureA);
            nodeCreatePictureDiv.height = pictureTagHeight;
            nodeCreatePictureDiv.width = pictureTagWidth;
            
            nodeCreatePictureImg.setAttribute("src", pictureObjects[i].thumbURL);
            nodeWindowToAddObject.appendChild(nodeCreatePictureDiv);
        }
    },
    RenderWindowForBackground: function(){
        var nodeContent = document.getElementById("content"),
            nodeAddDivMain = document.createElement("div"),
            nodeAddTopBar = document.createElement("div"),
            nodeAddBottomBar = document.createElement("div"),
            nodeAddDivContent = document.createElement("div");

            nodeAddDivContent.className = "middleContentDiv";
            nodeAddBottomBar.className = "bottomBarDiv";
            nodeAddTopBar.className = "topBarDiv";
            nodeAddDivMain.className = "WindowStandard";
            nodeAddDivContent.setAttribute("id", "idWindow" + Main.idForWindowCount);
            
            nodeAddDivMain.appendChild(nodeAddTopBar);
            nodeAddDivMain.appendChild(nodeAddDivContent);
            nodeAddDivMain.appendChild(nodeAddBottomBar);
            nodeContent.appendChild(nodeAddDivMain);
            Main.idForWindowCount += 1;
            return "idWindow" + (Main.idForWindowCount - 1);
    },
    grabWindow: function(e){
        console("mousedown");
    }
};

window.addEventListener("load", Main.Init);