"use strict"


var mess = new Message("testmedelande", new Date());
alert(mess);
alert(mess.getText());
mess.setText("en annan text");
alert(mess);