class Dustbin {
  constructor() {
    var options = {
      isStatic:true,
      
    }
   
    this.body1= Bodies.rectangle(920,344,20,105, options);
    this.body2= Bodies.rectangle(965,380,110,20, options);
    this.body3= Bodies.rectangle(1010,344,20,105, options);
  
    this.image = loadImage("sprites/dustbingreen.png")
    World.add(world, this.body1);
    World.add(world, this.body2);
    World.add(world, this.body3);
   
  }
  display(){
   
    imageMode(CENTER);
    image(this.image,965,344,110,105);
    
  }
};