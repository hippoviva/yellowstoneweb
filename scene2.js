function Animation3( )
{
    this.oAnim1 = null;
    var num1=0;

this.setup = function()
{
    // access a different scene using the SceneManager
    oAnim1 = this.sceneManager.findScene( Animation2 );
    //var num1;

}
this.draw = function()
{
    background("lightblue");
    var r = sin( frameCount * 0.01 );

    fill("white");
    ellipse( shortWidth / 2, height / 2, map(r, 0, 1, 100, 200) );
    //var num1;
    //var num1=0;
    num1 +=1;
    text("number count: "+ num1,10,height-30);
    if ( oAnim1 != null )
    {
        fill("black");
        textAlign(LEFT);
        text( "Scene1 y: " + oAnim1.oScene.y, 10, height - 20);
    }
}
//this.mousePressed = function()
//{
  //  this.sceneManager.showNextScene();
//}
}
