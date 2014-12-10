"use strict"

var quiz = {
    
    serverName: "http://vhost3.lnu.se:20080/question/1",
    infoFromServer: "",
    
    
    
    init: function(){
        
        document.getElementById("getQuestion").addEventListener("click", quiz.tryGetQuestion);
        
        document.getElementById("sendAnswear").addEventListener("click", quiz.trySendQuestion);
    },
    
    tryGetQuestion: function () {
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function(){
            
            if(xhr.readyState === 4 && xhr.status === 200){
                quiz.infoFromServer = JSON.parse(xhr.responseText);
            }
        };
        
        xhr.open("GET", quiz.serverName, true);
        xhr.send(null);
        
        quiz.renderMessage();
        
        return false;
    },
    
    trySendQuestion: function(){
        
        return false;
    },
    
    renderMessage: function () {
        var node = document.getElementById("questionArea");
        var addPElement = document.createElement("p");
        
        addPElement.innerHTML = quiz.infoFromServer.question;
        node.appendChild(addPElement);
    }
};

window.addEventListener("load", quiz.init);