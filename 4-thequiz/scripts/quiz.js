"use strict"

var quiz = {
    
    xhr: new XMLHttpRequest(),
    serverName: "http://vhost3.lnu.se:20080/question/1",
    infoFromServer: "",
    
    quiz.xhr.open("GET", quiz.serverName, true),
    
    quiz.xhr.send(null),
    
    init: function(){
        
        document.getElementById("sendAnswear").addEventListener("click", quiz.trySendAnswear);
        
        quiz.xhr.onreadystatechange = function(){
            
            if(quiz.xhr.readyState === 4 && quiz.xhr.status === 200){
                quiz.infoFromServer = JSON.parse(quiz.xhr.responseText);
            }
        };
    },
    
    trySendAnswear: function () {
        
        
        quiz.xhr.send(JSON.stringify());
    }
};

window.addEventListener("load", quiz.init);