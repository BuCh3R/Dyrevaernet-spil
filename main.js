function startGame(){
  document.getElementById("menuId").style = "display:none";
  canvas.style = "display:block";
}

function viewInfo(){
  document.getElementById("menuId").style = "display:none";
  document.getElementById("infodiv").style = "display:block";
}

function showMenu(){
  canvas.style = "display:none";
  document.getElementById("infodiv").style = "display:none";
  document.getElementById("menuId").style = "display:block";
}
let gameOver = false;
function gameOverBtn(){
  document.getElementById("gameOver").style = "display:none";
  document.getElementById("menuId").style = "display:block";
  canvas.style = "display:none";
  gameOver = true;
}
const char = new Image; 
char.src = 'img/player.png';

const charR = new Image; 
charR.src = 'img/player-r.png';

const charCarry = new Image; 
charCarry.src = 'img/player-carry.png';

const charCarryR = new Image; 
charCarryR.src = 'img/player-carry-r.png';

const charShadow = new Image; 
charShadow.src = 'img/player-shadow.png';

const dogImg = new Image;
dogImg.src = 'img/dog.png';

const dogShadow = new Image;
dogShadow.src = 'img/dog-shadow.png';

const treeImg = new Image;
treeImg.src = 'img/tree.png';

const treeShadow = new Image;
treeShadow.src = 'img/tree-shadow.png';

const rockImg = new Image;
rockImg.src = 'img/rock.png'; 

const rockShadow = new Image;
rockShadow.src = 'img/rock-shadow.png'; 

const houseImg = new Image; 
houseImg.src = 'img/house.png';

const houseShadow = new Image; 
houseShadow.src = 'img/house-shadow.png';

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

const playerRun1R = new Image;
playerRun1R.src = 'img/player-run/player-run-1-r.png';

const playerRun2R = new Image;
playerRun2R.src = 'img/player-run/player-run-2-r.png';

const playerRun3R = new Image;
playerRun3R.src = 'img/player-run/player-run-3-r.png';

const playerRun4R = new Image;
playerRun4R.src = 'img/player-run/player-run-4-r.png';

const playerRun5R = new Image;
playerRun5R.src = 'img/player-run/player-run-5-r.png';

const playerRun6R = new Image;
playerRun6R.src = 'img/player-run/player-run-6-r.png';

const playerRun7R = new Image;
playerRun7R.src = 'img/player-run/player-run-7-r.png';

const playerRun8R = new Image;
playerRun8R.src = 'img/player-run/player-run-8-r.png';

const playerCarry1 = new Image; 
playerCarry1.src = 'img/player-carry/player-carry-1.png';

const playerCarry2 = new Image; 
playerCarry2.src = 'img/player-carry/player-carry-2.png';

const playerCarry3 = new Image; 
playerCarry3.src = 'img/player-carry/player-carry-3.png';

const playerCarry4 = new Image; 
playerCarry4.src = 'img/player-carry/player-carry-4.png';

const playerCarry5 = new Image; 
playerCarry5.src = 'img/player-carry/player-carry-5.png';

const playerCarry6 = new Image; 
playerCarry6.src = 'img/player-carry/player-carry-6.png';

const playerCarry7 = new Image; 
playerCarry7.src = 'img/player-carry/player-carry-7.png';

const playerCarry8 = new Image; 
playerCarry8.src = 'img/player-carry/player-carry-8.png';

const playerCarry1R = new Image; 
playerCarry1R.src = 'img/player-carry/player-carry-1-r.png';

const playerCarry2R = new Image; 
playerCarry2R.src = 'img/player-carry/player-carry-2-r.png';

const playerCarry3R = new Image; 
playerCarry3R.src = 'img/player-carry/player-carry-3-r.png';

const playerCarry4R = new Image; 
playerCarry4R.src = 'img/player-carry/player-carry-4-r.png';

const playerCarry5R = new Image; 
playerCarry5R.src = 'img/player-carry/player-carry-5-r.png';

const playerCarry6R = new Image; 
playerCarry6R.src = 'img/player-carry/player-carry-6-r.png';

const playerCarry7R = new Image; 
playerCarry7R.src = 'img/player-carry/player-carry-7-r.png';

const playerCarry8R = new Image; 
playerCarry8R.src = 'img/player-carry/player-carry-8-r.png';

let hero = {xPos: 376, yPos: 376, width: 48, height: 48};
let dog1 = {xPos: 100, yPos: 400, width: 48, height: 48};
let dog2 = {xPos: 650, yPos: 600, width: 48, height: 48};
let house = {xPos: 352, yPos: 150, width: 96, height: 96};

let hasDog;

const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

let treeHitboxList = [];
function treeHitbox(x, y, w, h) {
  list = {xPos: x, yPos: y, width: w, height: h};
  treeHitboxList.push(list);
}

let treeList = [];
function addTree(x, y, w, h){
  list = {xPos: x, yPos: y, width: w, height: h};
  treeList.push(list);
}
addTree(150, 100, 64, 128);
addTree(650, 250, 64, 128);
addTree(450, 600, 64, 128);
addTree(100, 550, 64, 128);
addTree(200, 300, 64, 128);
function drawAllTrees(){
  for(var i = 0; i < treeList.length; i++){
    context.drawImage(treeShadow, treeList[i].xPos, treeList[i].yPos, treeList[i].width, treeList[i].height);
    context.drawImage(treeImg, treeList[i].xPos, treeList[i].yPos, treeList[i].width, treeList[i].height);
    treeHitbox(treeList[i].xPos + treeList[i].width * (12 / 32), treeList[i].yPos + treeList[i].height * (52 / 64), treeList[i].width * (8 / 32), treeList[i].height * (4 / 64));
    layer(treeList[i]);
  }
}

let rockHitboxList = [];
function rockHitbox(x, y, w, h) {
  list = {xPos: x, yPos: y, width: w, height: h};
  rockHitboxList.push(list);
}

let rockList = [];
function addRock(x, y, w, h){
  list = {xPos: x, yPos: y, width: w, height: h};
  rockList.push(list);
}
addRock(550, 50, 64, 64);
addRock(50, 300, 64, 64);
addRock(550, 450, 64, 64);
addRock(250, 500, 64, 64);
addRock(500, 300, 64, 64);
function drawAllRocks(){
  for(var i = 0; i < rockList.length; i++){
    context.drawImage(rockShadow, rockList[i].xPos, rockList[i].yPos, rockList[i].width, rockList[i].height);
    context.drawImage(rockImg, rockList[i].xPos, rockList[i].yPos, rockList[i].width, rockList[i].height);
    rockHitbox(rockList[i].xPos + rockList[i].width * (2 / 32), rockList[i].yPos + rockList[i].height * (16 / 32), rockList[i].width * (28 / 32), rockList[i].height * (16 / 32));
    layer(rockList[i]);
  }
}

let charArray = [playerRun1, playerRun1, playerRun2, playerRun2, playerRun3, playerRun3, playerRun4, playerRun4, playerRun5, playerRun5, playerRun6, playerRun6, playerRun7, playerRun7, playerRun8, playerRun8];
let charArrayR = [playerRun1R, playerRun1R, playerRun2R, playerRun2R, playerRun3R, playerRun3R, playerRun4R, playerRun4R, playerRun5R, playerRun5R, playerRun6R, playerRun6R, playerRun7R, playerRun7R, playerRun8R, playerRun8R];
let charCarryArray = [playerCarry1, playerCarry1, playerCarry2, playerCarry2, playerCarry3, playerCarry3, playerCarry4, playerCarry4, playerCarry5, playerCarry5, playerCarry6, playerCarry6, playerCarry7, playerCarry7, playerCarry8, playerCarry8];
let charCarryArrayR = [playerCarry1R, playerCarry1R, playerCarry2R, playerCarry2R, playerCarry3R, playerCarry3R, playerCarry4R, playerCarry4R, playerCarry5R, playerCarry5R, playerCarry6R, playerCarry6R, playerCarry7R, playerCarry7R, playerCarry8R, playerCarry8R];

function changeImage(){
  context.clearRect(0,0, context.canvas.width, context.canvas.height);
  context.drawImage(background, 0, 0, 800, 800);
  context.drawImage(houseShadow, house.xPos, house.yPos, house.width, house.height);
  context.drawImage(dogShadow, dog1.xPos, dog1.yPos, dog1.width, dog1.height);
  context.drawImage(dogShadow, dog2.xPos, dog2.yPos, dog2.width, dog2.height);
  context.drawImage(charShadow, hero.xPos, hero.yPos, hero.width, hero.height);
  drawAllTrees();
  drawAllRocks();
  context.drawImage(houseImg, house.xPos, house.yPos, house.width, house.height);
  context.drawImage(dogImg, dog1.xPos, dog1.yPos, dog1.width, dog1.height);
  context.drawImage(dogImg, dog2.xPos, dog2.yPos, dog2.width, dog2.height);
  hitbox();
  fight();
  returnDog();
  if ((keyDownA || keyDownD || keyDownS || keyDownW) && !(keyDownA === keyDownD && keyDownS === keyDownW)) {
    if (reverse && hasDog) {
      context.drawImage(charCarryArrayR[i], hero.xPos, hero.yPos, hero.width, hero.height);
    }
    else if (hasDog) {
      context.drawImage(charCarryArray[i], hero.xPos, hero.yPos, hero.width, hero.height);
    }
    else if (reverse) {
      context.drawImage(charArrayR[i], hero.xPos, hero.yPos, hero.width, hero.height);
    }
    else {
      context.drawImage(charArray[i], hero.xPos, hero.yPos, hero.width, hero.height);
    }
  }
  else {
    if (reverse && hasDog) {
      context.drawImage(charCarryR, hero.xPos, hero.yPos, hero.width, hero.height);
    }
    else if (hasDog) {
      context.drawImage(charCarry, hero.xPos, hero.yPos, hero.width, hero.height);
    }
    else if (reverse) {
      context.drawImage(charR, hero.xPos, hero.yPos, hero.width, hero.height);
    }
    else {
      context.drawImage(char, hero.xPos, hero.yPos, hero.width, hero.height);
    }
    i = 0;
  }
  layer();
  if (i < charArray.length - 1) {
    i++;
  }
  else {
    i = 0;
  }
}

let lastRender = 0;
let counter = 0;
let dogCounter = 0;

function render(time){
  if(time - lastRender<16){
    requestAnimationFrame(render);
    if(dogCounter >= 2){
      if(!gameOver){
        document.getElementById("gameOver").style = "display:block";
      }
    }
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

function fight() {
  if (entityCollision(heroHitbox) && !hasDog) {
    if (collision(dog1Hitbox, heroHitbox)) {
      dog1 = {xPos: -100, yPos: -100, width: 48, height: 48};
    }
    if (collision(dog2Hitbox, heroHitbox)) {
      dog2 = {xPos: -100, yPos: -100, width: 48, height: 48};
    }
    loadFightScene();
  }
}

function returnDog() {
  if (collision(returnDogHitbox, heroHitbox) && hasDog) {
    hasDog = false;
    dogCounter++;
  }
}
