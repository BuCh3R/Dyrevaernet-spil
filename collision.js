function layer() {
    if (dog.yPos + dog.height - hero.height * 1 >= hero.yPos) {
        context.drawImage(dogImg, dog.xPos, dog.yPos, dog.width, dog.height);
    }
    if (dog_2.yPos + dog_2.height - hero.height * 1 >= hero.yPos) {
        context.drawImage(dogImg, dog_2.xPos, dog_2.yPos, dog_2.width, dog_2.height);
    }
    if (house.yPos + house.height - hero.height >= hero.yPos) {
        context.drawImage(houseImg, house.xPos, house.yPos, house.width, house.height);
    }
    if (tree.yPos + tree.height - hero.height * 1.25 >= hero.yPos) {
        context.drawImage(treeImg, tree.xPos, tree.yPos, tree.width, tree.height);
    }
    if (tree_2.yPos + tree_2.height - hero.height * 1.25 >= hero.yPos) {
        context.drawImage(treeImg, tree_2.xPos, tree_2.yPos, tree_2.width, tree_2.height);
    }
    if (rock.yPos + rock.height - hero.height * 1.25 >= hero.yPos) {
        context.drawImage(rockImg, rock.xPos, rock.yPos, rock.width, rock.height);
    }
    if (rock_2.yPos + rock_2.height - hero.height * 1.25 >= hero.yPos) {
        context.drawImage(rockImg, rock_2.xPos, rock_2.yPos, rock_2.width, rock_2.height);
    }
}

let heroHitbox;
let treeHitbox;
let tree_2Hitbox;
let rockHitbox;
let rock_2Hitbox;
let houseHitbox;

function hitbox() {
    heroHitbox = {xPos: hero.xPos + hero.width * (5 / 24), yPos: hero.yPos + hero.height * (18 / 24), width: hero.width * (14 / 24), height: hero.height * (4 / 24)}
    treeHitbox = {xPos: tree.xPos + tree.width * (12 / 32), yPos: tree.yPos + tree.height * (52 / 64), width: tree.width * (8 / 32), height: tree.height * (4 / 64)}
    tree_2Hitbox = {xPos: tree_2.xPos + tree_2.width * (12 / 32), yPos: tree_2.yPos + tree_2.height * (52 / 64), width: tree_2.width * (8 / 32), height: tree_2.height * (4 / 64)}
    rockHitbox = {xPos: rock.xPos + rock.width * (2 / 32), yPos: rock.yPos + rock.height * (16 / 32), width: rock.width * (28 / 32), height: rock.height * (16 / 32)}
    rock_2Hitbox = {xPos: rock_2.xPos + rock_2.width * (2 / 32), yPos: rock_2.yPos + rock_2.height * (16 / 32), width: rock_2.width * (28 / 32), height: rock_2.height * (16 / 32)}
    houseHitbox = {xPos: house.xPos + house.width * (2 / 48), yPos: house.yPos + house.height * (24 / 48), width: house.width * (44 / 48), height: house.height * (22 / 48)}
}

function collision(hitboxA, hitboxB) {
    if (hitboxA.xPos <= hitboxB.xPos + hitboxB.width && hitboxB.xPos <= hitboxA.xPos + hitboxA.width && hitboxA.yPos <= hitboxB.yPos + hitboxB.height && hitboxB.yPos <= hitboxA.yPos + hitboxA.height) {
        return true;
    }
    else {
        return false;
    }
}

function objectCollision(element) {
    if (collision(treeHitbox, element) || collision(tree_2Hitbox, element) || collision(rockHitbox, element) || collision(rock_2Hitbox, element) || collision(houseHitbox, element)) {
        return true;
    }
    else {
        return false;
    }
}
