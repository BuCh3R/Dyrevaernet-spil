let keyDownW;
let keyDownA;
let keyDownS;
let keyDownD;
let reverse;

document.onkeydown = function(event) {
    if (event.key == "w") {
        keyDownW = true;
    }
    if (event.key == "a") {
        keyDownA = true;
        reverse = true;
    }
    if (event.key == "s") {
        keyDownS = true;
    }
    if (event.key == "d") {
        keyDownD = true;
        reverse = false;
   }
}

document.onkeyup = function(event) {
    if (event.key == "w") {
        keyDownW = false;
    }
    if (event.key == "a") {
        keyDownA = false;
    }
    if (event.key == "s") {
        keyDownS = false;
    }
    if (event.key == "d") {
        keyDownD = false;
    }
}

setInterval(function() {
    if (keyDownW && heroHitbox.yPos > 0) {
        hero.yPos -= 1;
        if (objectCollision(heroHitbox)) {
            hero.yPos += 1;
        }
    }
    if (keyDownA && heroHitbox.xPos > 0) {
        hero.xPos -= 1;
        if (objectCollision(heroHitbox)) {
            hero.xPos += 1;
        }
    }
    if (keyDownS && heroHitbox.yPos < canvas.width - heroHitbox.width) {
        hero.yPos += 1;
        if (objectCollision(heroHitbox)) {
            hero.yPos -= 1;
        }
    }
    if (keyDownD && heroHitbox.xPos < canvas.width - heroHitbox.width) {
        hero.xPos += 1;
        if (objectCollision(heroHitbox)) {
            hero.xPos -= 1;
        }
    }
    hitbox();
})
