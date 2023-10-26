// let dogHitbox = hero.xPos>=dog.xPos && hero.xPos<=dog.xPos && hero.yPos>=dog.yPos && hero.yPos<=dog.yPos;
const grassBackground = new Image;
grassBackground.src = "img/fight/grass-fight.png";

const attack1 = new Image;
attack1.src = "img/fight/leash-button.png";

const attack2 = new Image;
attack2.src = "img/fight/ball-button.png";

const attack3 = new Image;
attack3.src = "img/fight/treat-button.png";

const returnBtn = new Image;
returnBtn.src = "img/fight/back-button.png";

const playerR = new Image;
playerR.src = "img/fight/player-fight.png";

const dogR = new Image;
dogR.src = "img/fight/dog-fight.png";

const playerRShadow = new Image;
playerRShadow.src = "img/fight/player-fight-shadow.png";

const dogRShadow = new Image;
dogRShadow.src = "img/fight/dog-fight-shadow.png";

const dogLeash1 = new Image;
dogLeash1.src = 'img/fight/dog-fight-leash/dog-fight-leash-1.png';
const dogLeash2 = new Image;
dogLeash2.src = 'img/fight/dog-fight-leash/dog-fight-leash-2.png';
const dogLeash3 = new Image;
dogLeash3.src = 'img/fight/dog-fight-leash/dog-fight-leash-3.png';
const dogLeash4 = new Image;
dogLeash4.src = 'img/fight/dog-fight-leash/dog-fight-leash-4.png';
const dogLeash5 = new Image;
dogLeash5.src = 'img/fight/dog-fight-leash/dog-fight-leash-5.png';
const dogLeash6 = new Image;
dogLeash6.src = 'img/fight/dog-fight-leash/dog-fight-leash-6.png';
const dogLeash7 = new Image;
dogLeash7.src = 'img/fight/dog-fight-leash/dog-fight-leash-7.png';
const dogLeash8 = new Image;
dogLeash8.src = 'img/fight/dog-fight-leash/dog-fight-leash-8.png';

const dogBall1 = new Image;
dogBall1.src = 'img/fight/dog-fight-ball/dog-fight-ball-1.png';
const dogBall2 = new Image;
dogBall2.src = 'img/fight/dog-fight-ball/dog-fight-ball-2.png';
const dogBall3 = new Image;
dogBall3.src = 'img/fight/dog-fight-ball/dog-fight-ball-3.png';
const dogBall4 = new Image;
dogBall4.src = 'img/fight/dog-fight-ball/dog-fight-ball-4.png';
const dogBall5 = new Image;
dogBall5.src = 'img/fight/dog-fight-ball/dog-fight-ball-5.png';
const dogBall6 = new Image;
dogBall6.src = 'img/fight/dog-fight-ball/dog-fight-ball-6.png';
const dogBall7 = new Image;
dogBall7.src = 'img/fight/dog-fight-ball/dog-fight-ball-7.png';
const dogBall8 = new Image;
dogBall8.src = 'img/fight/dog-fight-ball/dog-fight-ball-8.png';

const dogTreat1 = new Image;
dogTreat1.src = 'img/fight/dog-fight-treat/dog-fight-treat-1.png';
const dogTreat2 = new Image;
dogTreat2.src = 'img/fight/dog-fight-treat/dog-fight-treat-2.png';
const dogTreat3 = new Image;
dogTreat3.src = 'img/fight/dog-fight-treat/dog-fight-treat-3.png';
const dogTreat4 = new Image;
dogTreat4.src = 'img/fight/dog-fight-treat/dog-fight-treat-4.png';
const dogTreat5 = new Image;
dogTreat5.src = 'img/fight/dog-fight-treat/dog-fight-treat-5.png';
const dogTreat6 = new Image;
dogTreat6.src = 'img/fight/dog-fight-treat/dog-fight-treat-6.png';
const dogTreat7 = new Image;
dogTreat7.src = 'img/fight/dog-fight-treat/dog-fight-treat-7.png';
const dogTreat8 = new Image;
dogTreat8.src = 'img/fight/dog-fight-treat/dog-fight-treat-8.png';

const dogAngry1 = new Image;
dogAngry1.src = 'img/fight/dog-fight-angry/dog-fight-angry-1.png';
const dogAngry2 = new Image;
dogAngry2.src = 'img/fight/dog-fight-angry/dog-fight-angry-2.png';
const dogAngry3 = new Image;
dogAngry3.src = 'img/fight/dog-fight-angry/dog-fight-angry-3.png';
const dogAngry4 = new Image;
dogAngry4.src = 'img/fight/dog-fight-angry/dog-fight-angry-4.png';
const dogAngry5 = new Image;
dogAngry5.src = 'img/fight/dog-fight-angry/dog-fight-angry-5.png';
const dogAngry6 = new Image;
dogAngry6.src = 'img/fight/dog-fight-angry/dog-fight-angry-6.png';
const dogAngry7 = new Image;
dogAngry7.src = 'img/fight/dog-fight-angry/dog-fight-angry-7.png';
const dogAngry8 = new Image;
dogAngry8.src = 'img/fight/dog-fight-angry/dog-fight-angry-8.png';

const fightCanvas = document.getElementById("fightCanvas");
const fightContext = fightCanvas.getContext("2d");

//Draw fight scene elements
function loadFightScene(){
  grassBackground.onload = () =>{
        fightCanvas.style = "display:block";
        fightContext.drawImage(grassBackground, 0, 0, 800, 800);
        fightContext.drawImage(playerRShadow, 10, 310, 240, 240);
        fightContext.drawImage(dogRShadow, 500, 40, 240, 240);
        fightContext.drawImage(playerR, 10, 310, 240, 240);
        fightContext.fillStyle = "#212121";
        fightContext.fillRect(0, 600, 800, 200);
        fightContext.drawImage(attack1, 15, 610, 180, 180);
        fightContext.drawImage(attack2, 210, 610, 180, 180);
        fightContext.drawImage(attack3, 405, 610, 180, 180);
        fightContext.drawImage(returnBtn, 600, 610, 180, 180);
        fightContext.drawImage(dogR, 500, 40, 240, 240);
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
let attackWin;

let dogLeash = [dogLeash1, dogLeash2, dogLeash3, dogLeash4, dogLeash5, dogLeash6, dogLeash7, dogLeash8];
let dogBall = [dogBall1, dogBall2, dogBall3, dogBall4, dogBall5, dogBall6, dogBall7, dogBall8];
let dogTreat = [dogTreat1, dogTreat2, dogTreat3, dogTreat4, dogTreat5, dogTreat6, dogTreat7, dogTreat8];
let dogAngry = [dogAngry1, dogAngry2, dogAngry3, dogAngry4, dogAngry5, dogAngry6, dogAngry7, dogAngry8];


function dogAnimtion(dogSprites, i){
  fightContext.clearRect(0,0, fightContext.canvas.width, fightContext.canvas.height);
  fightContext.drawImage(grassBackground, 0, 0, 800, 800);
  fightContext.drawImage(playerRShadow, 10, 310, 240, 240);
  fightContext.drawImage(dogRShadow, 500, 40, 240, 240);
  fightContext.drawImage(playerR, 10, 310, 240, 240);
  fightContext.fillStyle = "#212121";
  fightContext.fillRect(0, 600, 800, 200);
  fightContext.drawImage(attack1, 15, 610, 180, 180);
  fightContext.drawImage(attack2, 210, 610, 180, 180);
  fightContext.drawImage(attack3, 405, 610, 180, 180);
  fightContext.drawImage(returnBtn, 600, 610, 180, 180);
  fightContext.drawImage(dogSprites[i], 500, 40, 240, 240);
}

function leaveScene(){
  fightCanvas.style = "display:none";
}

//Listen for attack button click
fightCanvas.addEventListener('click', function(event) {
  if (fightContext.isPointInPath(patk1, event.offsetX, event.offsetY)) {
    attackWin = 0;
  }else if(fightContext.isPointInPath(patk2, event.offsetX, event.offsetY)){
    attackWin = 1;
  }else if(fightContext.isPointInPath(patk3, event.offsetX, event.offsetY)){
    attackWin = 2;
  }else if(fightContext.isPointInPath(preturn, event.offsetX, event.offsetY)){
    leaveScene();
    return;
  }else{

  }

  //Checks if user chose the correct attack
  if(random==attackWin){
    if(attackWin==0){
      for (var x = 0; x<dogLeash.length; x++) {
        setTimeout(function(x) {    
          dogAnimtion(dogLeash, x);
        }, x * 100, x);
      }
      setTimeout(leaveScene, 1000);
    }else if(attackWin==1){
      for (var x = 0; x<dogBall.length; x++) {
        setTimeout(function(x) {    
          dogAnimtion(dogBall, x);
        }, x * 100, x);
      }
      setTimeout(leaveScene, 1000);
    }else if(attackWin==2){
      for (var x = 0; x<dogTreat.length; x++) {
        setTimeout(function(x) {    
          dogAnimtion(dogTreat, x);
        }, x * 100, x);
      }
      setTimeout(leaveScene, 1000);
    }
  }else{
    for (var x = 0; x<dogAngry.length; x++) {
      setTimeout(function(x) {    
        dogAnimtion(dogAngry, x);
      }, x * 100, x);
    }
  }
});
// loadFightScene();
//Loads fight scene canvas and its elements if player is on top of dog
// if(dogHitbox){
// }