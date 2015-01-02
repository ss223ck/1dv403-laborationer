"use strict";


var Main = {
    
    idForWindowCount: 0,
    serverName: "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/",
    
    Init : function(){
        Main.RenderIconForPictures();
        
        
        /*var windowElements = document.querySelectorAll(".topBarDiv");
        Array.prototype.forEach.call(windowElements, function(){
            addEventListener("mousedown", function(){
                console("mousedown");
            });
        });*/
    },
    RenderIconForPictures : function(){
        var nodeToolbelt = document.getElementById("openPicturesForBackground"),
            enfoldTag = document.createElement("a"),
            icontag = document.createElement("img");
        
        icontag.setAttribute("src", "CSS/pics/icon1.png");
        enfoldTag.setAttribute("href", "#");
        
        enfoldTag.appendChild(icontag);
        nodeToolbelt.appendChild(enfoldTag);
        nodeToolbelt.addEventListener("click", Main.RenderBackgroundPictures);
    },
    RenderBackgroundPictures: function(){
        var xhr = new XMLHttpRequest(),
            nodeWindowToAddObject = "",
            pictureObjects = "";
        
        xhr.onreadystatechange = function(){
            
            if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)){
                pictureObjects = JSON.parse(xhr.responseText);
                nodeWindowToAddObject = new RenderTumbPicturesInDiv(pictureObjects, ++Main.idForWindowCount);
            }
        };
        xhr.open("GET", Main.serverName, true);
        xhr.send(null);
    },
    
};

window.addEventListener("load", Main.Init);