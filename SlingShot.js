class SlingShot
{
    constructor(bodyA, pointB){
        var options=
        {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.09,
            length:50
        }
        this.Sling=constraint.create(options)
        World.add(world,this.Sling)
    }
    fly(){
        this.Sling.bodyA=null;
    }
    display(){
        if(this.Sling.bodyA!=null){

        
            var posA=this.Sling.bodyA.position;
            var pointB=this.Sling.pointB;
            line(posA.x, posA.y, pointB.x, pointB.y);
        }
    }
}