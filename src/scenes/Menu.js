class Menu extends Phaser.Scene{
    constructor(){
        super('menuScene');
    }

    preload(){
        // (name of graphic for later reference, path to file)
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png')
        this.load.image('starfield', './assets/starfield.png') 
        
        //audio
        this.load.audio('sfx-select', './assets/sfx-select.wav')
        this.load.audio('sfx-explosion', './assets/sfx-explosion.wav')
        this.load.audio('sfx-shot', './assets/sfx-shot.wav')
        
        this.load.spritesheet('explosion', './assets/explosion.png', {
            frameWidth: 64,
            frameHeight: 32,
            startFrame: 0,
            endFrame: 9
        })
    }


    create(){
        this.anims.create({key:'explode', frames: this.anims.generateFrameNumbers('explosion', {start:0, end:9, first:0}), frameRate: 30});


        this.add.text(20, 20, "Rocket Patrol Menu")
        this.scene.start("playScene")
    }
}