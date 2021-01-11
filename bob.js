class Bob {

    constructor(x, y, radius){

    var options = {
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2,
       // inertia:1000
    }

        this.body = Bodies.circle(x, y, radius, options)
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world, this.body);
    }

    display(){
        //circleMode(CENTER);
        fill("white");
        circle(this.body.position.x,this.body.position.y,this.radius*2);
    }


}