
function biggerFunction(){
	document.getElementById("mainTextArea").style.fontSize = "larger";
}
function deselectFunction(){
	alert("You have deselected my button!");
}
function fancifyFunction(){
	const textBox = document.getElementById("mainTextArea");
	textBox.style.fontWeight = "bold";
	textBox.style.color = "blue";
	textBox.style.textDecoration = "underline";
	//document.getElementById("BoringBetty").checked = "false";
}
function plainFunction(){
	const textBox = document.getElementById("mainTextArea");
	//textBox.style.fontStyle = "normal";
	textBox.style.fontWeight = "normal";
	textBox.style.color = "black";
	textBox.style.textDecoration = "initial";
	//document.getElementById("FancyShmancy").checked = "false";
}
function mooFunction(){
	const textBox = document.getElementById("mainTextArea");
	textBox.style.textTransform = "uppercase";
	var str = textBox.value;
	console.log(str);
	var parts = str.split(".");
	str = parts.join(". -Moo ");
	textBox.value = str;
}