class Bob {
    constructor(x, y,radius) {
      var options = {
        isStatic: false,
        restitution: 1,
        friction: 0,
        density: 0.8
      }
      this.body = Bodies.circle(x,y,radius,options,0);
      this.radius = radius;
      World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(this.body.position.x,this.body.position.y);
      fill("white");
      ellipseMode(RADIUS);
      ellipse(0,0,this.radius);
      circle(pos.x,pos.y,this.radius);
      pop();
    }
  }
  


