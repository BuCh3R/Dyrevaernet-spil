const char = new Image; 
char.src = 'img/player.png';

const charR = new Image; 
charR.src = 'img/player-r.png';

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

let hero = {xPos: 376, yPos: 376, width: 48, height: 48};
let dog = {xPos: 600, yPos: 700, width: 48, height: 48};
let dog_2 = {xPos: 200, yPos: 100, width: 48, height: 48};
let tree = {xPos: 50, yPos: 300, width: 64, height: 128};
let tree_2 = {xPos: 600, yPos: 200, width: 64, height: 128};
let rock = {xPos: 720, yPos: 450, width: 64, height: 64};
let rock_2 = {xPos: 30, yPos: 150, width: 64, height: 64};
let house = {xPos: 352, yPos: 150, width: 96, height: 96};

const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

let charArray = [playerRun1, playerRun1, playerRun2, playerRun2, playerRun3, playerRun3, playerRun4, playerRun4, playerRun5, playerRun5, playerRun6, playerRun6, playerRun7, playerRun7, playerRun8, playerRun8];
let charArrayR = [playerRun1R, playerRun1R, playerRun2R, playerRun2R, playerRun3R, playerRun3R, playerRun4R, playerRun4R, playerRun5R, playerRun5R, playerRun6R, playerRun6R, playerRun7R, playerRun7R, playerRun8R, playerRun8R];

function changeImage(){
  context.clearRect(0,0, context.canvas.width, context.canvas.height);
  context.drawImage(background, 0, 0, 800, 800);
  context.drawImage(houseShadow, house.xPos, house.yPos, house.width, house.height);
  context.drawImage(treeShadow, tree.xPos, tree.yPos, tree.width, tree.height);
  context.drawImage(treeShadow, tree_2.xPos, tree_2.yPos, tree_2.width, tree_2.height);
  context.drawImage(rockShadow, rock.xPos, rock.yPos, rock.width, rock.height);
  context.drawImage(rockShadow, rock_2.xPos, rock_2.yPos, rock_2.width, rock_2.height);
  context.drawImage(dogShadow, dog.xPos, dog.yPos, dog.width, dog.height);
  context.drawImage(dogShadow, dog_2.xPos, dog_2.yPos, dog_2.width, dog_2.height);
  context.drawImage(charShadow, hero.xPos, hero.yPos, hero.width, hero.height);
  context.drawImage(houseImg, house.xPos, house.yPos, house.width, house.height);
  context.drawImage(treeImg, tree.xPos, tree.yPos, tree.width, tree.height);
  context.drawImage(treeImg, tree_2.xPos, tree_2.yPos, tree_2.width, tree_2.height);
  context.drawImage(rockImg, rock.xPos, rock.yPos, rock.width, rock.height);
  context.drawImage(rockImg, rock_2.xPos, rock_2.yPos, rock_2.width, rock_2.height);
  context.drawImage(dogImg, dog.xPos, dog.yPos, dog.width, dog.height);
  context.drawImage(dogImg, dog_2.xPos, dog_2.yPos, dog_2.width, dog_2.height);
  hitbox();
  if ((keyDownA || keyDownD || keyDownS || keyDownW) && !(keyDownA === keyDownD && keyDownS === keyDownW)) {
    if (reverse) {
      context.drawImage(charArrayR[i], hero.xPos, hero.yPos, hero.width, hero.height);
    }
    else {
      context.drawImage(charArray[i], hero.xPos, hero.yPos, hero.width, hero.height);
    }
  }
  else {
    if (reverse) {
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
