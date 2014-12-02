"use strict"



var MessageBoard = {
    
    
    message: [],
    
    init:function(){
        var buttonPressed = document.getElementById("buttonSend");
        
        buttonPressed.addEventListener("click", function(e){
            var node = this.parentNode;
            var messageObject = new Message(node.msg.value, new Date());
            MessageBoard.message.push(messageObject);
            console.log(MessageBoard.message[0].getText());
            e.preventDefault();
        });
    }
};

window.addEventListener("load", MessageBoard.init);