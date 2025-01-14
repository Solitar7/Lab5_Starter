// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  let voices;

  speechSynthesis.addEventListener("voiceschanged", function(){
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  });

  var text = document.getElementById("text-to-speak");
  var textInfo;
  text.addEventListener("change", function() {
    textInfo = this.value;
  });

  let voiceSelect = document.querySelector("select");
  let selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

  voiceSelect.addEventListener("input", function() {
    selectedOption = this.getAttribute("data-name");
  });

  let faceImg = document.querySelector("img");
  let button = document.querySelector("button");
  button.addEventListener("click", function(){
    const utterThis = new SpeechSynthesisUtterance(textInfo);
    utterThis.onstart = function() { 
      faceImg.src = "assets/images/smiling-open.png";
      faceImg.alt = "Smiling face speaking";
    };
    utterThis.onend = function() { 
      faceImg.src = "assets/images/smiling.png";
      faceImg.alt = "Smiling face";
    };
    for (let i = 0; i < voices.length; i++){
      if (voices[i].name === selectedOption){
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
  });
}