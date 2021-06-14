class Paper {
   constructor() {
       var options = {
           restitution: 0.3,
           friction: 0,
           density:1.2,
           isStatic:false
       }
       this.r = 30;
       this.body = Bodies.circle(width/2, 350, this.r, options);
       this.image=loadImage("paper.png")
       World.add(world, this.body);
   }
   display() {
       var pos = this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       imageMode(CENTER);
       noStroke();
       fill("white");
       ellipseMode(RADIUS);
       ellipse(width/2, 350,this.r,this.r);
       image(this.image,this.body.position.x/12,this.body.position.y/12,80,80)
       this.visiblity=0;
       pop();
   }

};