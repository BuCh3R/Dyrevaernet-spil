const char = new Image; 
char.src = 'img/player.png';

const tree = new Image;
tree.src = 'img/tree.png';

const house = new Image; 
house.src = 'img/house.png';

const rock = new Image;
rock.src = 'img/rock.png'; 

const dog = new Image;
dog.src = 'img/dog.png';

const background = new Image;
background.src = 'img/background.png';

let xPos = 10;
let yPos = 10;
let hero = {xPos: 200, yPos: 200};
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

  // character // char move controls //
function update(){
  // draw new character when moving //
    canvas.width=canvas.width;
    context.drawImage(background, 0, 0, 800, 800);
    context.drawImage(char, hero.xPos, hero.yPos, 48, 48);
    context.drawImage(tree, 50, 200, 64, 128);
    context.drawImage(house, 400, 400, 48, 48);
    context.drawImage(rock, 350, 200, 32, 32);
    context.drawImage(rock, 30, 150, 32, 32);
    context.drawImage(dog, 310, 200, 24, 24); 
    requestAnimationFrame(update)
}
update()