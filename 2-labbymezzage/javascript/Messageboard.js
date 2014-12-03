"use strict"



var MessageBoard = {
    
    
    message: [],
    
    init:function(){
        var buttonPressed = document.getElementById("buttonSend");
        buttonPressed.addEventListener("click", MessageBoard.eventButtonPressed);
        
        var imageClick = document.getElementById("messageArea");
        imageClick.addEventListener("click", MessageBoard.eventImagePressed);
        
        var keyPressed = document.getElementById("messageTextArea");
        keyPressed.onkeypress = function (e){
            if(!e) var e = window.event;
            if((e.keyCode === 13) && (!e.shiftKey)){
                var node = e.target;
                if(node.value !== ""){
                    var messageObject = new Message(node.value, new Date());
                
                    MessageBoard.message.push(messageObject);
                    MessageBoard.renderMessage(MessageBoard.message.length - 1);
                    node.value = "";
                    
                    var nodeMsgCounter = document.getElementById("messageCounter");
                    nodeMsgCounter.innerHTML = "Antal meddelanden: " + MessageBoard.message.length;
                }
                e.preventDefault();
            }
        };
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
        
        //messagebox.nodeValue = MessageBoard.message[messageID].getText();   ???varför fungerar ej detta.
        //var textVariabel = document.createTextNode(MessageBoard.message[messageID].getText());
        //messageBox.appendChild(textVariabel);
        
        var linkIconRemove = document.createElement("a");
        var iconRemove = document.createElement("img");
        iconRemove.classList.add("imageClass");
        iconRemove.setAttribute("src", "css/pic/remove.png");
        iconRemove.setAttribute("imageType", "removeImage");
        linkIconRemove.setAttribute("href", "#");
        messageBox.appendChild(linkIconRemove);
        linkIconRemove.appendChild(iconRemove);
        
        var linkTime = document.createElement("a");
        var iconTime = document.createElement("img");
        iconTime.classList.add("imageClass");
        iconTime.setAttribute("src", "css/pic/time.png");
        iconTime.setAttribute("imageType", "timeImage");
        linkTime.setAttribute("href", "#");
        messageBox.appendChild(linkTime);
        linkTime.appendChild(iconTime);
        
        messageBox.innerHTML += MessageBoard.message[messageID].getHTMLText();
        
        var timeCreated = document.createElement("div");
        timeCreated.classList.add("timeOnMessage");
        timeCreated.innerHTML = MessageBoard.message[messageID].getDate().toLocaleTimeString();
        messageBox.appendChild(timeCreated);
    },
    
    eventButtonPressed: function(e){
        var node = this.parentNode;
        if(node.msg.value !== ""){
            var messageObject = new Message(node.msg.value, new Date());
        
            MessageBoard.message.push(messageObject);
            MessageBoard.renderMessage(MessageBoard.message.length - 1);
            node.msg.value = "";
            
            var nodeMsgCounter = document.getElementById("messageCounter");
            nodeMsgCounter.innerHTML = "Antal meddelanden: " + MessageBoard.message.length;
        }
        e.preventDefault();
    },
    
    eventImagePressed: function(e){
        if(e.target.getAttribute("imageType") === "removeImage"){
            MessageBoard.removeMessage(e.target.parentNode.parentNode.getAttribute("MB-messageID"));
        }
        else if(e.target.getAttribute("imageType") === "timeImage"){
            MessageBoard.eventTimeButtonPressed(e.target.parentNode.parentNode.getAttribute("MB-messageID"));
        }
    },
    removeMessage: function(messageID){
        if(window.confirm("Vill du verkligen radera medelandet?")){
        MessageBoard.message.splice(messageID, 1);
        MessageBoard.renderMessages();
        
        var nodeMsgCounter = document.getElementById("messageCounter");
        nodeMsgCounter.innerHTML = "Antal meddelanden: " + MessageBoard.message.length;
        }
    },
    
    eventTimeButtonPressed: function(messageID){
        alert(MessageBoard.message[messageID].getDateText());
    },
    
    
};

window.addEventListener("load", MessageBoard.init);