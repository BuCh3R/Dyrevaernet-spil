const char = new Image; 
char.src = 'img/player.png';

const char_shadow = new Image; 
char_shadow.src = 'img/player-shadow.png';

const tree = new Image;
tree.src = 'img/tree.png';

const tree_shadow = new Image;
tree_shadow.src = 'img/tree-shadow.png';

const background = new Image;
background.src = 'img/background.png';

let xPos = 10;
let yPos = 10;
let hero = {xPos: 200, yPos: 200};
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

function layer() {
  if (200 > hero.yPos) {
      context.drawImage(tree, 50, 200, 64, 128);
  }
}

  // character // char move controls //
function update() {
  // draw new character when moving //
  canvas.width=canvas.width;
  context.drawImage(background, 0, 0, 800, 800);
  context.drawImage(tree_shadow, 50, 200, 64, 128);
  context.drawImage(char_shadow, hero.xPos, hero.yPos, 48, 48);
  context.drawImage(tree, 50, 200, 64, 128);
  context.drawImage(char, hero.xPos, hero.yPos, 48, 48);
  layer();
  requestAnimationFrame(update);
}
update();