"use strict";


var Main = {
    
    idForWindowCount: 0,
    
    Init : function(){
        Main.RenderIconForPictures();
        Main.RenderIconForRSSFeed();
        Main.RenderIconForMemoryGame();
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
    
    RenderIconForRSSFeed: function(){
        var nodeToolbelt = document.getElementById("openRSS"),
            enfoldTag = document.createElement("a"),
            icontag = document.createElement("img");
        
        icontag.setAttribute("src", "CSS/pics/rss-icon.png");
        enfoldTag.setAttribute("href", "#");
        
        enfoldTag.appendChild(icontag);
        nodeToolbelt.appendChild(enfoldTag);
        nodeToolbelt.addEventListener("click", Main.StartRSSFeedFunction);
    },
    StartRSSFeedFunction: function(){
        new RenderRSSFeedWindow(++Main.idForWindowCount);
    },
    
    RenderIconForMemoryGame: function(){
        var nodeToolbelt = document.getElementById("openMemory"),
            enfoldTag = document.createElement("a"),
            icontag = document.createElement("img");
        
        icontag.setAttribute("src", "CSS/pics/games-icon.png");
        enfoldTag.setAttribute("href", "#");
        
        enfoldTag.appendChild(icontag);
        nodeToolbelt.appendChild(enfoldTag);
        nodeToolbelt.addEventListener("click", Main.StartMemoryGame);
    },
    StartMemoryGame: function(){
        new MemoryGame(++Main.idForWindowCount);
    },
    GetPicture: function(e) {
        new ShowPictureFullSize(++Main.idForWindowCount, e.currentTarget.attributes.url.value,
        e.currentTarget.attributes.height.value, e.currentTarget.attributes.width.value);
    },
    RemoveMyWindowObject: function(e){
        e.currentTarget.parentNode.parentNode.parentNode.removeChild(e.currentTarget.parentNode.parentNode);
    }
    
};

window.addEventListener("load", Main.Init);