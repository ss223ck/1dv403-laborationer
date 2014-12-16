"use strict"

var quiz = {
    
    serverName: "http://vhost3.lnu.se:20080/question/1",
    infoFromServer: "",
    tryCounter: 1,
    tryForEachQuestion: 1,
    
    init: function(){
        
        document.getElementById("getQuestion").addEventListener("click", quiz.tryGetQuestion);
        
        document.getElementById("sendAnswear").addEventListener("click", quiz.trySendQuestion);
    },
    
    tryGetQuestion: function () {
        var xhr = new XMLHttpRequest(),
            nodePromptGetQuestion = document.getElementById("promptGetQuestion");
        
        quiz.tryForEachQuestion = 1;
        xhr.open("GET", quiz.serverName, true);
        xhr.onreadystatechange = function(){
            
            if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)){
                quiz.infoFromServer = JSON.parse(xhr.responseText);
                quiz.renderMessage();
                nodePromptGetQuestion.innerHTML = "";
            }
        };
        
        xhr.send(null);
        
        return false;
    },
    
    trySendQuestion: function(){
        var answearTextArea = {"answer": document.getElementById("answearTextArea").value},
            nodeMessageFromGame = document.getElementById("answerFromServer"),
            nodePromptGetQuestion = document.getElementById("promptGetQuestion"),
            xhrSend = new XMLHttpRequest();
        
        xhrSend.open("POST", quiz.serverName, true);
        xhrSend.onreadystatechange = function(){
            if(xhrSend.readyState === 4 ){
                if(xhrSend.status === 200 || xhrSend.status === 304){
                    quiz.infoFromServer = JSON.parse(xhrSend.responseText);
                    quiz.serverName = quiz.infoFromServer.nextURL;
                    
                    
                    if(quiz.infoFromServer.message === "Correct answer!"){
                        nodeMessageFromGame.innerHTML = "Du svarade rätt!";
                        nodePromptGetQuestion.innerHTML = "Hämta ny fråga!";
                    }
                    else{
                        nodeMessageFromGame.innerHTML = "Något är fel med requesten";
                    }
                    if(quiz.infoFromServer.nextURL === undefined){
                        nodeMessageFromGame.innerHTML = "Grattis du klarade spelet på "+ quiz.tryCounter +" försök";
                        nodePromptGetQuestion.innerHTML = "";
                    }
                }
                else if(xhrSend.status === 400){
                    nodeMessageFromGame.innerHTML = "Du svarade fel! Antal försök" + quiz.tryForEachQuestion;
                    quiz.tryCounter += 1;
                    quiz.tryForEachQuestion += 1;
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