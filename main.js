
const char = new Image; 
char.src = 'img/player.png';

const tree = new Image;
tree.src = 'img/tree.png';

const background = new Image;
background.src = 'img/background-img.png';

let xPos = 10;
let yPos = 10;
var hero = {xPos: 200, yPos: 200};
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");


char.onload = () => {
    context.drawImage(background, 0, 0, 800, 800);
    context.drawImage(char, hero.xPos, hero.yPos, 50, 50);
    context.drawImage(tree, 50, 200, 64, 128);
  char.onload = null;
};

  // character // char move controls //
  function move(event){

    if(event.key==="ArrowLeft"){
    hero.xPos-=15;
    }
    if(event.key==="ArrowRight") {
    hero.xPos+=15;
    }
    if (event.key==="ArrowUp") {
    hero.yPos-=15;
    }
    if (event.key==="ArrowDown"){
    hero.yPos+=15;
    }
       
  // draw new character when moving //
    canvas.width=canvas.width;
    context.drawImage(background, 0, 0, 800, 800);
    context.drawImage(char, hero.xPos, hero.yPos, 50, 50);
    context.drawImage(tree, 50, 200, 64, 128);

  }
document.onkeydown = move;