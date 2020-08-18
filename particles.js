class Particle {
    constructor(x, y, radius) {
      var options = {
      restitution:0.4
      }
      
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.color=color(random(0,255), random(0,255), random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
    
      //image(this.image,pos.x,pos.y,30,30);
      fill(this.color);
      ellipseMode(RADIUS)
      ellipse(0,0,this.radius,this.radius)
      pop();
    }
  };
