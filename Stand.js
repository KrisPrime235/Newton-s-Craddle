class Stand{
    constructor(x, y, width, height){
        var options = {
            'isStatic': true,
        }
        this.stand = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        World.add(world, this.stand);
    }
    display(){
        push();
        rectMode(CENTER);
        fill(33,255,0);
        rect(this.x, this.y, this.width, this.height);
        pop();
    }
}