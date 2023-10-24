let dogHitbox = hero.xPos>=dog.xPos && hero.xPos<=dog.xPos && hero.yPos>=dog.yPos && hero.yPos<=dog.yPos;

const attack1 = new Image;
attack1.src = "img/player.png";

const attack2 = new Image;
attack2.src = "img/player.png";

const attack3 = new Image;
attack3.src = "img/player.png";

const returnBtn = new Image;
returnBtn.src = "img/player.png";

const fightCanvas = document.getElementById("fightCanvas");
const fightContext = fightCanvas.getContext("2d");

//Draw fight scene elements
function loadFightScene(){
    background.onload = () =>{
        fightCanvas.style = "display:block";
        fightContext.drawImage(background, 0, 0, 800, 800);
        fightContext.drawImage(attack1, 10, 310, 240, 240);
        fightContext.drawImage(attack1, 500, 40, 240, 240);
        fightContext.fillStyle = "#212121";
        fightContext.fillRect(0, 600, 800, 200);
        fightContext.drawImage(attack2, 15, 610, 180, 180);
        fightContext.drawImage(attack2, 210, 610, 180, 180);
        fightContext.drawImage(attack3, 405, 610, 180, 180);
        fightContext.drawImage(returnBtn, 600, 610, 180, 180);
    };
}

//Create hitbox for menu buttons
let patk1 = new Path2D(), patk2 = new Path2D(), patk3 = new Path2D(), preturn = new Path2D();
fightContext.fillStyle = "rgba(255, 255, 255, 0.5)";
patk1.rect(15, 610, 180, 180);
patk2.rect(210, 610, 180, 180);
patk3.rect(405, 610, 180, 180);
preturn.rect(600, 610, 180, 180);
fightContext.fill(patk1);
fightContext.fill(patk2);
fightContext.fill(patk3);
fightContext.fill(preturn);

//Mouseover listener on attack buttons
fightCanvas.addEventListener('mousemove', function(event) {
    if (fightContext.isPointInPath(patk1, event.offsetX, event.offsetY)) {
        fightCanvas.style = "display:block; cursor:pointer";
    }else if(fightContext.isPointInPath(patk2, event.offsetX, event.offsetY)){
        fightCanvas.style = "display:block; cursor:pointer";
    }else if(fightContext.isPointInPath(patk3, event.offsetX, event.offsetY)){
        fightCanvas.style = "display:block; cursor:pointer";
    }else if(fightContext.isPointInPath(preturn, event.offsetX, event.offsetY)){
        fightCanvas.style = "display:block; cursor:pointer";
    }
    else {
        fightCanvas.style = "display:block; cursor:default";
    }
});

//Randomize winning attack 
let random = Math.floor(Math.random()*3);
console.log(random);
let attackWin = 0;

//Listen for attack button click
fightCanvas.addEventListener('click', function(event) {
  if (fightContext.isPointInPath(patk1, event.offsetX, event.offsetY)) {
    attackWin = 0;
  }else if(fightContext.isPointInPath(patk2, event.offsetX, event.offsetY)){
    attackWin = 1;
  }else if(fightContext.isPointInPath(patk3, event.offsetX, event.offsetY)){
    attackWin = 2;
  }else if(fightContext.isPointInPath(preturn, event.offsetX, event.offsetY)){
    fightCanvas.style = "display:none";
    return;
  }

  //Checks if user chose the correct attack
  if(random==attackWin){
    console.log("you've won!");
  }else{
    console.log("you've lost, try again!");
  }
});

//Loads fight scene canvas and its elements if player is on top of dog
if(dogHitbox){
    loadFightScene();
}