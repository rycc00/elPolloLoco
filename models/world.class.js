class World {
    char = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    clouds = [
        new Cloud(0.2),
        new Cloud(0.4),
        new Cloud(0.6),
    ]
    bgObjects = [
        new backgroundObject('img/5_background/layers/air.png'),
        new backgroundObject('img/5_background/layers/3_third_layer/1.png'),
        new backgroundObject('img/5_background/layers/2_second_layer/1.png'),
        new backgroundObject('img/5_background/layers/1_first_layer/1.png'),


    ]

    draw() {
        this.addObjectsToWorld(this.bgObjects);
        this.addObjectsToWorld(this.clouds);
        this.addObjectToWorld(this.char);
        this.addObjectsToWorld(this.enemies);
    }

    update() {
        this.draw();
        this.clouds.forEach(obj => {
            obj.update();
        });
    }

    addObjectsToWorld(objects) {
        objects.forEach(obj => {
            ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
        });
    }

    addObjectToWorld(object) {
        ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
    }
}