"use strict"



var MessageBoard = {
    
    
    message: [],
    
    init:function(){
        var mess = new Message("ett medelanden", new Date());
        alert(mess);
        alert(mess.getText());
        mess.setText("ett annat medelanden");
        alert(mess);
    }
};

window.addEventListener("load", MessageBoard.init);