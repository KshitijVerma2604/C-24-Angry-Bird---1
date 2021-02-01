class Ground{
    // All the properties and functions should be defined here

    //Constructor method is used to declare properties of the object
    constructor(x,y,width,height){
        var options = {
            isStatic :true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
    }

    display(){
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill("brown");
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}