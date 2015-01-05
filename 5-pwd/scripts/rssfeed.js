"use strict";

RenderRSSFeedWindow.prototype = new MyWindow();


function RenderRSSFeedWindow(idIndex){
    MyWindow.call(this, idIndex);
    
    var rssFeedHTML,
        nodeToAddRssFeed = document.getElementById("idWindow" + idIndex),
        xhr = new XMLHttpRequest();
    
    nodeToAddRssFeed.style.overflow = "visible";
    xhr.onreadystatechange = function(){
            
        if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)){
            rssFeedHTML = xhr.responseText;
            nodeToAddRssFeed.innerHTML = rssFeedHTML;
        }
    };
    xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.dn.se/m/rss/senaste-nytt"), true);
    xhr.send(null);
}