// Detecting button press
var numberOfDrumsButtons = document.querySelectorAll(".drum").length;

// Loop
for (var i = 0; i < numberOfDrumsButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}

// Detecting Keyboard press
document.addEventListener("keypress", function(event) {
  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();

      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();

      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();

      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();

      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();

      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();

      break;
    case "l":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();

    default:
  }
}

// To add shadow class to buttons
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

// To cancel the pressed class in CSS
  setTimeout(function() {
    activeButton.classList.remove("pressed"); }, 100);

}









// this.style.color = "white";
