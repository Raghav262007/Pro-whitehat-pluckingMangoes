class Launcher {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.04,
      length: 10,
    };
    this.pointB = pointB;
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
  }

  fly() {
    this.sling.bodyA = null;
  }

  attach() {
    launcherObj = new Launcher(stoneObj.body, { x: 235, y: 420 });
    function mouseDragged() {
      Matter.Body.setPosition(stoneObj.body, { x: mouseX, y: mouseY });
    }

    function mouseReleased() {
      launcherObj.fly();
    }
  }

  display() {
    if (this.sling.bodyA) {
      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(4);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
}
