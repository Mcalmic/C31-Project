class Drops{
    constructor(x, y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body)
    }
    display(){
        background(255);
        Engine.update(engine);
        if(this.body.position.y < 600){
            this.body.position.y = 0
        }
        ellipse(this.body.position.x, this.body.position.y, 10, 10)
    }
}