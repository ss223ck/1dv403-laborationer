"use strict";

window.onload = function(){

	
	var birthday = function(date){
		var controlString1 = date.substring(0, 3);
		var controlString2 = date.substring(5, 6);
		var controlString3 = date.substring(8, 9);
		
		if ((isNaN(controlString1)) || (date.charAt(4) !== "-") || (date.charAt(7) !== "-") || (isNaN(controlString2)) || (isNaN(controlString3))) {
			throw new Error("Indatan var i felaktigt format");
		}
		var bDate = new Date(date);
		var todayDate = new Date();
		
		bDate.setFullYear(todayDate.getUTCFullYear());
		
		var diffrenceTime = bDate.getTime() - todayDate.getTime();
		var diffrenceDay = Math.ceil(diffrenceTime / (1000*60*60*24));
		if (diffrenceDay < 0){
			bDate.setFullYear(todayDate.getUTCFullYear()+1);
			diffrenceTime = bDate.getTime() - todayDate.getTime();
			diffrenceDay = Math.ceil(diffrenceTime / (1000*60*60*24));
		}
		return diffrenceDay;
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value); // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};