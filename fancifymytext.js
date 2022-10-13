function bigger(){
    document.getElementById("freeform").style.fontSize = "25px";
  }
  
  function moo(){
    const message = document.getElementById("freeform");
    var str = message.value;
    var parts = str.split(/ /);
    for(let i = 0; i < parts.length ; i++){
      parts[i] += "Moo";
    }
    str = parts.join("_");
    message.value = str;
    document.getElementById("freeform").style.textTransform = "uppercase";
  
  }
  
  function fancy(){
    document.getElementById("freeform").style.fontWeight = "bold";
    document.getElementById("freeform").style.color = "yellow";
    document.getElementById("freeform").style.textDecoration = "underline"
  }
  
  function boring(){
    document.getElementById("freeform").style.fontWeight = "normal";
    document.getElementById("freeform").style.color = "black";
    document.getElementById("freeform").style.textDecoration = "none"
  }
  
  function checkValue(value){
    var fancy;
    var boring;
  
    if(value === "fancy"){
      return fancy;
    } else if (value === "boring") {
      return boring;
    }
  }