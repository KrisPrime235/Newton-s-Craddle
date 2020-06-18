class Bob{
    constructor(x, y,_radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Matter.Bodies.circle(x, y, _radius, options);
        this.x = x;
        this.y = y;
        this.radius = this.radius;
        
        World.add(world, this.body);
      }
      display(){
        push();
        ellipseMode(CENTER);
        fill(255,0,238);
        ellipse( this.x, this.y, this.radius);
        pop();
      }
}