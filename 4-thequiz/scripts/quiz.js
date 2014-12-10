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
        
        xhr.open("GET", quiz.serverName, true);
        xhr.onreadystatechange = function(){
            
            if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)){
                quiz.infoFromServer = JSON.parse(xhr.responseText);
                quiz.renderMessage();
            }
        };
        
        
        xhr.send(null);
        
        
        return false;
    },
    
    trySendQuestion: function(){
        var answearTextArea = {"answer": document.getElementById("answearTextArea").value},
            nodeAnswerFromServer = document.getElementById("answerFromServer"),
            xhrSend = new XMLHttpRequest();
        
        xhrSend.open("POST", quiz.serverName, true);
        xhrSend.onreadystatechange = function(){
            if(xhrSend.readyState === 4 ){
                if(xhrSend.status === 200 || xhrSend.status === 304){
                    quiz.infoFromServer = JSON.parse(xhrSend.responseText);
                    quiz.serverName = quiz.infoFromServer.nextURL;
                    
                    if(quiz.infoFromServer.message === "Correct answer!"){
                        nodeAnswerFromServer.innerHTML = "Du svarade rätt!";
                    }
                    
                }
                else if(xhrSend.status === 400){
                    nodeAnswerFromServer.innerHTML = "Du svarade fel!";
                }
            }
            return false;
        };
        
        xhrSend.setRequestHeader('Content-Type', 'application/json');
        xhrSend.send(JSON.stringify(answearTextArea));
    },
    
    renderMessage: function () {
        var addToElement = document.getElementById("questionElementInQuestionArea");
        
        addToElement.innerHTML = quiz.infoFromServer.question;
        quiz.serverName = quiz.infoFromServer.nextURL;
    }
};

window.addEventListener("load", quiz.init);