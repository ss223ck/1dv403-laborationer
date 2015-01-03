"use strict";


var Main = {
    
    idForWindowCount: 0,
    
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
        var nodeWindowToAddObject = "";
        
        nodeWindowToAddObject = new RenderThumbPicturesInDiv(++Main.idForWindowCount);
        
    },
    
};

window.addEventListener("load", Main.Init);