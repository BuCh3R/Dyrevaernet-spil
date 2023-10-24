function layer() {
    if (tree.yPos + tree.height - hero.height * 1.25 >= hero.yPos) {
        context.drawImage(treeImg, tree.xPos, tree.yPos, tree.width, tree.height);
    }
}
