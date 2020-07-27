class Paper{
    constructor(x,y){
        var paperObject_options ={
            isStatic:false,
            restitution : 0.3,
            density:1.2,
            friction:0.5  
        }
        this.radius = 15;
        this.body = Bodies.circle(x,y,this.radius,paperObject_options);
        this.image = loadImage("sprites/paper.png");
        World.add(world,this.body);
        
    }

    
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS); 
        ellipse(0,0,this.radius,this.radius);     
        imageMode(CENTER);
        image(this.image,0, 0, 45,45);       
        pop();
    }
}