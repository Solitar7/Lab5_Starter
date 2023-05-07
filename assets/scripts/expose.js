// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let images = document.querySelectorAll("img");
  let hornImg = images[0];
  let horn = document.getElementById("horn-select");
  let audio = document.getElementsByClassName("hidden")[0];
  let button = document.querySelector("button");
  let C = new JSConfetti();

  horn.addEventListener("input", function(){
    button.removeEventListener("input");
    if (this.value == "air-horn"){
      hornImg.src = "assets/images/air-horn.svg";
      hornImg.alt = "air-horn image selected";
      audio.src = "assets/audio/air-horn.mp3";
      button.addEventListener("click", function(){
        audio.play();
      })
    }
    else if (this.value == "car-horn"){
      hornImg.src = "assets/images/car-horn.svg";
      hornImg.alt = "car-horn image selected";
      audio.src = "assets/audio/car-horn.mp3";
      button.addEventListener("click", function(){
        audio.play();
      })
    }
    else if (this.value == "party-horn"){
      hornImg.src = "assets/images/party-horn.svg";
      hornImg.alt = "air-horn image selected";
      audio.src = "assets/audio/party-horn.mp3";
      button.addEventListener("click", function(){
        audio.play();
        C.addConfetti();
      })
    }
  });

  let volume = document.getElementById("volume");
  let volumeImg = images[1];
  volume.addEventListener("change", function(){
    audio.volume = this.value/100;
    if (this.value == 0){
      volumeImg.src = "assets/icons/volume-level-0.svg";
      volumeImg.alt = "Volume level 0";
    }
    else if (this.value > 0){
      if (this.value < 33){
        volumeImg.src = "assets/icons/volume-level-1.svg";
        volumeImg.alt = "Volume level 1";
      }
      else{
        if (this.value < 67){
          volumeImg.src = "assets/icons/volume-level-2.svg";
          volumeImg.alt = "Volume level 2";
        }
        else{
          volumeImg.src = "assets/icons/volume-level-3.svg";
          volumeImg.alt = "Volume level 3";
        }
      }
    }
  });
}