var op1;


function set0(){
	document.getElementById("display").innerHTML += "0";
}

function set1(){
	document.getElementById("display").innerHTML += "1";
}

function setSum(){
	op1 = document.getElementById("display").innerHTML;
	document.getElementById("display").innerHTML = "";
}

function calculator(){
	var op2 = document.getElementById("display").innerHTML;
	var result = parseInt(op1) ^ parseInt(op2); 
	changer("display", result);
}

function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}

function clear(){
	document.getElementById("display").innerHTML = "";
	op1 = null;
}
