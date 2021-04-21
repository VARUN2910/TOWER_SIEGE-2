class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.05,
            length: 10
        }
        this.pointB = pointB
        this.Launcher= Constraint.create(options);
        World.add(world, this.Launcher);
    }

      fly(){
       this.Launcher.bodyA = null;
    }
      attach(body){
        this.Launcher.bodyA = body;
      }
      display(){
          if(this.Launcher.bodyA){
            var pointA = this.Launcher.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(83, 218, 181);
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
          }
    }
    
}



