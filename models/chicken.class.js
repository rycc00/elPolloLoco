class Chicken extends MovableObject {
    IMAGES_WALK = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];


    constructor(speed) {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALK);
        this.x = 100 + Math.random() * (canvas.width - 100);
        this.y = canvas.height - this.height / 5;
        this.width = 248 / scale / 2;
        this.height = 243 / scale / 2;
        this.speed = speed;

        this.animation();
    }

    update() {
        this.moveLeft(this.speed);
    }

    animation() {


        setInterval(() => {
            let path = this.IMAGES_WALK[this.currentImage];
            this.img = this.imageCache[path];
            this.currentImage++;
            if (this.currentImage == this.IMAGES_WALK.length) {
                this.currentImage = 0;
            }
        }, 1000 / 10)
    }

}