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
