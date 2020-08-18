class Plinko {
    constructor(x, y, radius) {
      var options = {
        isStatic: true
      }

      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      //translate(pos.x,pos.y);
      //rotate(this.body.angle);
      fill("red");
      ellipseMode(CENTER);
      ellipse(pos.x,pos.y,this.radius*2,this.radius*2)
      pop();
    }
  };
