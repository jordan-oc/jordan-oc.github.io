
function bigger() {
	var textarea = document.getElementById("textarea");
	textarea.style.fontSize = "24pt";
	hello();
  }
  
  function fancy() {
	var clicked = document.getElementById("fancy");
	var textarea = document.getElementById("textarea");
	if (clicked.checked) {
	  hello();
	  textarea.style.fontWeight = "bold";
	  textarea.style.color = "blue";
	  textarea.style.textDecoration = "underline";
	} else {
	  hello();
	  textarea.style.fontWeight = "normal";
	  textarea.style.color = "black";
	  textarea.style.textDecoration = "none";
	}
  }
  
  function hello() {
	alert("Hello, World!");
  }
  
  function moo() {
	var textarea = document.getElementById("textarea");
	textarea.style.textTransform = "uppercase";
	var period = textarea.value.split(".");
	textarea.value = period.join("-Moo");
	hello();
  }