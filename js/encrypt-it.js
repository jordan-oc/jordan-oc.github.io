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
    const encryptIt = document.getElementById('encrypt-it')
    encryptIt.addEventListener("click", click, false);
  }

  function click() {
    console.log("Button clicked!");
    const inputText = document.getElementById('input-text');
    const resultArea = document.getElementById('result');
    resultArea.textContent = shiftCipher(inputText.value);
  }

  function shiftCipher(text) {
    text = text.toLowerCase();
    const upgrade = 5;
    let result = '';
    for (let i = 0; i <text.length; i++) {
      if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
        if (text[i] == 'y') {
          result += String.fromCharCode(97);
        }else if (text[i] == 'z') {
          result += String.fromCharCode(98);
        } else {
          result += String.fromCharCode(text.charCodeAt(i) + upgrade);
  
        }
      } else {
        result += text[i];
      }
      
    }
    return result;
  }
})();