"use strict";

function MyWindow (idForWindowCount){
    var nodeContent = document.getElementById("content"),
        nodeAddDivMain = document.createElement("div"),
        nodeAddTopBar = document.createElement("div"),
        nodeAddBottomBar = document.createElement("div"),
        nodeAddDivContent = document.createElement("div"),
        nodeAddDivExit = document.createElement("div"),
        nodeAddAExit = document.createElement("a"),
        nodeAddImgExit = document.createElement("img");

    nodeAddDivContent.className = "middleContentDiv";
    nodeAddBottomBar.className = "bottomBarDiv";
    nodeAddTopBar.className = "topBarDiv";
    nodeAddDivMain.className = "WindowMain";
    nodeAddDivContent.setAttribute("id", "idWindow" + idForWindowCount);
    nodeAddImgExit.setAttribute("src", "CSS/pics/iconExit.png");
    nodeAddAExit.setAttribute("href", "#");
    nodeAddDivExit.className = "exitDivIcon";
    nodeAddDivExit.addEventListener("click", Main.RemoveMyWindowObject);
    
    nodeAddAExit.appendChild(nodeAddImgExit);
    nodeAddDivExit.appendChild(nodeAddAExit);
    nodeAddTopBar.appendChild(nodeAddDivExit);
    nodeAddDivMain.appendChild(nodeAddTopBar);
    nodeAddDivMain.appendChild(nodeAddDivContent);
    nodeAddDivMain.appendChild(nodeAddBottomBar);
    nodeContent.appendChild(nodeAddDivMain);
}
