function collision(hitboxA, hitboxB) {
    if (hitboxA.xPos <= hitboxB.xPos + hitboxB.width && hitboxB.xPos <= hitboxA.xPos + hitboxA.width && hitboxA.yPos <= hitboxB.yPos + hitboxB.height && hitboxB.yPos <= hitboxA.yPos + hitboxA.height) {
        return true;
    }
    else {
        return false;
    }
}

const objects = [tree, tree_2, rock, rock_2, house]

function objectCollision(element) {
    if (collision(tree, element) || collision(tree_2, element) || collision(rock, element) || collision(rock_2, element) || collision(house, element)) {
        return true;
    }
    else {
        return false;
    }
}

// function collision(hitboxA) {
//     if (hitboxA.xPos <= hero.xPos + hero.width * (5 / 24) && hero.yPos + hero.height * (18 / 24) <= hitboxA.xPos + hitboxA.width && hitboxA.yPos <= hero.width * (14 / 24) && hero.height * (4 / 24) <= hitboxA.yPos + hitboxA.height) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// const objects = [tree, tree_2, rock, rock_2, house]

// function objectCollision() {
//     if (collision(tree) || collision(tree_2) || collision(rock) || collision(rock_2) || collision(house)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
