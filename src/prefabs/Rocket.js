// Rocket Prefab
class Rocket extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        scene.add.existing(this); // adding rocket manually
        this.isFiring = false;  
        this.moveSpeed = 2;
        this.sfxShot = scene.sound.add('sfx-shot');
    }

    update(){
        // checks to makes sure isn't firing before allowing movement
        // ui stuff is to make sure can't move beyond borders
        if (!this.isFiring){
            if(keyLEFT.isDown && this.x >= borderUISize + this.width){
                this.x -= this.moveSpeed;
            } else if(keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width){
                this.x += this.moveSpeed;
            }
        }

        // just down is for firing once
        // waits for player to release key before regiersting new input
        if (Phaser.Input.Keyboard.JustDown(keyFIRE) && !this.isFiring){
            this.isFiring = true;
            this.sfxShot.play();
        }

        // resets rocket
        if(this.isFiring && this.y >= borderUISize*3 + borderPadding){
            this.y -= this.moveSpeed;
        }

        if(this.y <= borderUISize*3 + borderPadding){
            this.isFiring = false;
            this.y = game.config.height - borderUISize - borderPadding;
        }
    }

    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
    
}