"use strict";

RenderRSSFeedWindow.prototype = new MyWindow();


function RenderRSSFeedWindow(idIndex){
    MyWindow.call(this, idIndex, "RSS-FEED", "CSS/pics/rss-icon.png");
    
    var rssFeedHTML,
        nodeToAddRssFeed = document.getElementById("idWindow" + idIndex),
        nodeWindowBottombar = document.getElementById("idWindowBottombar" + idIndex),
        divContainerGif = document.createElement("div"),
        gifImageForLoading = document.createElement("img"),
        xhr = new XMLHttpRequest();
    
    gifImageForLoading.setAttribute("src", "CSS/pics/loadingicon.gif");
    divContainerGif.appendChild(gifImageForLoading);
    nodeWindowBottombar.appendChild(divContainerGif);
    
    nodeToAddRssFeed.style.overflow = "visible";
    xhr.onreadystatechange = function(){
            
        if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)){
            rssFeedHTML = xhr.responseText;
            nodeToAddRssFeed.innerHTML = rssFeedHTML;
            nodeWindowBottombar.removeChild(nodeWindowBottombar.childNodes[0]);
        }
    };
    xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.dn.se/m/rss/senaste-nytt"), true);
    xhr.send(null);
}