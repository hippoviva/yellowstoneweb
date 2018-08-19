///  Constructor for objects that represent the organisms in the food Web
///  Builds the buttons and places the circles for each organism in then
// food web above based on the selection.



class Bunny {
// eats grass, forbes, sage
  constructor(level,img) {
    this.tropicLevel=level;
    this.r = 30;
    this.coler = "red"
    this.img = img;
    this.pos =0;
    this.toppos = createVector(0,0);
    this.howmanyonrow=0;
    this.arraypos=0;
    this.topx2pos=1;
    this.prey =[];
  }

  run(i,pos) {
    this.update();
    this.arraypos = i;
    this.pos=(i*pos+pos/2)
    this.display();
  //  console.log(i,pos);
  }

  // Method to update button
  update() {

}
preyanimals(){
  this.prey = ["Grass","Forbes","Sage"];
}



 clicked(px,py){
   ///make prey array
   this.preyanimals();
   if(dist(px, py, this.pos,shortHeight+40)<this.r){
     if (this.coler == "red"){
       this.coler = "green";
     }
     else{this.coler="red";
       }
}
}


toplocation(){
let tx = (width/(this.howmanyonrow+1)) * this.topx2pos
 let ty = (shortHeight/3*this.tropicLevel + shortHeight/6);
 this.toppos=createVector(tx,ty);
 //console.log(this.toppos);
}

topCircles(){

if(this.coler=="green"){
  this.toplocation();
  push();
  stroke(0);
  strokeWeight(1);
  fill(this.coler);
  ellipse(this.toppos.x,this.toppos.y,this.r*2,this.r*2);
  image(this.img,this.toppos.x-12, this.toppos.y-14,30,30);
pop();
}
}

bottombuttons (){
  push();
  translate(0,shortHeight);
  stroke(0);
  strokeWeight(1);
  fill(this.coler);
  ellipse(this.pos,40,this.r,this.r);
  fill(125);
  ellipse(this.pos,40,this.r-5, this.r-5);
  image(this.img,(this.pos-9),30, 20,20);
pop();
}

  // Method to display
  display() {

    this.topCircles();
    this.bottombuttons();
  }
}
//////////////////OTHER CLASSES//////////////


class Grass extends Bunny{
  preyanimals(){
    this.prey = ["Sun"];
  }
  display() {
      this.topCircles();
    this.bottombuttons();
  }

}
class Pine extends Bunny{
  preyanimals(){
    this.prey = ["Sun"];
  }
  display() {
      this.topCircles();
   this.bottombuttons();
  }
}

class Sage extends Bunny{
  preyanimals(){
    this.prey = ["Sun"];
  }
display() {
 this.bottombuttons();
   this.topCircles();
  }
}

class Chip extends Bunny{
//eats grass, forbes
display() {
 this.bottombuttons();
   this.topCircles();
  }
}

class Willow extends Bunny{
  preyanimals(){
    this.prey = ["Sun"];
  }

display() {
this.bottombuttons();
  this.topCircles();
}
}
class Forbes extends Bunny{
  preyanimals(){
    this.prey = ["Sun"];
  }

display() {
this.bottombuttons();
  this.topCircles();
}
}

class Muley extends Bunny{
  preyanimals(){
    this.prey = ["Sage","Aspen,","Willow"];
  }
// eats willow
display() {
 this.bottombuttons();
  this.topCircles();
 }
}

class Elk extends Bunny{
  preyanimals(){
    this.prey = ["Pine","Aspen,","Willow"];
  }

display() {
 this.bottombuttons();
   this.topCircles();
}
}

class Wolf extends Bunny{
  preyanimals(){
    this.prey = ["Elk","Coyote", "Muley"];
  }
  display() {
   this.bottombuttons();
     this.topCircles();
  }
}

class Coyote extends Bunny{
  preyanimals(){
    this.prey = ["Chip","Bunny","Beaver","Mouse"];
  }
  display() {
   this.bottombuttons();
     this.topCircles();
  }
}
class Beaver extends Bunny{
  preyanimals(){
    this.prey = ["Pine","Aspen,","Willow"];
  }

  display() {
   this.bottombuttons();
     this.topCircles();
  }
}
class Mouse extends Bunny{
  display() {
   this.bottombuttons();
     this.topCircles();
  }

}
