//Detecting Button Press

document.querySelectorAll(".drum").forEach(button => {
   button.addEventListener("click", handleClick);
   
});

function handleClick(){
   
   var buttonInnerHTML = this.innerHTML;

   makeSound(buttonInnerHTML);
         
}

//Detecting Keyboard Press

document.addEventListener("keydown", function(event) {
   makeSound(event.key);
});


function makeSound(key){
   switch (key) {
      case "w":
         var kick = new Audio('sounds/kick-bass.mp3');
         kick.play();      
         break;
      case "W":
         var kick = new Audio('sounds/kick-bass.mp3');
         kick.play();      
         break;
      case "a":
         var snare = new Audio('sounds/snare.mp3');
         snare.play(); 
      break;
      case "A":
         var snare = new Audio('sounds/snare.mp3');
         snare.play(); 
      break;
      case "s":
         var tom1 = new Audio('sounds/tom-1.mp3');
         tom1.play(); 
      break;
      case "S":
         var tom1 = new Audio('sounds/tom-1.mp3');
         tom1.play(); 
      break;
      case "d":
         var tom2 = new Audio('sounds/tom-2.mp3');
         tom2.play(); 
      break;
      case "D":
         var tom2 = new Audio('sounds/tom-2.mp3');
         tom2.play(); 
      break;
      case "j":
         var tom3 = new Audio('sounds/tom-3.mp3');
         tom3.play(); 
      break;
      case "J":
         var tom3 = new Audio('sounds/tom-3.mp3');
         tom3.play(); 
      break;
      case "k":
         var tom4 = new Audio('sounds/tom-4.mp3');
         tom4.play(); 
      break;
      case "K":
         var tom4 = new Audio('sounds/tom-4.mp3');
         tom4.play(); 
      break;
      case "l":
         var crash = new Audio('sounds/crash.mp3');
         crash.play(); 
      break;
      case "L":
         var crash = new Audio('sounds/crash.mp3');
         crash.play(); 
      break;

      default:
         console.log(buttonInnerHTML);
         break;
   }
}