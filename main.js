const char = new Image; 
char.src = 'img/player.png';

const charShadow = new Image; 
charShadow.src = 'img/player-shadow.png';

const treeImg = new Image;
treeImg.src = 'img/tree.png';

const treeShadow = new Image;
treeShadow.src = 'img/tree-shadow.png';

const background = new Image;
background.src = 'img/background.png';

const playerRun1 = new Image;
playerRun1.src = 'img/player-run/player-run-1.png';

const playerRun2 = new Image;
playerRun2.src = 'img/player-run/player-run-2.png';

const playerRun3 = new Image;
playerRun3.src = 'img/player-run/player-run-3.png';

const playerRun4 = new Image;
playerRun4.src = 'img/player-run/player-run-4.png';

const playerRun5 = new Image;
playerRun5.src = 'img/player-run/player-run-5.png';

const playerRun6 = new Image;
playerRun6.src = 'img/player-run/player-run-6.png';

const playerRun7 = new Image;
playerRun7.src = 'img/player-run/player-run-7.png';

const playerRun8 = new Image;
playerRun8.src = 'img/player-run/player-run-8.png';


let hero = {xPos: 200, yPos: 200, width: 48, height: 48};
let dog = {xPos: 100, yPos: 100, width: 50, height: 50};
let tree = {xPos: 50, yPos: 200, width: 64, height: 128};
let rock = {xPos: 100, yPos: 100, width: 50, height: 50};


const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

let charArray = [playerRun1, playerRun2, playerRun3, playerRun4, playerRun5, playerRun6, playerRun7, playerRun8];
let i = 0;

function changeImage(){
  if(i<8){
    context.clearRect(0,0, context.canvas.width, context.canvas.height);
    context.drawImage(background, 0, 0, 800, 800);
    context.drawImage(treeShadow, tree.xPos, tree.yPos, tree.width, tree.height);
    context.drawImage(charShadow, hero.xPos, hero.yPos, hero.width, hero.height);
    context.drawImage(treeImg, tree.xPos, tree.yPos, tree.width, tree.height);
    context.drawImage(charArray[i], hero.xPos, hero.yPos, hero.width, hero.height);
    layer();
    i++;
  }else{
    i=0;
  }
}


let lastRender = 0;
let counter = 0;
function render(time){
  if(time - lastRender<16){
    requestAnimationFrame(render);
    return;
  }
  lastRender = time;
  counter++;
  if(counter %2 && counter != 0){
    changeImage();
  }
  if(counter >= 60){
    counter=0;
  }
  requestAnimationFrame(render);
}
requestAnimationFrame(render);