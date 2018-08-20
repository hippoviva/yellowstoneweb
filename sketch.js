var mgr;
var shortWidth;
var shortHeight;
var imgbun, imgbundead, imgsage, imgwolf,wolfdead,imgchip, imgpine, imggrass,imgforbes,imgelkbig;

function preload(){
  imgbeaver = loadImage('orgimages/beaver.png');
  imgbun = loadImage('orgimages/bunny2020.png');
  imgsage = loadImage('orgimages/sage2020.png');
  imgwolf = loadImage('orgimages/wolf2020.png');
  imgchip = loadImage('orgimages/chipmunk2020.png');
  imgpine = loadImage('orgimages/pinetree2020.png');
  imggrass = loadImage('orgimages/grass.png');
  imgelk=loadImage('orgimages/elk.png');
  imgcoyote = loadImage('orgimages/coyote.png');
  imgmouse = loadImage('orgimages/mouse.png');
  imgwillow = loadImage('orgimages/willow.png');
  imgmuley = loadImage('orgimages/muley.png');
  imgforbes = loadImage('orgimages/forbes.png');
  imgelkbig = loadImage('orgimages/ElkinYellowstone.jpg');


}


function setup()
{
    createCanvas(800, 500);
    mgr = new SceneManager();
    shortWidth = width-100;
    shortHeight = height-100;
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene ( Animation1 );
    mgr.addScene ( Animation2 );
  //  mgr.addScene ( Animation3 );
    mgr.showNextScene();
}
function draw()
{
    mgr.draw();
}
function mouseClicked()
{
    mgr.handleEvent("mouseClicked");
}
function touchStarted()
{
    mgt.handleEvent("touchStarted);
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( Animation1 );
            break;
        case '2':
            mgr.showScene( Animation2 );
            break;
    //    case '3':
      //      mgr.showScene( Animation3 );
    //        break;
    }

    // ... then dispatch via the SceneManager.
    mgr.handleEvent("keyPressed");
}
