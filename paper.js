class Paper{
    constructor(x,y){
        var option={
            restitution:0.3,
            density:1.2,
            friction:0.5,
            isStatic:false
        }
        this.body=Bodies.circle(x,y,15,option);
        World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      fill("pink");
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,15,15)

    }
}