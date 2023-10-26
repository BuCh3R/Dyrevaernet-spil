let keyDownW;
let keyDownA;
let keyDownS;
let keyDownD;
let reverse;

document.onkeydown = function(event) {
    if (event.key == "w" || event.key == "W" || event.key == "ArrowUp") {
        keyDownW = true;
    }
    if (event.key == "a" || event.key == "A" || event.key == "ArrowLeft") {
        keyDownA = true;
        reverse = true;
    }
    if (event.key == "s" || event.key == "S" || event.key == "ArrowDown") {
        keyDownS = true;
    }
    if (event.key == "d" || event.key == "D" || event.key == "ArrowRight") {
        keyDownD = true;
        reverse = false;
   }
}

document.onkeyup = function(event) {
    if (event.key == "w" || event.key == "W" || event.key == "ArrowUp") {
        keyDownW = false;
    }
    if (event.key == "a" || event.key == "A" || event.key == "ArrowLeft") {
        keyDownA = false;
    }
    if (event.key == "s" || event.key == "S" || event.key == "ArrowDown") {
        keyDownS = false;
    }
    if (event.key == "d" || event.key == "D" || event.key == "ArrowRight") {
        keyDownD = false;
    }
}

setInterval(function() {
    if (keyDownW && heroHitbox.yPos > 0) {
        hero.yPos -= 1;
        hitbox();
        if (objectCollision(heroHitbox)) {
            hero.yPos += 1;
        }
    }
    if (keyDownA && heroHitbox.xPos > 0) {
        hero.xPos -= 1;
        hitbox();
        if (objectCollision(heroHitbox)) {
            hero.xPos += 1;
        }
    }
    if (keyDownS && heroHitbox.yPos < canvas.width - heroHitbox.width) {
        hero.yPos += 1;
        hitbox();
        if (objectCollision(heroHitbox)) {
            hero.yPos -= 1;
        }
    }
    if (keyDownD && heroHitbox.xPos < canvas.width - heroHitbox.width) {
        hero.xPos += 1;
        hitbox();
        if (objectCollision(heroHitbox)) {
            hero.xPos -= 1;
        }
    }
    hitbox();
})
