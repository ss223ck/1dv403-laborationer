"use strict"



var MessageBoard = {
    
    
    message: [],
    
    init:function(){
        var buttonPressed = document.getElementById("buttonSend");
        buttonPressed.addEventListener("click", MessageBoard.eventButtonPressed);
        
        var imageClick = document.getElementById("messageArea");
        imageClick.addEventListener("click", MessageBoard.eventCloseButtonPressed);
    },
    renderMessages: function(){
        document.getElementById("messageArea").innerHTML = "";
        
        for(var i = 0; i < MessageBoard.message.length; i+=1){
            MessageBoard.renderMessage(i);
        }
    },
    renderMessage: function(messageID){
        var nodeMessageArea = document.getElementById("messageArea");
        var messageBox = document.createElement("div");
        messageBox.setAttribute("MB-messageID", messageID);
        messageBox.classList.add("messageBox");
        nodeMessageArea.appendChild(messageBox);
        messageBox.innerHTML = MessageBoard.message[messageID].getText();
        //messagebox.nodeValue = MessageBoard.message[messageID].getText();   ???varför fungerar ej detta.
        //var textVariabel = document.createTextNode(MessageBoard.message[messageID].getText());
        //messageBox.appendChild(textVariabel);
        
        var linkIconRemove = document.createElement("a");
        var iconRemove = document.createElement("img");
        iconRemove.classList.add("imageClass");
        iconRemove.setAttribute("src", "css/pic/remove.png");
        linkIconRemove.setAttribute("href", "#");
        messageBox.appendChild(linkIconRemove);
        linkIconRemove.appendChild(iconRemove);
        
    },
    
    eventButtonPressed: function(e){
        var node = this.parentNode;
        var messageObject = new Message(node.msg.value, new Date());
        MessageBoard.message.push(messageObject);
        MessageBoard.renderMessage(MessageBoard.message.length - 1);
        node.msg.value = "";
        e.preventDefault();
    },
    eventCloseButtonPressed: function(e){
        MessageBoard.removeMessage(e.target.parentNode.parentNode.getAttribute("MB-messageID"));
    },
    removeMessage: function(messageID){
        MessageBoard.message.splice(messageID, 1);
        MessageBoard.renderMessages();
    }
};

window.addEventListener("load", MessageBoard.init);