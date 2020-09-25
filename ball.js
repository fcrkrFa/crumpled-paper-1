class Ball
{
    constructor(x,y)
    {
        var options = 
        {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,50,50,options)
        World.add(world, this.body)
    }
    display()
    {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill(255);
        rect(0,0,50,50);
        pop();
    }
}