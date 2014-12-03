"use strict"



var MessageBoard = {
    
    
    message: [],
    
    init:function(){
        var buttonPressed = document.getElementById("buttonSend");
        
        buttonPressed.addEventListener("click", MessageBoard.eventButtonPressed);
    },
    renderMessages: function(){
        
    },
    renderMessage: function(messageID){
        var nodeMessageArea = document.getElementById("messageArea");
        var messageBox = document.createElement("div");
        messageBox.setAttribute("MB-messageID", messageID);
        messageBox.classList.add("messageBox");
        nodeMessageArea.appendChild(messageBox);
    },
    
    eventButtonPressed: function(e){
        var node = this.parentNode;
        var messageObject = new Message(node.msg.value, new Date());
        MessageBoard.message.push(messageObject);
        MessageBoard.renderMessage(MessageBoard.message.length - 1);
        e.preventDefault();
    }
};

window.addEventListener("load", MessageBoard.init);