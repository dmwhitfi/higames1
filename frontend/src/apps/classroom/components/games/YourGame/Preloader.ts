import Phaser from 'phaser';

export default class Preloader extends Phaser.Scene {
    constructor() {
        super('Preloader');
    }

    preload() {
        // Load the main logo
        this.load.image('main_logo', '/Logo_1_Main.png');
        
        // Add your game assets here
    }

    create() {
        // Start your game scene
        this.scene.start('YourGameMain');
    }
}
