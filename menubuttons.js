class  Menubutton {
// eats grass, forbes, sage
  constructor() {
    this.r = 30;
    this.linesArr = [];
    this.oncolor = "red";
    this.bpos = createVector(40,height-20);
  }

 clicked1(px,py,lines){
   this.linesArr = lines;
   if(dist(px, py, this.bpos.x,this.bpos.y)<this.r){
     if (this.oncolor == "red"){
       this.oncolor = "green";
    //   this.linesdraw();

     }
     else{this.oncolor="red";

     }
//  console.log("mouse clicked on lines menu   -"+this.oncolor, this.linesArr);
//  console.log(this.constructor.name);
 //console.log( this.orgbuttons.length);
}
}
linesdraw(){
  if (this.linesArr.length>=1){
   for(let i=0;i<this.linesArr.length; i++){
   strokeWeight(2);
   line(this.linesArr[i][0].x, this.linesArr[i][0].y, this.linesArr[i][1].x, this.linesArr[i][1].y);
   }
}
}


bottombuttons (){
  push();
  stroke(0);
  strokeWeight(1);
  fill(this.oncolor);
  ellipse(this.bpos.x,this.bpos.y,this.r,this.r);
  fill(125);
  ellipse(this.bpos.x,this.bpos.y, this.r-5, this.r-5);
  fill(255);
  text("Lines",this.bpos.x, this.bpos.y+2);
  //image(this.img,(this.pos-8), 30);
pop();
}

  // Method to display
  display() {

    this.bottombuttons();
    if(this.oncolor=="green"){
    this.linesdraw();
    }
  }
}


class Scenebutton {
// eats grass, forbes, sage
  constructor() {
    this.r = 30;
    this.oncolor = "blue";
    this.bpos = createVector(120,height-20);
  }

 clicked2(px,py){
   console.log("intro clicked through")
//   this.linesArr = lines;
   if(dist(px, py, this.bpos.x,this.bpos.y)<this.r){
       mgr.showScene( Animation1 );
//  this.keypressed = 1;//  this.sceneManager.showNextScene();
    this.oncolor = "yellow";
     }
}



gotointrobutton (){
  push();
  stroke(0);
  strokeWeight(1);
  fill(this.oncolor);
  rectMode(CENTER);
  rect(this.bpos.x,this.bpos.y,this.r*2,this.r);
  fill(125);
  rect(this.bpos.x,this.bpos.y, this.r*2-5, this.r-5);
  fill(255);
  text("Go to Intro",this.bpos.x, this.bpos.y+2);
  //image(this.img,(this.pos-8), 30);
pop();
}

  // Method to display
  display() {

    this.gotointrobutton();
//    if(this.oncolor=="green"){
  //  this.linesdraw();
    }
  }
