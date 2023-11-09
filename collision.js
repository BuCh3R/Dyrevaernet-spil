function layer() {
    if (dog1.yPos + dog1.height - hero.height * 1 >= hero.yPos) {
        context.drawImage(dogImg, dog1.xPos, dog1.yPos, dog1.width, dog1.height);
    }
    if (dog2.yPos + dog2.height - hero.height * 1 >= hero.yPos) {
        context.drawImage(dogImg, dog2.xPos, dog2.yPos, dog2.width, dog2.height);
    }
    if (house.yPos + house.height - hero.height >= hero.yPos) {
        context.drawImage(houseImg, house.xPos, house.yPos, house.width, house.height);
    }
    if (treeList[0].yPos + treeList[0].height - hero.height * 1.25 >= hero.yPos) {
        context.drawImage(treeImg, treeList[0].xPos, treeList[0].yPos, treeList[0].width, treeList[0].height);
    }
    if (treeList[1].yPos + treeList[1].height - hero.height * 1.25 >= hero.yPos) {
        context.drawImage(treeImg, treeList[1].xPos, treeList[1].yPos, treeList[1].width, treeList[1].height);
    }
    if (treeList[2].yPos + treeList[2].height - hero.height * 1.25 >= hero.yPos) {
        context.drawImage(treeImg, treeList[2].xPos, treeList[2].yPos, treeList[2].width, treeList[2].height);
    }
    if (treeList[3].yPos + treeList[3].height - hero.height * 1.25 >= hero.yPos) {
        context.drawImage(treeImg, treeList[3].xPos, treeList[3].yPos, treeList[3].width, treeList[3].height);
    }
    if (treeList[4].yPos + treeList[4].height - hero.height * 1.25 >= hero.yPos) {
        context.drawImage(treeImg, treeList[4].xPos, treeList[4].yPos, treeList[4].width, treeList[4].height);
    }
    if (rockList[0].yPos + rockList[0].height - hero.height * 1.25 >= hero.yPos) {
        context.drawImage(rockImg, rockList[0].xPos, rockList[0].yPos, rockList[0].width, rockList[0].height);
    }
    if (rockList[1].yPos + rockList[1].height - hero.height * 1.25 >= hero.yPos) {
        context.drawImage(rockImg, rockList[1].xPos, rockList[1].yPos, rockList[1].width, rockList[1].height);
    }
    if (rockList[2].yPos + rockList[2].height - hero.height * 1.25 >= hero.yPos) {
        context.drawImage(rockImg, rockList[2].xPos, rockList[2].yPos, rockList[2].width, rockList[2].height);
    }
    if (rockList[3].yPos + rockList[3].height - hero.height * 1.25 >= hero.yPos) {
        context.drawImage(rockImg, rockList[3].xPos, rockList[3].yPos, rockList[3].width, rockList[3].height);
    }
    if (rockList[4].yPos + rockList[4].height - hero.height * 1.25 >= hero.yPos) {
        context.drawImage(rockImg, rockList[4].xPos, rockList[4].yPos, rockList[4].width, rockList[4].height);
    }
}

let heroHitbox;
let dog1Hitbox;
let dog2Hitbox
let houseHitbox;

function hitbox() {
    heroHitbox = {xPos: hero.xPos + hero.width * (5 / 24), yPos: hero.yPos + hero.height * (18 / 24), width: hero.width * (14 / 24), height: hero.height * (4 / 24)}
    dog1Hitbox = {xPos: dog1.xPos + dog1.width * (5 / 24), yPos: dog1.yPos + dog1.height * (18 / 24), width: dog1.width * (14 / 24), height: dog1.height * (4 / 24)}
    dog2Hitbox = {xPos: dog2.xPos + dog2.width * (5 / 24), yPos: dog2.yPos + dog2.height * (18 / 24), width: dog2.width * (14 / 24), height: dog2.height * (4 / 24)}
    houseHitbox = {xPos: house.xPos + house.width * (2 / 48), yPos: house.yPos + house.height * (24 / 48), width: house.width * (44 / 48), height: house.height * (22 / 48)}
    returnDogHitbox = {xPos: house.xPos + house.width * (2 / 48), yPos: house.yPos + house.height * (24 / 48), width: house.width * (44 / 48), height: house.height * (34 / 48)}
}

function collision(hitboxA, hitboxB) {
    if (hitboxA.xPos <= hitboxB.xPos + hitboxB.width && hitboxB.xPos <= hitboxA.xPos + hitboxA.width && hitboxA.yPos <= hitboxB.yPos + hitboxB.height && hitboxB.yPos <= hitboxA.yPos + hitboxA.height) {
        return true;
    }
}

function entityCollision(element) {
    if (collision(dog1Hitbox, element) || collision(dog2Hitbox, element)) {
        return true;
    }
}

function objectCollision(element) {
    if (collision(houseHitbox, element) || collision(treeHitboxList[0], element) || collision(treeHitboxList[1], element) || collision(treeHitboxList[2], element) || collision(treeHitboxList[3], element) || collision(treeHitboxList[4], element) || collision(rockHitboxList[0], element) || collision(rockHitboxList[1], element) || collision(rockHitboxList[2], element) || collision(rockHitboxList[3], element) || collision(rockHitboxList[4], element)) {
        return true;
    }
}

// function anyCollision(element) {
//     if (collision(tree, element) || collision(tree_2, element) || collision(rock, element) || collision(rock_2, element) || collision(house, element)) {
//         return true;
//     }
// }
