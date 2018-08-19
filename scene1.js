//prototype for Food Web drawing app


function Animation2()
{
    this.but;
    this.hbut;
    this.y = 0;
    this.orgbuttons = [];
    this.places = [];
    this.lines2prey =[];


    this.setup = function(){
    this.orgbuttons.push(new Pine(2,imgpine));
    this.orgbuttons.push(new Grass(2,imggrass));
    this.orgbuttons.push(new Willow(2,imgwillow));
    this.orgbuttons.push(new Forbes(2,imgforbes));
    this.orgbuttons.push(new Sage(2,imgsage));
    this.orgbuttons.push(new Bunny(1,imgbun));
    this.orgbuttons.push(new Chip(1,imgchip));
    this.orgbuttons.push(new Elk(1,imgelk));
    this.orgbuttons.push(new Muley(1,imgmuley));
    this.orgbuttons.push(new Mouse(1,imgmouse));
    this.orgbuttons.push(new Beaver(1,imgbeaver));
    this.orgbuttons.push(new Coyote(0,imgcoyote));
    this.orgbuttons.push(new Wolf(0,imgwolf));
    this.linebutton = new Menubutton();
    this.introbutton = new Scenebutton();
    }


    this.draw = function()
    {
        background("teal");
        fill(200);

      //  line(0, this.y, width, this.y);
        //this.y++;
      //  if ( this.y > shortHeight )
      //      {this.y = 0;}
        rect(0,shortHeight,width,height-shortHeight);
        this.linebutton.display();
        this.introbutton.display();
        for(let i=0; i<this.orgbuttons.length; i++){
          let pos = (width/this.orgbuttons.length);
        this.orgbuttons[i].run(i, pos);
        }

    }

    this.mousePressed = function(){
          for(let i=0; i<this.orgbuttons.length; i++){
      this.orgbuttons[i].clicked(mouseX,mouseY);
        }
        this.places();
        this.lines();
        this.linebutton.clicked(mouseX,mouseY,this.lines2prey);
        this.introbutton.clicked(mouseX,mouseY);
    //    this.sceneManager.showNextScene();
    }

    this.places = function(){
      let tl0=0;
      let tl1=0;
      let tl2=0;
      let counterx0=1;
      let counterx1=1;
      let counterx2=1;
      for(let i=0; i<this.orgbuttons.length; i++){
        if(this.orgbuttons[i].tropicLevel==0 && this.orgbuttons[i].coler=="green"){
          tl0+=1;
          this.orgbuttons[i].topx2pos = counterx0;
          counterx0 +=1;
        }
        if(this.orgbuttons[i].tropicLevel==1 && this.orgbuttons[i].coler=="green"){
          tl1+=1;
          this.orgbuttons[i].topx2pos = counterx1;
          counterx1 +=1;
        }
        if(this.orgbuttons[i].tropicLevel==2 && this.orgbuttons[i].coler=="green"){
        tl2+=1;
        this.orgbuttons[i].topx2pos = counterx2;
        counterx2 +=1;
      }
      }
      for(let j=0; j<this.orgbuttons.length; j++){
        if(this.orgbuttons[j].tropicLevel==0){this.orgbuttons[j].howmanyonrow= tl0};
          if(this.orgbuttons[j].tropicLevel==1) {this.orgbuttons[j].howmanyonrow= tl1};
          if(this.orgbuttons[j].tropicLevel==2) {this.orgbuttons[j].howmanyonrow= tl2};
          this.orgbuttons[j].toplocation();
      }
    }

    this.lines = function(){
      this.lines2prey = [];
      for (let i=0; i<this.orgbuttons.length; i++){
        if(this.orgbuttons[i].coler=="green"){
          for(let j=0; j<this.orgbuttons.length; j++){
            if(this.orgbuttons[j].coler=="green"&& this.orgbuttons[i].prey.includes(this.orgbuttons[j].constructor.name)==true)
            {
            let vloc = [this.orgbuttons[i].toppos, this.orgbuttons[j].toppos]
            this.lines2prey.push(vloc);
        //    console.log(vloc);
            }
          }
        }
      }
      //  console.log("end of loops");
    }

}
