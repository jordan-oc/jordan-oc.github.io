/*
 * Jordan O'Connell 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window loaded.");
  }

})();

function encrypt() {
  const inputTextArea = document.getElementById("input-text");
  var inputText = inputTextArea.value;
  inputText = inputText.toLowerCase();
  var type = document.getElementById("cipher-type").value;
  if(type == "shift"){
    var textEncrypted = shiftCipher(inputText)}
  else if(type == "random"){
    var textEncrypted = randomCipher(inputText);
  }
  printResult(textEncrypted);
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function printResult(text){
  if(document.getElementById("all-caps").checked){
    text = text.toUpperCase();
  }
  document.getElementById("result").textContent = text;
  console.log(`Encrypted Text: ${text}`);
}
function randomCipher(text){
  var textEncrypted = ""; 
  for(let i = 0; i<text.length; i++){
    if(text[i] == 'z'){textEncrypted += 'a';}
    else{
      let a = 'a';
      let letter = a.charCodeAt(0);
      let x = getRandomInt(26);
      letter = String.fromCharCode(letter+x);
      textEncrypted += letter;
    }
  }
  return textEncrypted;
}
function reset(){
  document.getElementById("input-text").textContent = "";
  document.getElementById("result").textContent = "";
  console.log("reset");
}
function setFontSize(size){
  if(size == 12){
    document.getElementById("result").style.fontSize = "12px";}
  else if(size == 24){
    document.getElementById("result").style.fontSize = "24px";}
  console.log("Set font size to "+ num);
}
function shiftCipher(text){
  var textEncrypted = ""; 
  for(let i = 0; i<text.length; i++){
    if(text[i] == 'z'){textEncrypted += 'a';}
    else{
      let letter = text.charCodeAt(i);
      letter = String.fromCharCode(letter+1);
      textEncrypted += letter;
    }
  }
  return textEncrypted;
}