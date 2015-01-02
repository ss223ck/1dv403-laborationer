"use strict";

function MyWindow (idForWindowCount){
    var nodeContent = document.getElementById("content"),
        nodeAddDivMain = document.createElement("div"),
        nodeAddTopBar = document.createElement("div"),
        nodeAddBottomBar = document.createElement("div"),
        nodeAddDivContent = document.createElement("div");

    nodeAddDivContent.className = "middleContentDiv";
    nodeAddBottomBar.className = "bottomBarDiv";
    nodeAddTopBar.className = "topBarDiv";
    nodeAddDivMain.className = "WindowMain";
    nodeAddDivContent.setAttribute("id", "idWindow" + idForWindowCount);
    
    nodeAddDivMain.appendChild(nodeAddTopBar);
    nodeAddDivMain.appendChild(nodeAddDivContent);
    nodeAddDivMain.appendChild(nodeAddBottomBar);
    nodeContent.appendChild(nodeAddDivMain);
}
