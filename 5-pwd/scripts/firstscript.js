"use strict"

var Main = {
    Init : function(){
        Main.RenderIcons();
        
        document.getElementById("openPicturesForBackground").addEventListener("click", Main.);
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
    RenderWindowForBackground: function(){
        
    }
};

window.addEventListener("load", Main.Init);