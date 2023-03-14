document.querySelectorAll(".drum").forEach(button => {
   button.addEventListener("click", handleClick);
   
});

function handleClick(){
   var audio = new Audio('sounds/tom-1.mp3');
   audio.play();
}
