class Dustbin
{
    constructor(x,y, width, height)
    {
        var options = 
        {
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        
        this.body = Bodies.rect(x,y,50,50,options)
        this.width = width;
        this.height = height;
        World.add(world, this.body)
    }
    display()
    {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectmode(CENTER);
        fill(255);
        rect(0,0,50,50);
        pop();
    }
}