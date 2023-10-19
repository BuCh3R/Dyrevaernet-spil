var dog = {xPos: 200, yPos: 200};
let dogHitbox = hero.xPos>=dog.xPos && hero.xPos<=dog.xPos && hero.yPos>=dog.yPos && hero.yPos<=dog.yPos;
console.log(dogHitbox);

const attackMenu = new Image;
attackMenu.src = "img/attackmenu.png";

const attack1 = new Image;
attack1.src = "img/attack1.png";

const attack2 = new Image;
attack2.src = "img/attack2.png";

const attack3 = new Image;
attack3.src = "img/attack3.png";


function loadFightScene(){
    background.onload = () =>{
        context.drawImage(background, 0, 0, 800, 800);
        context.drawImage(attackMenu, 0, 600, 800, 200);
        context.drawImage(attack1, 10, 610, 180, 180);
        context.drawImage(attack2, 200, 610, 180, 180);
        context.drawImage(attack3, 390, 610, 180, 180);
        context.drawImage(char, 20, 400, 50, 50);
        context.drawImage(dog, 700, 200, 50, 50);

    };
}

if(dogHitbox){
    loadFightScene();
}