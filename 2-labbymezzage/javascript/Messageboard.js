"use strict"



var MessageBoard = {
    
    
    message: [],
    
    init:function(){
        for(var i = 0; i < 5; i+= 1)
        {
            var mess = new Message("hej hopp " + i, new Date());
            MessageBoard.message.push(mess);
        }
        console.log(MessageBoard.message[2].getText());
        console.log(MessageBoard.message[4].getText());
    }
};

window.addEventListener("load", MessageBoard.init);