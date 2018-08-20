function Animation1()
{
    var textX;
    var textY;
    this.setup = function(){
      this.x=22;
    }

    // enter() will be executed each time the SceneManager switches
    // to this animation
    // Note: Animation1() doesn't have setup() or draw()
    this.enter = function()
    {
        textX = 10;
        textY = 0;
        background("teal");
        image(imgelkbig, 0,0,width, height)
        textAlign(CENTER);
        fill("white");
        text("WELCOME TO THE YELLOWSTONE FOOD WEB SIMULATOR\n\n"+
          //  "Press keys 1,  to jump to a particular animation\n" +
            "touch screen or press mouse to advance animation.\n\n", width / 2, height / 4);
    //    stroke(150);
      //  rect(30,30,20,30);
      //  ellipse(20,20,20,20);
    }
    this.keyPressed = function()
    {
    //    text(keyCode, textX, textY += 10);
    //    if ( textY > height )
    //    {
    //        textX += 20;
    //        textY = 0;
    //    }
    }
    this.mouseClicked = function()
    {
        this.sceneManager.showNextScene();
    }
}
