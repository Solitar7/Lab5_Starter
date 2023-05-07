// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let images = document.querySelectorAll("img");
  let hornImg = images[0];
  let horn = document.getElementById("horn-select");
  let audio = document.getElementsByClassName("hidden")[0];
  let button = document.querySelector("button");
  let C = new JSConfetti();

  horn.addEventListener("input", changeHorn);

  function changeHorn(h){
    if (h.value == "air-horn"){
      hornImg.src = "assets/images/air-horn.svg";
      hornImg.alt = "air-horn image selected";
      audio.src = "assets/audio/air-horn.mp3";
    }
    else if (h.value == "car-horn"){
      hornImg.src = "assets/images/car-horn.svg";
      hornImg.alt = "car-horn image selected";
      audio.src = "assets/audio/car-horn.mp3";
    }
    else if (h.value == "party-horn"){
      hornImg.src = "assets/images/party-horn.svg";
      hornImg.alt = "air-horn image selected";
      audio.src = "assets/audio/party-horn.mp3";
    }
    button.addEventListener("click", function(){
      audio.play();
      if (h.value == "party-horn"){
        C.addConfetti();
      }
    })
  }
}