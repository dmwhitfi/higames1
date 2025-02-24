import Phaser from 'phaser';

export default class YourGameMain extends Phaser.Scene {
    constructor() {
        super('YourGameMain');
    }

    init() {
        // Get game ID from registry
        const gameId = this.game.registry.get('gameId');
        console.log('Game ID from registry:', gameId);
    }

    create() {
        // Set white background
        const bg = this.add.rectangle(0, 0, 1280, 720, 0xffffff);
        bg.setOrigin(0, 0);

        // Add main logo in top right
        const mainLogo = this.add.image(1275, 5, "main_logo");
        mainLogo.setOrigin(1, 0);
        mainLogo.setScale(1.0);

        // Add your game code here
    }
}
