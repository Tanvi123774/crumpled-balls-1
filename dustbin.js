class Dustbin{
    constructor() {
 var options ={
     isStatic: true
 }
this.bodybottom= Bodies.rectangle(600,650,200,20,options);
this.width1=200;
this.height1=20;

this.bodyleft= Bodies.rectangle(500,610,20,100,options);
this.width2=20;
this.height2=100;
    
this.bodyright= Bodies.rectangle(700,610,20,100,options);
this.width3=20;
this.height3=100;
this.color="yellow";

World.add(world,this.bodybottom);
World.add(world,this.bodyleft);
World.add(world,this.bodyright);
}
display(){
var bottom=this.bodybottom.position;
var dustbinLeft=this.bodyleft.position;
var dustbinRight=this.bodyright.position;
rectMode(CENTER);
fill(this.color);
rect(bottom.x,bottom.y,this.width1,this.height1);
rect(dustbinLeft.x,dustbinLeft.y,this.width2,this.height2);
rect(dustbinRight.x,dustbinRight.y,this.width3,this.height3);
}


}